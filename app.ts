#! /usr/bin/env node

console.log('\n \t " Wellcome to ATM Machine " \t \n');

import inquirer from "inquirer";

let mybalacne = 10000; // Doller
let mypin = 1111;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your PIN number:",
    type: "number",
  },
]);
if (pinAnswer.pin === mypin) {
    let accountType = await inquirer.prompt([{
      name:'accountType',
      message:'Enter your account type',
      type:'list',
      choices: ['Current Account' , 'Saving Account']
    }])
  let selectAnswer = await inquirer.prompt([
    {
      name: "select",
      message: "Pleace select method",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"], 
    },
  ]);

  if (selectAnswer.select === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your Withdraw amount: ",
        type: "number",
      },
    ]);
    if (mybalacne < amountAnswer.amount) {
      console.log("Insufficient Balance");
    } else {
      mybalacne -= amountAnswer.amount;
      console.log(`Your Remaining Balance is:  ${mybalacne}`);
    }
  }
  if (selectAnswer.select === "Fast Cash") {
    let fastCash = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Choses your amount",
        type: "list",
        choices: ["1000", "2000", "4000", "5000"],
      },
    ]);
    mybalacne -= fastCash.fastCash;
    console.log(`Your Remaining Balance is:  ${mybalacne}`);
  }
  if (selectAnswer.select === "Check Balance") {
    console.log(`Your Current Balance is:  ${mybalacne}`);
  }
} else {
  console.log("Incorrect Pin code");
}