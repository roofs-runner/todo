var React = require('react');
var RactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require ('ToDoApp');

describe('ToDoApp', () => {
    it('should check if ToDoApp variable exists', () => {
        expect(ToDoApp).toExist();
    });

    it('should add new item to the todo list on handleAddToDo', () => {
        var todoText = 'Fly to the Moon';
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddToDo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Fuck society',
            completed: false
        };

        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
        todoApp.setState({
            todos:[todoData]
         });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    })
});