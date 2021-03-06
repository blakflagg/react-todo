import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo comonent fro each todo item', () => {
        var todos = [{
            id: 1,
            text: 'do something'
        },{
            id: 2,
            tesxt: 'walk the dog'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
        expect(todosComponents.length).toBe(todos.length);

    })
});