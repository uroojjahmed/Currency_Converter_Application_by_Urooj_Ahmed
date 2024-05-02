#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Welcome message
console.log(chalk.bgBlue.bold("\n\t\t Welcome to -Currency Converter- by Urooj Ahmed\t\t\n"))

//Creat a list of Currency Converter

let exchangeRate: any = {
    "USD": 1, //Base Currency(USA Dollar)
    "EUR": 0.93, // European Currency (Euro)
    "CAD": 1.37, //Canadian Dollar)
    "AUD": 1.52, // Australian Dollar
    "JYP": 153.53, //Japanese Yen
    "CNY": 7.24, //China Yuan/Renminbi
    "KWD": 0.31, //Kuwaiti Dinar
    "QAR": 3.64, //Qatar Rial
    "RUB": 93.51, //Russian Rouble
    "AED": 3.67, //United Arab Emirates Dirham
    "KRW": 1367.90, //South Korea Won
    "SAR": 3.75, //Saudi Arabia Riyal
    "PKR": 278.70, //Pakistani Rupees
}
let userAnswer = await inquirer.prompt([
    {
        name: "form_currency",
        type: "list",
        message: "Select your currency you want convert from: ",
        choices: ["USD" ,"EUR", "CAD","AUD", "JYP","CNY", "KWD","QAR", "RUB", "AED","KRW", "SAR", "PKR"]
 },
   {
    name: "to_currency",
    type: "list",
    message: "Select the currency to convert into: ",
    choices: ["USD" ,"EUR", "CAD","AUD", "JYP","CNY", "KWD","QAR", "RUB", "AED","KRW", "SAR", "PKR"]
},  
{
     name: "amount",
     type: " input",
     message: "Enter the amount you want convert: "
} 
]);
let fromAmount = exchangeRate[userAnswer.form_currency];
let toAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount

///Formula of Conversion amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

//Disply Conversion amount
console.log(`Converted Amount = ${chalk.greenBright(convertedAmount.toFixed(2))}`);