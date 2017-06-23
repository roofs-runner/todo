var React = require('react');
var RactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require ('ToDoApp');

describe('ToDo', () => {
    it('should check if ToDo variable exists', () => {
        expect(ToDo).toExist();
    });
});