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

  render() {
    //destructure into constants
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredMonsters)

    return (
      <div className="App">
        <SearchBox placeholder='Search Monsters' handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
