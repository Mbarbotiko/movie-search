// import React, { Component } from 'react';
// const isSearched = searchTerm => {
//     return item => {
//       console.log(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
//       return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//   }

// class Table extends Component {
//     render() {
//         const { list, pattern, onDismiss } = this.props
//         return (
//             <div className='Results'>
//                 {list.filter(isSearched(pattern)).map(item =>
//                     <div key={item.objectID}>
//                         <span>
//                             <a href={item.image}>{item.title}</a>
//                         </span>
//                         <span>
//                             {item.director}
//                         </span>
//                         <span>
//                             <button
//                                 onClick={() => onDismiss(item.objectID)}
//                                 type='button'
//                             >Dismiss
//                         </button>
//                         </span>

//                     </div>
//                 )}
//             </div>
//         )
//     }
// }


// export default Table;