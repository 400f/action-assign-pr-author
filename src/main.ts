import * as core from '@actions/core'
import * as github from '@actions/github'

const ctx = github.context

async function run(): Promise<void> {
  try {
    // const token = core.getInput('GITHUB_TOKEN', {required: true})
    // const author = ctx.payload
    core.debug(JSON.stringify(ctx.payload.pull_request))

    // const octokit = github.getOctokit(token)

    // const {owner, repo} = ctx.repo
    // const pull_number = ctx.payload.pull_request?.number

    // if (!pull_number) {
    //   core.debug('There is no pull_number')
    //   return
    // }
    // const {data: pullRequest} = await octokit.pulls.get({
    //   owner,
    //   repo,
    //   pull_number
    // })

    // if (pullRequest.assignee) {
    //   core.debug('This PR already has been assigned')
    //   return
    // }

    // await octokit.issues.addAssignees({
    //   owner,
    //   repo,
    //   issue_number: pull_number,
    //   assignees:
    // })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
