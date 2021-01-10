import {properties} from "../properties";

export function Donation(name, message, amount){

    this.name = name;
    this.message = message;

    //Set the amount of decimals and add currency
    this.amount = `${amount.toFixed(properties.numberOfDecimals)} ${properties.currency}`;
}