#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.blueBright.bold("*********Welcome to Currency Convertor*********"));

let currency:any = 
{
    PKR: 1,            //base currency
    USD: 0.0036,  
    EUR: 0.0033,
    GBP: 0.0028,
    INR: 0.30,
    SAR: 0.067,
    KWD: 0.0011
}


let user_answer = await inquirer.prompt
(
    [
        {
            name: "from",
            message: chalk.blueBright("Enter from Currency"),
            type: "list",
            choices: ["PKR", "USD", "EUR", "GBP", "INR", "SAR", "KWD"],
        },
        {
            name: "to",
            message: chalk.blueBright("Enter to Currency"),
            type: "list",
            choices: ["PKR" ,"USD", "EUR", "GBP", "INR", "SAR", "KWD"]
        },
        {
            name: "amount",
            message: chalk.blueBright("Enter Amount to Convert"),
            type: "number",
        }
    ]
)


let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[userFromCurrency] //exchange rate
let toAmount = currency[userToCurrency] //exchange rate
let amount = user_answer.amount 
let baseAmount = amount / fromAmount; //usb base currency 
let convertedAmount = baseAmount * toAmount;

console.log(chalk.blueBright("Your converted amount from") + " " +chalk.yellowBright(user_answer.from) +  " " +chalk.blueBright("to") +" " + chalk.yellowBright(user_answer.to) +" " + chalk.blueBright("is") +" " +chalk.yellowBright.bold(convertedAmount.toFixed(2)));


