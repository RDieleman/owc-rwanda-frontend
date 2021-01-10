import {properties} from "../properties";
import axios from "axios";
import {Project} from "../models/project";
import {Charity} from "../models/charity";
import {Donation} from "../models/donation";
import {NewsItem} from "../models/newsItem";

const AXIOS = axios.create({
    baseURL: properties.backendUrl,
    mode: 'cors',
    headers:{
        'Access-Control-Allow-Origin': properties.frontendUrl,
        'Content-type': 'application/json'
    }
});

export const handleGetProjects = () =>{
    console.log(`Retrieving discussions...`);
    return AXIOS.get(`/project`)
        .then(response =>{

            const projects = [];
            response.data.forEach(p =>{
                projects.push(new Project(
                    p.id,
                    p.title,
                    p.description,
                    p.image_url
                ))
            })

            console.log("Projects", projects);
            return projects;
        });
};

export const handleGetCharities = () =>{
    console.log(`Retrieving charities...`);
    return AXIOS.get(`/charity`)
        .then(response =>{

            const charities = [];
            response.data.forEach(c =>{
                charities.push(new Charity(
                    c.name,
                    c.description,
                    c.external_url,
                    c.logo_url
                ))
            })

            console.log('Charities', charities);

            return charities;
        })
};

export const handleGetRecentDonations = () =>{
    console.log(`Retrieving recent donations...`);
    return AXIOS.get(`/donation`)
        .then(response =>{
            const donations = [];

            response.data.forEach(d => {
                donations.push(new Donation(
                    d.name,
                    d.message,
                    d.amount,
                ))
            })

            console.log('Donations', donations);
            return donations;
        });
};

export const handleGetNewsItems = () =>{
    console.log("Retrieving news items...");
    return AXIOS.get('/news')
        .then(response =>{

            const newsItems = [];
            response.data.forEach(n => {
                newsItems.push(new NewsItem(
                    n.title,
                    n.description,
                    n.image_url,
                    n.external_url
                ))
            });

            console.log('News', newsItems);
            return newsItems;
        })
}