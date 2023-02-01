const github = require("@actions/github")
const core = require("@actions/core")

const accessToken = core.getInput("access-token")
const octokit = github.getOctokit(accessToken)

verifyCommitMessagesOfPullRequest().then((exitCode) => {
	process.exit(exitCode)
})

async function verifyCommitMessagesOfPullRequest() {
	const commitHeadlines = await getCommitHeadlinesOfPullRequest()

	if (commitHeadlines === null) {
		return -1
	}

	const mergeCommits = commitHeadlines.filter((headline) =>
		headline.toLowerCase().startsWith("merge")
	)

	const commitsWithTrailingPunctuationInHeadline = commitHeadlines.filter(
		(headline) =>
			headline.endsWith(".") ||
			headline.endsWith(",") ||
			headline.endsWith(";") ||
			headline.endsWith(":")
	)

	const wipCommits = commitHeadlines.filter((headline) =>
		headline
			.toLowerCase()
			.split(" ")
			.some((word) => word === "wip")
	)

	const fixupAndSquashCommits = commitHeadlines.filter(
		(headline) =>
			headline.startsWith("fixup!") ||
			headline.startsWith("!fixup") ||
			headline.startsWith("squash!") ||
			headline.startsWith("!squash")
	)

	const hasIllegalCommits =
		mergeCommits.length > 0 ||
		commitsWithTrailingPunctuationInHeadline.length > 0 ||
		wipCommits.length > 0 ||
		fixupAndSquashCommits.length > 0

	if (hasIllegalCommits) {
		console.log("\n\n") // This makes the error messages stand out in the GitHub Action log.
	}

	printIllegalCommits(
		mergeCommits,
		"This pull request has merge commits",
		"This clutters the Git history and makes it difficult to rebase interactively. Please undo the merge commit and rebase your branch onto the target branch instead"
	)

	printIllegalCommits(
		commitsWithTrailingPunctuationInHeadline,
		"This pull request has commits with trailing punctuation in the headline",
		"This is non-standard. Please reword the commits to remove the trailing punctuation"
	)

	printIllegalCommits(
		wipCommits,
		"This pull request has WIP commits",
		"Before merging the pull request, please rebase interactively to resolve the WIP commits"
	)

	printIllegalCommits(
		fixupAndSquashCommits,
		"This pull request has fixup and/or squash commits",
		"Before merging the pull request, please rebase interactively to resolve fixup and squash commits"
	)

	if (hasIllegalCommits) {
		return 1
	}

	return 0
}

async function getCommitHeadlinesOfPullRequest() {
	const pullRequestNumber = getPullRequestNumber()

	if (pullRequestNumber === null) {
		return null
	}

	const [owner, repository] = process.env.GITHUB_REPOSITORY.split("/")

	const response = await octokit.rest.pulls.listCommits({
		owner,
		repo: repository,
		pull_number: pullRequestNumber,
	})

	return response.data.map(({ commit }) => commit.message.split("\n")[0])
}

function getPullRequestNumber() {
	const pullRequestRef = /^refs\/pull\/(\d+)\/merge$/u
	const pullRequestNumberMatch = process.env.GITHUB_REF.match(pullRequestRef)

	if (pullRequestNumberMatch === null || pullRequestNumberMatch.length < 2) {
		return null
	}

	const pullRequestNumber = Number.parseInt(pullRequestNumberMatch[1])
	return Number.isFinite(pullRequestNumber) ? pullRequestNumber : null
}

function printIllegalCommits(illegalCommitHeadlines, title, explanation) {
	if (illegalCommitHeadlines.length > 0) {
		console.error(
			`${title}:\n\n${makeIndentedListOfCommitHeadlines(
				illegalCommitHeadlines
			)}\n\n${explanation}.\n\n\n`
		)
	}
}

function makeIndentedListOfCommitHeadlines(commitHeadlines) {
	return commitHeadlines.map((headline) => `    ${headline}`).join("\n")
}
