import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (
  <div>
    <h4>  Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
    <h1>Search Bar</h1>

  </div>
)

export default List;
