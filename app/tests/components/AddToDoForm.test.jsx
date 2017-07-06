var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var AddToDoForm = require('AddToDoForm');

describe('AddToDoForm', () => {
    it('should exist', () => {
        expect(AddToDoForm).toExist();
    });

    it('should call AddToDoForm if item is added', () => {
        var spyText = 'Fuck society';
        var spy = expect.createSpy();
        var AddToDoFormItem = TestUtils.renderIntoDocument(<AddToDoForm onAddToItem={spy}/>);
        var $el = $(ReactDOM.findDOMNode(AddToDoFormItem));

        AddToDoFormItem.refs.todo.value = spyText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(spyText);
    });

    it('should not call AddToDoForm if empty field is submitted', () => {
        var spyText = '';
        var spy = expect.createSpy();
        var AddToDoFormItem = TestUtils.renderIntoDocument(<AddToDoForm onAddToItem={spy}/>);
        var $el = $(ReactDOM.findDOMNode(AddToDoFormItem));

        AddToDoFormItem.refs.todo.value = spyText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});