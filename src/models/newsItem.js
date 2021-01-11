//News item object to abstract api
export function NewsItem(title, description, imageUrl, externalUrl){
    this.title = title;
    this.description = description;

    //Set to placeholder image if imageUrl is empty
    this.imageUrl = (imageUrl) ? imageUrl: "/images/placeholder-image.png";

    //Set to # if no external url is present
    this.externalUrl = (externalUrl) ? externalUrl : "#";
}