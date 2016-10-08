import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';



export default class TodoApp extends Component{

/*    constructor(props){
        super(props)
        const todosArray = TodoAPI.getTodos();

        this.state = {
          todos: todosArray,
            showCompleted: false,
            searchText: ''
        };
    }*/



    render(){

        return (
            <div>
               <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 larget-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

