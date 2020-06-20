import React, { Component } from 'react';
import './App.scss';
import list from './data/temporaryList'
// import Table from './components/Table';
// import Search from './components/Search';


//http://www.omdbapi.com/ hook this up later

// const isSearched = searchTerm => {
//   return item => {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ''
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({
      list: updatedList
    })

  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value

    })
  }



  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie Search</h1>
        </header>
        <div className='Featured'>

        </div>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Table extends Component {
  render() {
    const isSearched = searchTerm => {
      return item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
    }
    const { list, pattern, onDismiss } = this.props
    return (
      <div className='Results-Container'>
        {list.filter(isSearched(pattern)).map(item =>
          <div className='Results-Details' key={item.objectID} >

            <div>
              <img src={require(`${item.image}`)} alt={`Movie Poster: ${item.title}`} />
              <p>Movie Title : {item.title}</p>
            </div>
            <div>
              <p>Director : {item.director}</p>
            </div>
            <span>
              <button
                onClick={() => onDismiss(item.objectID)}
                type='button'
              >Dismiss
                      </button>
            </span>

          </div>

        )}

      </div>
    )
  }
}

class Search extends Component {
  render() {
    const { value, onChange } = this.props
    return (
      <form>

        <input
          type='text'
          value={value}
          onChange={onChange}

        ></input>
      </form>

    )
  }
}


export default App;
