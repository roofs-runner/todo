var React = require('react');
var RactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require ('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
    it('should check if ToDoList variable exists', () => {
        expect(ToDoList).toExist();
    });

     it('should render one ToDo component for each ToDo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Check mail'
        }];

        var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);

        expect(toDosComponents.length).toBe(todos.length);
     })
});