import React from 'react'

function SearchBox(props) {
  return (
    <div>
        <input placeholder='type to search'
            value={props.value}

            //feed the setter the value of the input through the onChange method
            onChange={(event)=>props.setSearch(event.target.value)}
        ></input>
    </div>
  )
}

export default SearchBox