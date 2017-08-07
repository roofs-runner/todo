var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
   it('should generate search text action', () => {
       var action = {
           type: 'SET_SEARCH_TEXT',
           searchText: 'Fuck society'
       };

       var res = actions.setSearchText(action.searchText);

       expect(res).toEqual(action);
   });

   it('should generate add todo action', () => {
       var action = {
           type: 'ADD_TODO',
           todo: 'Fuck society'
       };

       var res = actions.addToDo(action.todo);

       expect(res).toEqual(action);
   });

   it('should generate toggle show completed action', () => {
       var action = {
           type: 'TOGGLE_SHOW_COMPLETED'
       };

       var res = actions.toggleShowCompleted(action);

       expect(res).toEqual(action);
   });

   it('should generate toggle todo action', () => {
       var action = {
           type: 'TOGGLE_TODO',
           id: 1
       };

       var res = actions.toggleToDO(action.id);

       expect(res).toEqual(action);
   });
});