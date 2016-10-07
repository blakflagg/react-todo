import React, { Component } from 'react';

export default class TodoSearch extends Component{

    handleSearch = () => {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render(){
        return(
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>

                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed Todos
                    </label>

                </div>
            </div>
        )
    }
}