var React = require('react');
var RactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require ('ToDoApp');
import TodoList from 'ToDoList';

var configureStore = require('configureStore');

describe('ToDoApp', () => {
    it('should check if ToDoApp variable exists', () => {
        expect(ToDoApp).toExist();
    });

    it('should render todo list', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ToDoApp/>
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    });
});