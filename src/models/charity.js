// Charity object to abstract api
export function Charity(name, description, externalUrl, logoUrl){
    this.name = name;
    this.description = description;

    //Set to # if no external url is present
    this.externalUrl = (externalUrl) ? externalUrl : "#";

    this.logoUrl = logoUrl;
}