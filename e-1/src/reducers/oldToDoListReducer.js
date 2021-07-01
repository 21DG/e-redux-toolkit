const initialState = {
    toDoList: [],
    pageSize: 10,
    loder: true,
}

const oldToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE_SIZE':
            return {
                ...state,
                pageSize : action.payload,
            };
        case 'SET_TO_DO_LIST':
            return {
                ...state,
                toDoList : action.payload,
            };
        case 'SET_LODER':
            return {
                ...state,
                loder : action.payload,
            };
        default:
            return state;
    }
}

export default oldToDoListReducer;