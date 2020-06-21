import React from 'react';

const Search = ({ value, onChange, children }) =>
  //this.props.value, const {value} = this.props also is {value} when passed as argument it is automatically destructed for you and considered a prop
  //{ is wanting to use anything in between like condition etc use curly brackets and return (jsx here)

  <form className='Search'>
    <input
      type='text'
      value={value}
      onChange={onChange}

    ></input>
    {children}
  </form>

export default Search;