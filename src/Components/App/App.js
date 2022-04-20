import React from 'react';
import './App.css';

// Components
import Student from '../Student/Student';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue sur mon premier projet react</h1>
        <Student/>
      </div>
    );
  }

}

export default App;
