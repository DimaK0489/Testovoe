import "./UsersList.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {deleteUserAC, getUsersListTC, searchUserAC} from "../BLL/UsersReducer";
import {Search} from "./Search";
import {AppRootStateType} from "../BLL/Store";
import {UsersType} from "../DAL/API";

export const UsersList = React.memo(() => {
    const dispatch = useDispatch()
    const resetSettings = useCallback(function () {
        dispatch(getUsersListTC())
    }, [dispatch])

    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.users)

    useEffect(() => {
        dispatch(getUsersListTC())
    }, [dispatch])

    const deleteUser = useCallback(function (id: number) {
        dispatch(deleteUserAC(id))
    }, [dispatch])

   /* const searchUser = useCallback( (name: string, userName: string, email: string) => {
        dispatch(searchUserAC(name, userName, email))
    }, [dispatch])*/

    return (
        <div className='container'>
            <Search/>
            <input
                type="search"
                className="input"
                placeholder="Search for list"
                /*onChange={searchUser}*/
            />
            <button onClick={resetSettings}>Reset</button>
                {users.map(u => {
                        return <li key={u.id}>
                            <span>{u.name} </span>
                            <span>{u.username}</span>
                            <span>{u.email}</span>
                            <button onClick={() => {deleteUser(u.id)}}>Delete</button>
                        </li>
                    }
                )}
        </div>
    )
})