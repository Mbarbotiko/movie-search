import React from 'react';
import Button from './Button';
//import list from '../data/temporaryList';


const Table = ({ list, pattern, onDismiss }) => {
    const isSearched = searchTerm => {
        return item => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
    }
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

export default Table;