import {properties} from "../properties";
import {Project} from "../models/project";
import {Charity} from "../models/charity";
import {Donation} from "../models/donation";
import {NewsItem} from "../models/newsItem";

//todo: Implement production backend
/*
    Api service that contains all the api calls to the backend.
    The backend url and endpoints are defined in the properties file.

    The retrieved data is converted to predefined models to abstract the api.
 */

export const handleGetProjects = async () =>{
    return fetch(`${properties.backendUrl}/project`)
        .then(response => response.json())
        .then(data => {
            const projects = [];
            data.forEach(p => {
                projects.push(new Project(
                    p.id,
                    p.title,
                    p.description,
                    p.image_url
                ))
            })
            console.log("Projects", projects);
            return projects;
        })
};

export const handleGetDonations = async () =>{
    return fetch(`${properties.backendUrl}/donation`)
        .then(response => response.json())
        .then(data => {
            const donations = [];
            data.forEach(d => {
                donations.push(new Donation(
                    d.name,
                    d.message,
                    d.amount,
                ))
            })
            console.log("Donations", donations);
            return donations;
        })
};

export const handleGetCharities = async () =>{
    return fetch(`${properties.backendUrl}/charity`)
        .then(response => response.json())
        .then(data => {
            const charities = [];
            data.forEach(c => {
                charities.push(new Charity(
                    c.name,
                    c.description,
                    c.external_url,
                    c.logo_url
                ))
            })
            console.log("Charities", charities);
            return charities;
        })
};

export const handleGetNewsItems = async () =>{
    return fetch(`${properties.backendUrl}/news`)
        .then(response => response.json())
        .then(data => {
            const newsItems = [];
            data.forEach(n => {
                newsItems.push(new NewsItem(
                    n.title,
                    n.description,
                    n.image_url,
                    n.external_url
                ))
            })
            console.log("News Items", newsItems);
            return newsItems;
        })
};