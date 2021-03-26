import React from 'react'
import APICall from './APICall'
// import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }



render() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit and save to reload.
        </p>
      </header>
      <APICall />
    </div>
  );
}
}


export default App;
