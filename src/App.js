import React, { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      // add state for search
      searchField: ''
    };
  }

  // load monsters on each mount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  // class methods bind the context of THIS using arrow functions
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // destructure into constants
    const { monsters, searchField } = this.state;
    // check names for search string
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Draft</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
