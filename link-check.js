#!/usr/bin/env node

'use strict';
import fs from 'fs';
import {sync}  from 'glob';
import path from 'path';
import chalk from 'chalk';

import markdownLinkCheck from 'markdown-link-check';

const files = sync("**/*.md", {ignore: ["node_modules/**/*.md"]})

const config = JSON.parse(fs.readFileSync(".markdown-link-check.json"));
config.timeout = '30s'

files.forEach(function(file) {
  const markdown = fs.readFileSync(file).toString();
  const opts = Object.assign({}, config);

  opts.baseUrl = path.dirname(path.resolve(file)) + '/';

  markdownLinkCheck(markdown, opts, function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }

    console.log(chalk.green("Reading: " + file));

    results.forEach(function (result) {
      if(result.status === "dead") {
        if (result.statusCode == 500) {
          console.log(chalk.yellow("Server error on target: " + result.link));
        }
        else {
          process.exitCode = 1
          console.log(chalk.red("Dead: " + result.link));
        }
      }
    });
  });
});
