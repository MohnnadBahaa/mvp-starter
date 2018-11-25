import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term:''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render(){
    return (
      <div>
        <form className="searchbox_1">
          <input type="search" className="search_1" placeholder="Search For Videos Information" name="url" value={this.state.terms} onChange={this.onChange.bind(this)}/>
          <button className="btn hidden-sm-down" onClick={this.search.bind(this)}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </form>
      </div>

    )
  }

}


export default SearchBar;
