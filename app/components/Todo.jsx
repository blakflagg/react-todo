import React, { Component } from 'react';

export default class Todo extends Component{

    render(){
        var {text , id} = this.props;
        return(
            <div>
                { id }. { text }
            </div>
        )
    }
}