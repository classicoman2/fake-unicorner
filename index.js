#!/usr/bin/env node
const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('set', 'Say that this person is an unicorns')
  .example('$0 set -n foo', 'Says that foo is an unicorn')
  .alias('n', 'name')
  .nargs('n', 1)
  .describe('n', 'Name to unicornize')
  .demandOption(['n'])
  .help('h')
  .alias('h', 'help').argv


const chalk = require('chalk');

  // Get CLI parameters

  const name = argv.name;

  console.log(chalk.cyan(`${name} is an Unicorn!`));
