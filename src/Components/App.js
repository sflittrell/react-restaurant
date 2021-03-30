import React from 'react'
import Header from './Header'
import Axios from 'axios';

// import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      menu: [
        { index: 0, mealType: 1, amount: 10, price: (10, 15), data: [] },
        { index: 1, mealType: 3, amount: 10, price: (12, 18), data: [] },
        { index: 2, mealType: 6, amount: 6, price: (5, 12), data: [] },
        { index: 3, mealType: 5, amount: 12, price: (15, 30), data: [] },
        { index: 4, mealType: 7, amount: 5, price: (7, 15), data: [] },
        { index: 5, mealType: 8, amount: 6, price: (2, 5), data: [] },
      ]
    }
  }

  componentDidMount() {
    let menu = window.localStorage.getItem('menu')
    if (menu) {
      this.setState({ menu: JSON.parse(menu) })
    } else {
      this.callHelper();
    }
  }


  callHelper() {
    for (let i = 0; i < this.state.menu.length; i++) {
      let apiURL = `http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/${this.state.menu[i].mealType}`;
      Axios.get(apiURL)
        .then((response) => {
          console.log('line 16, in cdm axios call', response.data);
          let tempMenu = this.state.menu;
          tempMenu[i].data.push(response.data);
          this.setState({ 
            menu: tempMenu//[...this.state.menu, response.data]
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }
  

  



  render() {

    return (

      <div className="App">
        <Header />
        <p>
          Stuff
        </p>
      </div>
    );
  }
}


export default App;
