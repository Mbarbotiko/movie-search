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
//moved this into the table component

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
        ><p>Search a movie title</p>
        </Search>
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
              <Button
                onClick={() => onDismiss(item.objectID)}
                className='Button Dismiss'
              >
                Dismiss
              </Button>
              {/* <Button //show difference of being able to pass className as props instead
                onClick={() => onDismiss(item.objectID)}
                className='Button'
              >
                Dismiss
              </Button> */}

            </span>


          </div>

        )}

      </div>
    )
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props
    return (
      <form className='Search'>
        <input
          type='text'
          value={value}
          onChange={onChange}

        ></input>
        {children}
      </form>

    )
  }
}

class Button extends Component {
  render() {
    //leave className optional by assigning when destructuring will override if there is a prop of className assigned within the component when its instantiated
    const { onClick, className = '', children } = this.props;
    return (
      <button onClick={onClick}
        className={className}
        type='button'>
        {children}
      </button>
    )
  }
}


export default App;
