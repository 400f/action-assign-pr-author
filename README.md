# Github action assign PR author

A Github action workflow that assign the PR author.

## Usage

```yml
name: auto assign pr author

on:
  pull_request:
    types: [opened, ready_for_review]

jobs:
  auto-assign-reviewer:
    runs-on: ubuntu-latest
    steps:
      - name: Run assignment of author
        uses: 400f/action-assign-pr-author@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Development

```sh
$ yarn build && yarn package
```
このリポジトリでプルリク作ったらワークフロー走るからそこでテストする。
