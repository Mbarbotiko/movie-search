import React, { Component } from 'react';
import './App.scss';
import list from './data/temporaryList'
import Table from './components/Table';
import Search from './components/Search';
import ErrorBoundary from './components/ErrorBoundary'



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
    try {
      this.setState({
        searchTerm: event.target.value

      })
    } catch (err) {
      console.log(err)
    }
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
        <ErrorBoundary>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          ><p>Search a movie title</p>
          </Search>
        </ErrorBoundary>
        <ErrorBoundary>
          <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </ErrorBoundary>

      </div>
    );
  }
}

// class Table extends Component {
//   render() {
//     const isSearched = searchTerm => {
//       return item => {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//       }
//     }
//     const { list, pattern, onDismiss } = this.props
//     return (
//       <div className='Results-Container'>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div className='Results-Details' key={item.objectID} >

//             <div>
//               <img src={require(`${item.image}`)} alt={`Movie Poster: ${item.title}`} />
//               <p>Movie Title : {item.title}</p>
//             </div>
//             <div>
//               <p>Director : {item.director}</p>
//             </div>
//             <span>
//               <Button
//                 onClick={() => onDismiss(item.objectID)}
//                 className='Button Dismiss'
//               >
//                 Dismiss
//               </Button>
//               {/* <Button //show difference of being able to pass className as props instead
//                 onClick={() => onDismiss(item.objectID)}
//                 className='Button'
//               >
//                 Dismiss
//               </Button> */}

//             </span>


//           </div>

//         )}

//       </div>
//     )
//   }
// }


// const Table = ({ list, pattern, onDismiss }) => {
//   const isSearched = searchTerm => {
//     return item => {
//       return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//   }
//   return (
//     <div className='Results-Container'>
//       {list.filter(isSearched(pattern)).map(item =>
//         <div className='Results-Details' key={item.objectID} >

//           <div>
//             <img src={require(`${item.image}`)} alt={`Movie Poster: ${item.title}`} />
//             <p>Movie Title : {item.title}</p>
//           </div>
//           <div>
//             <p>Director : {item.director}</p>
//           </div>
//           <span>
//             <Button
//               onClick={() => onDismiss(item.objectID)}
//               className='Button Dismiss'
//             >
//               Dismiss
//             </Button>
//             {/* <Button //show difference of being able to pass className as props instead
//               onClick={() => onDismiss(item.objectID)}
//               className='Button'
//             >
//               Dismiss
//             </Button> */}

//           </span>


//         </div>

//       )}

//     </div>
//   )

// }

// // class Search extends Component {
// //   render() {
// //     const { value, onChange, children } = this.props
// //     return (
// //       <form className='Search'>
// //         <input
// //           type='text'
// //           value={value}
// //           onChange={onChange}

// //         ></input>
// //         {children}
// //       </form>

// //     )
// //   }
// // }

// // function Search({ value, onChange, children }){
// //   return(
// //     <form className='Search'>
// //     <input
// //       type='text'
// //       value={value}
// //       onChange={onChange}

// //     ></input>
// //     {children}
// //   </form>
// //   )

// // }

// //changing to arrow function, remove block body, is now a concise body and the return is attached
// const Search = ({ value, onChange, children }) =>
//   //this.props.value, const {value} = this.props also is {value} when passed as argument it is automatically destructed for you and considered a prop
//   //{ is wanting to use anything in between like condition etc use curly brackets and return (jsx here)

//   <form className='Search'>
//     <input
//       type='text'
//       value={value}
//       onChange={onChange}

//     ></input>
//     {children}
//   </form>

// //}


// //example of inline style but using variables instead





// // class Button extends Component {
// //   render() {
// //     //leave className optional by assigning when destructuring will override if there is a prop of className assigned within the component when its instantiated
// //     const { onClick, className = '', children } = this.props;
// //     return (
// //       <button onClick={onClick}
// //         className={className}
// //         type='button'>
// //         {children}
// //       </button>
// //     )
// //   }
// // }


// //reminder instead of accessing with this.props and passing props we're destructuring within the parameter, the arguments are being destructured to access the props

// // const greenFont = { color: 'green' }
// const Button = ({ onClick, className = '', children }) =>
//   <button onClick={onClick}
//     className={className}
//     // style={greenFont}//example of inline style as a variable
//     type='button'>
//     {children}
//   </button>


export default App;
