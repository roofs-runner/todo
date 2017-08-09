var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
    it('should check if ToDoList variable exists', () => {
        expect(ToDoList).toExist();
    });

    it('should render message if no todos exist', () => {
        var todos = [];
        var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(toDoList));

        expect($el.find('.container__message').length).toBe(1);

    });

     it('should render one ToDo component for each ToDo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: null,
            createdAt: '500'
        }, {
            id: 2,
            text: 'Check mail',
            completed: false,
            completedAt: null,
            createdAt: '500'
        }];

        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var toDosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedToDo);

        expect(toDosComponents.length).toBe(todos.length);
     })
});