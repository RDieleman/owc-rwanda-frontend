import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";
import {properties} from "./properties";
import ProjectOverviewPage from "./pages/project-overview/project-overview.page";
import {
    handleGetCharities,
    handleGetNewsItems,
    handleGetProjects,
    handleGetRecentDonations
} from "./services/api.service";
import DonationPage from "./pages/donation/donation.page";
import ProjectDetailPage from "./pages/project-detail/project-detail.page";
import PaymentResultPage from "./pages/payment-results/payment-result.page";
import LoadingPage from "./pages/loading/loading.page";
import InfoPage from "./pages/info/info.page";
import {Project} from "./models/project";
import {Charity} from "./models/charity";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deferredPrompt: null,

            projects: [],
            charities: [],
            donations: [],
            newsItems: [],

            selectedProject: null,

            isLoading: true
        }
    }

    componentDidMount() {
        if ('serviceWorker' in navigator) {
            this.setState({currentlyLoading: this.state.currentlyLoading + 1}, () => {
                navigator.serviceWorker
                    .register("/serviceWorker.js")
                    .then(() => {
                        console.log("Service worker registered");
                    });
            });
        }

        window.addEventListener("beforeinstallprompt", (event) => {
            console.log("beforeinstallprompt fired and caught", event);
            console.log(this);
            event.preventDefault();
            this.setState({deferredPrompt: event});
            return false;
        })

        let projects = [];
        let newsItems = [];
        let donations = [];
        let charities = [];

        handleGetCharities().then(c =>{
            charities = c
            handleGetNewsItems().then(n => {
                newsItems = n
                handleGetRecentDonations().then(d =>{
                    donations = d
                    handleGetProjects().then(p =>{
                        projects = p
                        this.setState({
                            projects: projects,
                            newsItems: newsItems,
                            donations: donations,
                            charities: charities,
                            isLoading: false
                        })
                    })
                })
            })
        })
    }

    handleSelectProject = (project) => {
        this.setState({selectedProject: project});
    }

    handleResetInstallPrompt = () =>{
        this.setState({deferredPrompt: null})
    }

    getProject = (id) => {
        console.log("Project id:", id);
        return this.state.projects.find(p => {
            return p.id === 3;
        })
    }

    render() {
        //Log current loading state
        console.log("Application is loading:", this.state.isLoading)

        return (
            <Router>
                <div className="App">
                    {(this.state.isLoading) ?
                        <LoadingPage/>
                        :
                        <Switch>
                            <Route exact path="/" render={(props) => <WelcomePage
                                installPrompt={this.state.deferredPrompt}
                                handleResetPrompt={this.handleResetInstallPrompt}
                                {...props}/>}/>
                            <Route path={properties.urlMenuPage} component={MenuPage}/>
                            <Route path={properties.urlProjectOverviewPage}
                                   render={(props) => <ProjectOverviewPage
                                       projects={this.state.projects}
                                       charities={this.state.charities}
                                       handleSelectProject={this.handleSelectProject}
                                       {...props}/>}/>

                            <Route path={`/donation/:id?`}
                                   render={(props) => <DonationPage
                                       donations={this.state.donations}
                                       {...props}/>}/>
                            <Route path={`/project/:id`}
                                   render={(props) => <ProjectDetailPage
                                       project={this.state.selectedProject}
                                       donations={this.state.donations}
                                       getProject={this.getProject}
                                       {...props}/>}/>
                            <Route exact path={`${properties.ulrPaymentResultPage}/:result`}
                                   component={PaymentResultPage}/>
                            <Route path={properties.urlInfoPage}
                                   render={(props) => <InfoPage
                                       newsItems={this.state.newsItems}
                                       {...props}/>}/>
                        </Switch>
                    }
                </div>
            </Router>
        );
    }


}

export default App;
