import React from 'react';
import Button from './Button';
//import list from '../data/temporaryList';
const errorImage = './images/imageerror.png';
const titleNotFound = 'Title Not Found'


const Table = ({ list, pattern, onDismiss }) => {
     console.log('new list', list);

    const isSearched = searchTerm => {
        return item => {
            if (item.Title) {
                return item.Title.toLowerCase().includes(searchTerm.toLowerCase());
            } else {
                return 'Title Not Found'.toLowerCase().includes(searchTerm.toLowerCase());
            }
        }
       

    }
    return (
        <div className='Results-Container'>

            {list.filter(isSearched(pattern)).map(item =>
          

                <div className='Results-Details' key={item.imdbID} >


                        {/* <img src={require(`${item.image || errorImage}`)} alt={`Movie Poster: ${item.title}`} /> */}

                        <img src={item.Poster} alt={`Movie Poster: ${item.Title}`} />

                        <p>Movie Title : {item.Title|| titleNotFound}</p>
                   
                    <div>
                        <p>Year : {item.Year}</p>
                    </div>
                    <span>
                        <Button
                            onClick={() => onDismiss(item.imdbID)}
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

export default Table;