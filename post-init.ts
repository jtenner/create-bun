import { $ } from "bun";
import { basename } from "path";
const { path } = import.meta;
const folderName = basename(path);

// delete the post-install script
await $`rm post-install.ts`;

// initialize husky
await $`bunx husky --init`;

// setup the git repository
await $`git add --all .`;
await $`git commit -m "Initial commit"`;
const username = await $`git config --global user.name`.then(e => e.text());
await $`git remote add origin https://github.com/${username}/${folderName}.git`;
await $`git push -u origin master`;