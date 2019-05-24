import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar'
import List from './list'


class App extends React.Component {
    state = {list: []};
    onSerachSubmit  = async (e) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/' + e)
        this.setState({ list: res.data });
    }
    render() {
        return (
            <div className="ui container" style={{marginTo: '10px'}}>
                <SearchBar onSubmit={ this.onSerachSubmit}/>
                <List allList = { this.state.list } />
            </div>
        )
    }
}

export default App;