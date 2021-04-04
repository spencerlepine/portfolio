---
title: Quickly Open GitHub Repo in Browser From Terminal
description: Create custom Git commands to open the repository web page in the browser.
date: 2022-10-22
draft: false
slug: /blog/quickly-open-github-repo-in-browser-from-terminal
tags:
  - Git
  - Workflow
  - GitHub
  - Scripts
  - Terminal
  - Commands
thumbnail: 'thumbnail.png'
---

I work a lot with the Git CLI and GitHub repository cloned on my local machine. I need a fast way to open the repository web page in the browser. Here is how I solved this, specifically on macOS.

To start, the the quickest way to get the remote url is the following bash command:

```sh
git remote -v | awk '/origin.*push/ {print $2}' | xargs open
```

That command alone is not very helpful, since it will be difficult to memorize and type out repeatedly.

Instead, we can create a user-friendly command to use in the macOS terminal. By creating a custom named script in the `bin` directory, the terminal will execute it when the command is used.

First, navigate to the bin directory: 

```sh
$ cd ~/../../usr/local/bin

# Make sure this path matches up with your 
# configuration for the terminal (e.g. PATH=$PATH:$HOME/bin)
```

Now create the script file, here I named the command `repo-open`:

```sh
$ vim repo-open
```

Now paste the script contents into the file editor:

```sh
 #!/bin/bash

git remote -v | awk '/origin.*push/ {print $2}' | xargs open
```

Save the file:

- press ‘ESC’
- press ‘SHIFT’ + ‘:’
- type ‘wq’ + ENTER

Create the executable:
```sh
$ chmod +x repo-open
```
That’s it! Now you can run the new script in the terminal. If we are in a directory with a `.git` folder, we can run `repo-open`, and it will open the remote URL in the default browser.

```sh
$ repo-open
# opens new page in the browser
```

Optionally, you can dig a little deeper into writing these scripts. Here are a few examples for Mac and Windows:

Bash script for Mac:
```sh
function gbrowse {
    gbrowsevar=$(git config --get remote.origin.url)
    printf "${gbrowsevar}"
    start $gbrowsevar
}
```
 
Script for Windows:
```sh
# GIT: open remote repository using Google Chrome
function gbrowse {
    NC='\033[0m' # No Color
    SB='\033[1;34m' # Sky Blue
    PP='\033[1;35m' # Purple
    gbrowsevar=$(git config --get remote.origin.url)
    printf "\n${PP}→ ${SB}gbrowse:${NC} Chrome\n"
    printf "${gbrowsevar}\n"
    start chrome $gbrowsevar
}

# GIT: open remote repository using Firefox
function fbrowse {
    NC='\033[0m' # No Color
    SB='\033[1;34m' # Sky Blue
    PP='\033[1;35m' # Purple
    fbrowsevar=$(git config --get remote.origin.url)
    printf "\n${PP}→ ${SB}fbrowse:${NC} Firefox\n"
    printf "${fbrowsevar}\n"
    start firefox $fbrowsevar
}
```

---

That’s all for today, I hope this article was helpful. If you have any questions, feel free to connect with me. You can find my profiles here:
* [Twitter (@spencerlepine)](https://twitter.com/SpencerLepine)
* [GitHub (@spencerlepine)](https://github.com/spencerlepine)
* [LinkedIn](https://www.linkedin.com/in/spencer-lepine/)
* [YouTube (Spencer Lepine)](https://www.youtube.com/channel/UCBL6vAHJZqUlyJp-rcFU55Q)