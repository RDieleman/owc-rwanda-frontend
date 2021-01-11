import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";
import {properties} from "./properties";
import ProjectOverviewPage from "./pages/project-overview/project-overview.page";
import {
    handleGetCharities,
    handleGetDonations,
    handleGetNewsItems,
    handleGetProjects,
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
            deferredPrompt: null, //Install prompt filled once supplied

            projects: [], //Retrieved projects
            charities: [], //Retrieved charities
            donations: [], //Retrieved donations
            newsItems: [], //Retrieved news items

            selectedProject: null, //The selected project. Filled from overview page.

            isLoading: true //Loading state of the app
        }
    }

    //Setup of the app
    async componentDidMount() {

        //Setup the service worker if possible
        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker
                .register("/serviceWorker.js")
                .then(() => {
                    console.log("Service worker registered");
                });
        }

        /*
            Add an event listener to catch the install prompt.
            Once caught, prevent the popup and set the state, which enables the download button in the header.
            This usually takes a few seconds to appear.
         */
        window.addEventListener("beforeinstallprompt", (event) => {
            console.log("beforeinstallprompt fired and caught", event);
            event.preventDefault();
            this.setState({deferredPrompt: event});
            return false;
        })

        //Load all the resources
        try {
            await handleGetDonations().then(d => {
                this.setState({donations: d});
            });

            await handleGetCharities().then(c => {
                this.setState({charities: c})
            });

            await handleGetNewsItems().then(n => {
                this.setState({newsItems: n})
            });

            await handleGetProjects().then(p => {
                this.setState({projects: p})
            });

            //Always disable loading
        } finally {
            this.setState({isLoading: false});
        }
    }

    /*
        Create the install prompt after it has been caught.
        Function is passed into the header and called when install button is pressed.
        If no prompt is available nothing happens.
     */
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


    /*
        Set the selected project so detail page can retrieve it.
        Is called from the overview page.
     */
    handleSelectProject = (project) => {
        this.setState({selectedProject: project});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/*Display the loading page if loading state is active*/}
                    {(this.state.isLoading) ?
                        <LoadingPage/>
                        :
                        // Content of the application
                        <div id="main-container" className="container-vertical">

                            {/*
                                Global header component
                                Is provided with whether the app can be installed and the function to install the app
                            */}
                            <HeaderComponent
                                installIsAvailable={(this.state.deferredPrompt)}
                                handleInstallClicked={this.handleCreateInstallPrompt}
                            />

                            {/*Switch to handle routing*/}
                            <Switch>
                                {/*Welcome page*/}
                                <Route exact path="/" component={WelcomePage}/>

                                {/*Menu page*/}
                                <Route path={properties.urlMenuPage} component={MenuPage}/>

                                {/*Project overview page*/}
                                <Route path={properties.urlProjectOverviewPage}
                                       render={(props) => <ProjectOverviewPage
                                           projects={this.state.projects}
                                           charities={this.state.charities}
                                           handleSelectProject={this.handleSelectProject}
                                           {...props}/>}/>

                                {/*donation page*/}
                                <Route path={`/donation/:id?`}
                                       render={(props) => <DonationPage
                                           donations={this.state.donations}
                                           {...props}/>}/>

                                {/*Project detail page*/}
                                <Route path={`/project/:id`}
                                       render={(props) => <ProjectDetailPage
                                           project={this.state.selectedProject}
                                           donations={this.state.donations}
                                           getProject={this.getProject}
                                           {...props}/>}/>

                                {/*Payment result page*/}
                                <Route exact path={`${properties.ulrPaymentResultPage}/:result`}
                                       component={PaymentResultPage}/>

                                {/*Info and newsfeed page*/}
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
