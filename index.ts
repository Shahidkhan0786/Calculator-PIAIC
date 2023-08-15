#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import add from "./add.js";
import sub from "./sub.js";
import divide from "./divide.js";
import mult from "./mul.js";

async function main() {
  const answer = await inquirer.prompt([
    {
      type: "number",
      name: "n1",
      messsage: "please enter the n1",
    },
    {
      type: "number",
      name: "n2",
      messsage: "please enter the n2",
    },
    {
      type: "list",
      name: "operator",
      message: "please select rhe operation",
      choices: [
        { name: "addition", value: add },
        { name: "sub", value: sub },
        { name: "mul", value: mult },
        { name: "divide", value: divide },
      ],
    },
  ]);

  console.log(chalk.bgGreen(answer.operator(answer.n1, answer.n2)));
}

let confirm;
do {
  await main();
  confirm = await inquirer.prompt([
    {
      type: "confirm",
      name: "con",
      message: "do you want to restart",
    },
  ]);
} while (confirm.con);
