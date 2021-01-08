import {properties} from "../properties";
import axios from "axios";

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
            console.log('Projects', response.data);
            return response.data;
        });
};

export const handleGetCharities = () =>{
    console.log(`Retrieving charities...`);
    return AXIOS.get(`/charity`)
        .then(response =>{
            console.log('Charities', response.data);
            return response.data;
        })
};

export const handleGetRecentDonations = () =>{
    console.log(`Retrieving recent donations...`);
    return AXIOS.get(`/donation`)
        .then(response =>{
            console.log('Donations', response.data);
            return response.data;
        });
};