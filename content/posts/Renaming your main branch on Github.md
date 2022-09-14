---
title: Renaming your main branch on Github
description: How to rename your main branch on Github using the terminal only
---

## Master or Main

I prefer the base branch in my Github repos to be called main. However when you start a new project with `create nuxt-app` the main branch is called master. So this is how we update it, using the terminal only to impress everyone!

But first we have to set up the remote repository!

### Set up remote repository

I followed [this guide](https://gist.github.com/alexpchin/102854243cd066f8b88e). Start by creating a new repository on your Github account. Then copy the URL once it's been set up with the settings you choose.

In the terminal in your local repository run:

```shell
~/projects/dog-app (master) » git remote add origin <remote repository URL>
```

Then we need to set the remote by running:

```shell
~/projects/dog-app (master) » git remote -v
```

Finally we want to push the changes we have locally to Github by running:

```shell
~/projects/dog-app (master) » git push origin master
```

### Rename Master to Main

To do this using the terminal only, because we're fancy, I'm going to follow [this guide](https://www.hanselman.com/blog/easily-rename-your-git-default-branch-from-master-to-main). With all our previous changes committed and push we are going to run:

```shell
~/projects/dog-app (master) » git branch -m master main
```

And now we see:

```shell
~/projects/dog-app (main) »
```

Now we need to set the upstream so we will run:

```shell
~/projects/dog-app (main) » git push -u origin main
```

We now need to go back to Github in the browser and navigate to the repository settings for the repository we created at the start. The place where we change this on Github has changed since the guide I was following was written. Click on the settings tab for the repository and then select Branches in the navigation on the left hand side. Click on the arrows to change the default branch and in the dropdown select `main` and then update.

You can now delete the old `master` branch.

To make sure all is well we can run `yarn dev` again to run the app locally.

```shell
~/projects/dog-app (main) » yarn dev
```

Voila! We've renamed `master` to `main`.
