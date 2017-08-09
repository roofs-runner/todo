var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Fuck society'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle completed todos', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('ToDosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: 'Fuck society'
            };

            var res = reducers.todoReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.todo);
        });

        it('should toggle todo', () => {
            var todo = [{
                id: 1,
                text: 'some shit',
                completed: true,
                createdAt: '123',
                completedAt: '125'
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            var res = reducers.todoReducer(df(todo), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(null);
        });

        it('should add existing todos', () => {
            var todos = [{
                id: 1,
                text: 'some shit',
                completed: true,
                createdAt: '123',
                completedAt: '125'
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };

            var res = reducers.todoReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});
