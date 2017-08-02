var expect = require('expect');

var TodoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 44,
                text: 'test files',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var illTodos = {a: 'b'};

            TodoAPI.setTodos(illTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        })
    });

    describe('getTodos', () => {
        it('should return empty array if data is invalid', () => {
            var actualTodos = TodoAPI.getTodos('todos');

            expect(actualTodos).toEqual([]);
        });

        it('should return array if data is valid', () => {
            var todos = [{
                id: 44,
                text: 'test files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos('todos');

            expect(actualTodos).toEqual(todos);
        });
    });
});
