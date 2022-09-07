import {createStore, combineReducers} from "redux";
import todo from "../modules/todo";
// import { configureStore } from '@reduxjs/toolkit'
// import todo from "../modules/todoSlice";
const rootReducer = combineReducers({todo});

const store = createStore(rootReducer);

// const store = configureStore({
//   reducer: { todo: todo },
// });

export default store;