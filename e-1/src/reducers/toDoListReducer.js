import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { ToDoListService } from '../services/toDoListService';

const initialState = {
    toDoList: [],
    pageSize: 10,
    loder: true,
}

export const getToDoList = createAsyncThunk(
    'getToDos',
    async (lastRowNumber) => ToDoListService(lastRowNumber),
);

const toDoListReducer = createSlice({
    name: 'toDoListReducer',
    initialState,
    reducers: {
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToDoList.pending, (state) => {
                state.loder = true;
                state.toDoList = [];
            })
            .addCase(getToDoList.fulfilled, (state, action) => {
                state.loder = false;
                state.toDoList = action.payload;
            })
            .addCase(getToDoList.rejected, (state, action) => {
                state.loder = false;
                state.toDoList = [];
            });
    },
});



export const { setPageSize } = toDoListReducer.actions;
export default toDoListReducer.reducer;