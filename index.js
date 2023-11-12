#!/usr/bin/env node

const yargs = require('yargs');
const { argv } = yargs(process.argv);

console.log("https://www.findsakshat.com");

// Show posts on "findsakshat --posts"
if(argv.posts) {
  const posts = [
    "post-1",
    "post-2",
    "post-3",
    "post-4",
    "post-5"
  ];

  console.log(posts);
}

