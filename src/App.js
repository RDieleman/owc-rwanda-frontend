import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";
import {properties} from "./properties";
import ProjectOverviewPage from "./pages/project-overview/project-overview.page";
import {handleGetCharities, handleGetProjects, handleGetRecentDonations} from "./services/api.service";
import DonationPage from "./pages/donation/donation.page";
import ProjectDetailPage from "./pages/project-detail/project-detail.page";
import PaymentResultPage from "./pages/payment-results/payment-result.page";
import LoadingPage from "./pages/loading/loading.page";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deferredPrompt: null,

            projects: [],
            charities: [],
            donations: [],

            selectedProject: null,

            currentlyLoading: 0,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: this.state.currentlyLoading > 0});

        window.addEventListener("beforeinstallprompt", (event) => {
            console.log("beforeinstallprompt fired and caught");
            event.preventDefault();
            this.setState({deferredPrompt: event});
            return false;
        })

        this.handleRegisterServiceWorker();
        this.handleLoadCharities();
        this.handleLoadDonations();
        this.handleLoadProjects();
    }

    handleLoadProjects = () => {
        this.setState({currentlyLoading: this.state.currentlyLoading + 1}, () => {
            handleGetProjects().then(
                d => this.setState(
                    {
                        projects: d,
                        currentlyLoading: this.state.currentlyLoading - 1
                    })
            );
        });
    }

    handleLoadCharities = () =>{
        this.setState({currentlyLoading: this.state.currentlyLoading + 1}, () => {
            handleGetCharities().then(
                d => this.setState(
                    {
                        charities: d,
                        currentlyLoading: this.state.currentlyLoading - 1
                    })
            );
        });
    }

    handleLoadDonations = () =>{
        this.setState({currentlyLoading: this.state.currentlyLoading + 1}, () => {
            handleGetRecentDonations().then(
                d => this.setState(
                    {
                        donations: d,
                        currentlyLoading: this.state.currentlyLoading - 1
                    })
            );
        });
    }

    handleRegisterServiceWorker = () =>{
        //Register service worker if possible
        if ('serviceWorker' in navigator) {
            this.setState({currentlyLoading: this.state.currentlyLoading + 1}, () => {
                navigator.serviceWorker
                    .register("/serviceWorker.js")
                    .then(() => {
                        console.log("Service worker registered");
                        this.setState(
                            {
                                currentlyLoading: this.state.currentlyLoading - 1
                            })
                    });
            });
        }
    }


    createInstallPrompt = () => {
        let {deferredPrompt} = this.state;

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

    handleSelectProject = (project) => {
        this.setState({selectedProject: project});
    }

    getProject = (id) =>{
        console.log("Project id:", id);
        console.log("Projectssss", this.state.projects)
        return this.state.projects.find(p =>{
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
                            <Route exact path="/" component={WelcomePage}/>
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
                        </Switch>
                    }
                </div>
            </Router>
        );
    }


}

export default App;
