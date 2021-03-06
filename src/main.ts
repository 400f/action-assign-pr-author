import * as core from '@actions/core'
import * as github from '@actions/github'

const ctx = github.context

async function run(): Promise<void> {
  try {
    const token = core.getInput('GITHUB_TOKEN', {required: true})
    const author = ctx.payload.pull_request?.user.login

    if (!author) {
      throw new Error('Fail to get PR author.')
    }

    const octokit = github.getOctokit(token)

    const {owner, repo} = ctx.repo
    const pull_number = ctx.payload.pull_request?.number

    if (!pull_number) {
      throw new Error('Fail to get pull_number')
    }
    const {data: pullRequest} = await octokit.pulls.get({
      owner,
      repo,
      pull_number
    })

    if (pullRequest.assignee) {
      core.warning('This PR has already been assigned')
      return
    }

    await octokit.issues.addAssignees({
      owner,
      repo,
      issue_number: pull_number,
      assignees: author
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
