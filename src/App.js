import './App.css';
import React from "react";
import Logo from "./logo.svg";

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
    <div className="App">
      test test
        <img src={Logo} alt="test"/>
    </div>
  );
}

export default App;
