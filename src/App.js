import './App.css';

function App() {
  //Register service worker if possible
  if('serviceWorker' in navigator){
      navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(() => {
            console.log("Service worker registered");
      });
  }

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
