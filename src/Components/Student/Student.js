import React, {Component} from 'react';
import './Student.css';

class Student extends Component {
 render() {
   return (
      <div className="student">
        <h1>Elon Musk</h1>
        <p>Moyenne scolaire : <b>25/20</b></p>
      </div>
   );
  }
}

export default Student;
