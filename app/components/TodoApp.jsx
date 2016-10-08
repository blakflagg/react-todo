import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import * as TodoAPI from 'TodoAPI';
import moment from 'moment';


export default class TodoApp extends Component{

    constructor(props){
        super(props)
        const todosArray = TodoAPI.getTodos();

        this.state = {
          todos: todosArray,
            showCompleted: false,
            searchText: ''
        };
    }

    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    }
    handleSearch = (showCompleted, searchText) => {
        this.setState({showCompleted : showCompleted,
                        searchText : searchText.toLowerCase()
        });
    }


    render(){
        var filteredTodos = TodoAPI.filterTodos(this.state.todos, this.state.showCompleted,this.state.searchText)
        return (
            <div>
               <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 larget-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList />
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

