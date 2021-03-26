import Axios from 'axios';
import React from 'react'

class APICall extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/100'
    Axios.get(apiURL)
      .then(function (response) {
        // handle success
        console.log('line 16, in cdm axios call', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {

    return (
      <div>
        <header>
          <p>
            API Call
        </p>
        </header>
      </div>
    );
  }
}

export default APICall;

function mostCommon(arr) {
    let maxValue = {};
    let obj = {}
    for (let i of arr) {
        if (obj[i]) {
            obj[i]++
            if (obj[i] > maxValue) {
                maxValue = i
            } else {
                obj[i] = 1
            }
        }
        return maxValue.key
    }
}