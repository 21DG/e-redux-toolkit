import {ToDoListService} from '../services/toDoListService';

export const getToDoList = (pageSize) => {
    return async (dispatch) => {
        dispatch({type: 'SET_LODER', payload: true});
        dispatch({type: 'SET_TO_DO_LIST', payload: []});

        let result = await ToDoListService(pageSize);

        dispatch({type: 'SET_TO_DO_LIST', payload: result});
        dispatch({type: 'SET_LODER', payload: false});
    }
}

export const setPageSize = (pageSize) => {
    return async (dispatch) => {
        dispatch({type: 'SET_PAGE_SIZE', payload: pageSize});
    }
}