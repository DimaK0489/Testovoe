import {Dispatch} from "redux";
import {usersAPI, UsersType} from "../DAL/API";

export type ActionType =
    ReturnType<typeof setAllUsersAC>
    | ReturnType<typeof deleteUserAC>

export enum ACTION_TYPES {
    GET_USERS = 'GET_USERS',
    DELETE_USER = 'DELETE_USER'
}

const initialState: Array<UsersType> = []

//reducer
export const usersReducer = (state: Array<UsersType> = initialState, action: ActionType): Array<UsersType> => {
    switch (action.type) {
        case ACTION_TYPES.GET_USERS: {
            return action.data
        }
        case ACTION_TYPES.DELETE_USER: {
            return state.filter(u => u.id !== action.id)
        }
        default:
            return state
    }
}

//action
export const setAllUsersAC = (data: Array<UsersType>) => ({type: ACTION_TYPES.GET_USERS, data} as const)
export const deleteUserAC = (id: number) => ({type: ACTION_TYPES.DELETE_USER, id} as const)

//thunk
export const getUsersListTC = () => (dispatch: Dispatch) => {
    usersAPI.getUsers()
        .then((res) => {
            dispatch(setAllUsersAC(res.data))
        })
        .catch(error => {
            console.log('Error' + error);
        })
}