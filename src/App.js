import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";
import {properties} from "./properties";
import ProjectOverviewPage from "./pages/project-overview/project-overview.page";
import {handleGetCharities, handleGetProjects, handleGetRecentDonations} from "./services/api.service";
import DonationPage from "./pages/donation/donation.page";
import ProjectDetailPage from "./pages/project-detail/project-detail.page";
import PaymentResultPage from "./pages/payment-results/payment-result.page";

let deferredPrompt;

const createInstallPrompt = () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            console.log(choiceResult.outcome);

            if (choiceResult.outcome === 'dismissed') {
                console.log('User cancelled installation');
            } else {
                console.log('User added to homescreen');
            }
        })
    } else {
        console.log("No prompt available");
    }
    //clear deferredPrompt
    deferredPrompt = null;
}

let projects = [];
let charities = [];
let donations = [];

let selectedProject;

function App() {
    //Register service worker if possible
    handleGetProjects().then(d => projects = d);
    handleGetCharities().then(d => charities = d);
    handleGetRecentDonations().then(d => donations = d);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(() => {
                console.log("Service worker registered");
            });
    }

    window.addEventListener("beforeinstallprompt", (event) => {
        console.log("beforeinstallprompt fired and caught");
        event.preventDefault();
        deferredPrompt = event;
        return false;
    })

    const handleSelectProject = (project) => {
        selectedProject = project;
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path={properties.urlMenuPage} component={MenuPage}/>
                    <Route path={properties.urlProjectOverviewPage}
                           render={(props) => <ProjectOverviewPage
                               projects={projects}
                               charities={charities}
                               handleSelectProject={handleSelectProject}
                               {...props}/>}/>

                    <Route path={`/donation/:id?`}
                           render={(props) => <DonationPage
                               donations={donations}
                               {...props}/>}/>
                    <Route path={`/project/:id?`}
                           render={(props) => <ProjectDetailPage
                               project={selectedProject}
                               donations={donations}
                               {...props}/>}/>
                    <Route exact path={`${properties.ulrPaymentResultPage}/:result`} component={PaymentResultPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
