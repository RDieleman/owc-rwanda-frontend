import {properties} from "../properties";
import {Project} from "../models/project";
import {Charity} from "../models/charity";
import {Donation} from "../models/donation";
import {NewsItem} from "../models/newsItem";


export const handleGetProjects = async () =>{
    console.log(`Retrieving discussions...`);
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
    console.log(`Retrieving donations...`);
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
    console.log(`Retrieving charities...`);
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
    console.log(`Retrieving news...`);
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