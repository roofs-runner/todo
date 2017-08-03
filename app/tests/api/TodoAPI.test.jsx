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

    describe('filter Todos', () => {
        var todos = [
            {
                id: 4,
                text: 'some files',
                completed: false
            },
            {
                id: 44,
                text: 'test',
                completed: true
            },
            {
                id: 2,
                text: 'test ttt',
                completed: false
            }
        ];

        it('should show all items if showComleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should show only items with completed status - false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(2);
        });

        it ('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it ('should filter todos by search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

            expect(filteredTodos.length).toBe(1);
        });

        it ('should return all todos if search text is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        })
    })
});
