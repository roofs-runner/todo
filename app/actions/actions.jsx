export var setSearchText = (searchText) => {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

export var addToDo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export var toggleToDo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};