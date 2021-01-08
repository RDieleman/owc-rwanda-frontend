import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "./pages/welcome/welcome.page";
import MenuPage from "./pages/menu/menu.page";

let deferredPrompt;
const createInstallPrompt = () =>{
    if(deferredPrompt){
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            console.log(choiceResult.outcome);

            if(choiceResult.outcome === 'dismissed'){
                console.log('User cancelled installation');
            }else {
                console.log('User added to homescreen');
            }
        })
    }else{
        console.log("No prompt available");
    }
    //clear deferredPrompt
    deferredPrompt = null;
}

function App() {
  //Register service worker if possible
  if('serviceWorker' in navigator){
      navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(() => {
            console.log("Service worker registered");
      });
  };

  window.addEventListener("beforeinstallprompt", (event) => {
      console.log("beforeinstallprompt fired and caught");
      event.preventDefault();
      deferredPrompt = event;
      return false;
  })

  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={WelcomePage}/>
                  <Route exact path="/menu" component={MenuPage}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
