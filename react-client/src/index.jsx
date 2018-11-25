import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import SearchBar from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  search(term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: '/items',
      type:'POST',
      data:JSON.stringify({search:term}),
      contentType: 'application/json',
      success: (data) => {
        console.log('data from ajax :',data);
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <SearchBar onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
