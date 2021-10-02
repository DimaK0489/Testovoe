import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
export default store;