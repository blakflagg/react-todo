import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component{

    constructor(props){
        super(props)
        const todosArray = [
            {
                id: 1,
                text: 'walk the dog'
            },{
                id: 2,
                text: 'clean the yard'
            },{
                id: 3,
                text: 'wash the dog'
            },{
                id: 4,
                text: 'open a business'
            }
        ]

        this.state = {
          todos: todosArray,
            showCompleted: false,
            searchText: ''
        };
    }

    handleAddTodo = (text) => {
        alert(text);
    }
    handleSearch = (showCompleted, searchText) => {
        this.setState({showCompleted : showCompleted,
                        searchText : searchText.toLowerCase()
        });
    }

    render(){

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={this.state.todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

