var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should call ToDoSearch with input text', () => {
        var spyText = 'Dog';
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        toDoSearch.refs.searchText.value = spyText;
        TestUtils.Simulate.change(toDoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        toDoSearch.refs.showCompleted.checked = true;

        TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    })
});