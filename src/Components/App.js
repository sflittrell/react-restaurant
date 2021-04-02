import React from 'react'
import Header from './Header'
import Axios from 'axios';
import Section from './Section'

// import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sort: 'Breakfast',
      menu: [
        { meal: 'Breakfast', mealType: 1, amount: 6, minMax: [10, 15], data: [] },
        { meal: 'Lunch', mealType: 3, amount: 10, minMax: [12, 18], data: [] },
        { meal: 'Appetizers', mealType: 4, amount: 5, minMax: [5, 12], data: [] },
        { meal: 'Dinner', mealType: 5, amount: 12, minMax: [15, 30], data: [] },
        { meal: 'Desserts', mealType: 7, amount: 4, minMax: [7, 15], data: [] },
        { meal: 'Drinks', mealType: 8, amount: 6, minMax: [2, 5], data: [] },
      ]
    }
    this.clickHelper = this.clickHelper.bind(this);

  }

  componentDidMount() {
    // this.callHelper();
    let menu = window.localStorage.getItem('menu')
    if (menu) {
      this.setState({ menu: JSON.parse(menu) })
    } else {
      this.callHelper();
      console.log(this.state)
    }
  }


  callHelper() {
    for (let i = 0; i < this.state.menu.length; i++) {
      let apiURL = `http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/${this.state.menu[i].mealType}`;
      Axios.get(apiURL)
        .then((response) => {
          let tempMenu = this.state.menu;
          // console.log(response.data);
          tempMenu[i].data = response.data.map((obj) => {
            obj.price = this.randomNum(this.state.menu[i].minMax[0], this.state.menu[i].minMax[1])
            return obj
          })

          this.setState({
            menu: tempMenu,
          })
          window.localStorage.setItem('menu', JSON.stringify(this.state.menu)) // sets local storage
          // console.log(this.state.menu)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    // console.log(this.state.menu[0].data)
  }

  clickHelper(meal) {
    console.log('clicked')
    this.setState({ sort: meal })
  }

  randomNum(min, max) {
    return `$${Math.floor(Math.random() * (max - min + 1) + min)}`;
  }

  render() {

    let filteredArr = this.state.menu.filter(item => {
      if (this.state.sort === 'Breakfast' && item.meal === 'Breakfast') {
        return item;
      } else if (this.state.sort === 'Lunch' && item.meal === 'Lunch') {
        return item;
      } else if (this.state.sort === 'Appetizers' && item.meal === 'Appetizers') {
        return item;
      } else if (this.state.sort === 'Dinner' && item.meal === 'Dinner') {
        return item;
      } else if (this.state.sort === 'Desserts' && item.meal === 'Desserts') {
        return item;
      } else if (this.state.sort === 'Drinks' && item.meal === 'Drinks') {
        return item;
      }
    })

    return (

      <div className="App">
        <Header
          clickHelper={this.clickHelper}

        />
        <p>

        </p>
        <div className="m-3">
        {console.log(filteredArr)}
          {filteredArr.map((section, index) =>
            <Section
              section={section}
              key={index}
              sectionTitle={section.meal}
              index={index}
            />
          )}
        </div>
      </div>
    );
  }
}


export default App;
