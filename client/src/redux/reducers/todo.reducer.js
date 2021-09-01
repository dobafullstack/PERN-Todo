import * as actionTypes from "../constants/todo.constant";

const initialState = {
    todoList: [],
    isLoading: false,
    message: "",
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //Read todo
        case actionTypes.GET_TODO_REQUIRED:
            return {
                ...state,
                todoList: [],
                isLoading: true,
            };

        case actionTypes.GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                todoList: [],
                message: payload.message,
            };

        case actionTypes.GET_ALL_TODO:
            return {
                ...state,
                todoList: payload.todoList,
                isLoading: false,
            };

        case actionTypes.GET_TODO_BY_DESCRIPTION:
            return {
                ...state,
                todoList: payload.todoList,
                isLoading: false,
            };
        
        //Create todo
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload.todo],
            };

        case actionTypes.ADD_TODO_FAILURE:
            return {
                ...state,
                messages: payload.messages,
            };
        
        //Update todo
        case actionTypes.UPDATE_TODO: 
            return {
                ...state,
                todoList: payload.todoList
            }
        case actionTypes.UPDATE_TODO_FAILURE: 
            return{
                ...state,
                messages: payload.messages,
            }
        
        //Deleted todo
        case actionTypes.REMOVE_TODO:
            return{
                ...state,
                todoList: payload.todoList
            }
        
        case actionTypes.REMOVE_TODO_FAILURE:
            return{
                ...state,
                messages: payload.messages,
            }
        default:
            return state;
    }
};
