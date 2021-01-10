export function Project(id, title, description, imageUrl){
    this.id = id;
    this.title = title;
    this.description = description;

    //Set to placeholder image if imageUrl is empty
    this.imageUrl = (imageUrl) ? imageUrl: "/images/placeholder-image.png";
}
