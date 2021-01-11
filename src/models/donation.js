import {properties} from "../properties";

//Donation object to abstract api
export function Donation(name, message, amount){

    this.name = name;
    this.message = message;

    //Set the amount of decimals and add currency from the properties file
    this.amount = `${amount.toFixed(properties.numberOfDecimals)} ${properties.currency}`;
}