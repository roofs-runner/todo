var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {AddToDoForm} = require('AddToDoForm');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddToDoForm).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'Check mail';
        var action = {
            type: 'ADD_TODO',
            todo: todoText
        };
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddToDoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddToDoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
