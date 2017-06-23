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
});