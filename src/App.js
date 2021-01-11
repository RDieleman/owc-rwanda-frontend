import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";
import {properties} from "./properties";
import ProjectOverviewPage from "./pages/project-overview/project-overview.page";
import {
    handleGetCharities, handleGetDonations,
    handleGetNewsItems,
    handleGetProjects,
    handleGetRecentDonations
} from "./services/api.service";
import DonationPage from "./pages/donation/donation.page";
import ProjectDetailPage from "./pages/project-detail/project-detail.page";
import PaymentResultPage from "./pages/payment-results/payment-result.page";
import LoadingPage from "./pages/loading/loading.page";
import InfoPage from "./pages/info/info.page";
import {HeaderComponent} from "./components/header/header.component";

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

    async componentDidMount() {
        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker
                .register("/serviceWorker.js")
                .then(() => {
                    console.log("Service worker registered");
                });
        }

        window.addEventListener("beforeinstallprompt", (event) => {
            console.log("beforeinstallprompt fired and caught", event);
            event.preventDefault();
            this.setState({deferredPrompt: event});
            return false;
        })

        //Try to load resources
        try{
            await handleGetDonations().then(d =>{
                this.setState({donations: d});
            });

            await handleGetCharities().then(c =>{
                this.setState({charities: c})
            });

            await handleGetNewsItems().then(n =>{
                this.setState({newsItems: n})
            });

            await handleGetProjects().then(p =>{
                this.setState({projects: p})
            });

        //Always disable loading
        }finally {
            this.setState({isLoading: false});
        }
    }

    handleCreateInstallPrompt = () => {
        let {deferredPrompt} = this.state;

        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
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
        this.setState({deferredPrompt: null})
    }


    handleSelectProject = (project) => {
        this.setState({selectedProject: project});
    }

    getProject = (id) => {
        return this.state.projects.find(p => {
            return p.id === 3;
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {(this.state.isLoading) ?
                        <LoadingPage/>
                        :
                        <div id="main-container" className="container-vertical">
                            <HeaderComponent
                                installIsAvailable={(this.state.deferredPrompt)}
                                handleInstallClicked={this.handleCreateInstallPrompt}
                            />
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
                                <Route path={properties.urlInfoPage}
                                       render={(props) => <InfoPage
                                           newsItems={this.state.newsItems}
                                           {...props}/>}/>
                            </Switch>
                        </div>
                    }
                </div>
            </Router>
        );
    }


}

export default App;
