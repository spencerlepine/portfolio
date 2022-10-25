---
title: Git Project Configuration With Husky and ESLint
description: Git conventions using pre-commit hooks and enforcing code styles.
date: 2022-03-20
draft: false
slug: /blog/git-project-configuration-with-husky-and-eslint
tags:
  - Git
  - Husky
  - ESLint
  - Workflow
  - GitHub
thumbnail: 'thumbnail.png'
---

Working on a project with Git and GitHub is relatively simple. When a project starts to grow however, it is crucial to write clean code that other developers can read. Follow this article to learn how to set up linting and pre-commit hooks for your repository.

Let’s walk through the steps for a one-time setup to configure [husky](https://github.com/typicode/husky) pre-commit and pre-push hooks, [ESLint](https://eslint.org/) with code styles conventions, [prettier](https://prettier.io/) code formatter, and [lint-staged](https://github.com/okonet/lint-staged). Husky automatically runs a script on each commit or push. This is useful for linting files to enforce code styles that keeps the entire code base following conventions.

## Walkthrough

Install the dependencies:
```
npm install eslint husky prettier eslint-config-prettier --save-dev
```
Run the commands to install husky and the hooks:

```sh
npx husky install && npm install
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/pre-push "npx lint-staged && npm test"
```

#### Configure ESLint

Run `npm init @eslint/config` to create a config file and choose preferred code styles.

Alternatively, use this example file. In the root directory, create `.eslintrc`:
```json
{
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "prettier"
  ],
   "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
    "es6": true
  },
  "rules": {
    "no-console": "off",
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "quotes": [
      2,
      "double",
      {
        "avoidEscape": true
      }
    ]
  }
}
```

#### Configure lint-staged
Add the following key to `package.json`
```json
   ...
    "lint-staged": {
        "*.{js,json,md}": [
          "prettier --write"
        ],
        "*.js": "eslint --cache --fix",
        "*.{js,md}": "prettier --write"
     },
```

#### Configure prettier
In the root directory, create `.prettierrc`:

```json
{
  "printWidth": 85,
  "arrowParens": "always",
  "semi": false,
  "tabWidth": 2
}
```

#### Everything in action

After making changes, commit the files, and see `lint-staged` automatically run, triggered by the pre-commit hook.

```sh
my-project$ git commit -m 'example commit message'
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[example-branch 4bc4030] add new husky setup
 4 files changed, 59 insertions(+), 44 deletions(-)
```

All files have been linted and automatically fixed with `prettier`, or denied if too many errors were thrown. Now we can push the "clean" code.
```sh
my-project$ git push origin example-branch
# npx lint-staged
# ... (no errors found)
# npm test
# ... (PASS)
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 375 bytes | 375.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/spencerlepine/my-project.git
   4bc4030..b558038  example-branch -> example-branch
```

#### Boilerplate
See a working example here: [GitHub repository](https://github.com/spencerlepine/husky-boilerplate).

#### Notes
A useful trick is the `-–no-verify` flag to SKIP the pre-commit or pre-push hook.
Use this option to skip the husky script in case you force a commit/push.
```sh
my-project$ git push origin my-branch --no-verify
# husky will not run "npm test"
... pushing to GitHub
```

When `husky` released v7, it had some major changes to the configuration. There are many articles and Stack Overflow answers about husky, but some of them are misleading if they were using v4.

Hope this article helped! Interested in more, check out more articles [here](https://www.spencerlepine.com/blog).

Also find me here:
 - [Twitter](https://twitter.com/SpencerLepine)
 - [GitHub](https://github.com/spencerlepine)
 - [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
 - [YouTube](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)