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
$ npm run build && npm run package
```

このリポジトリでプルリク作ったらワークフロー走るからそこでテストする。

### Dependency Updates

The action runs the committed `dist/`, and `.github/workflows/check.yml` fails when `dist/` does not match a fresh build.
Renovate only updates `package.json` and `package-lock.json`, so its pull requests that change the bundle fail this check and are not automerged.
Rebuild on the Renovate branch and push, then merge manually:

```sh
npm ci && npm run build && npm run package
```
