import "./UsersList.css"
import {useDispatch, useSelector} from "react-redux";
import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {deleteUserAC, getUsersListTC} from "../BLL/UsersReducer";
import {AppRootStateType} from "../BLL/Store";
import {UsersType} from "../DAL/API";
import {Search} from "./Search";

export const UsersList = React.memo(() => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.users)

    const [foundUsers, setFoundUsers] = useState<Array<UsersType>>(users);

    useEffect(() => {
        dispatch(getUsersListTC())
    }, [dispatch])
    useEffect(() => {
        setFoundUsers(users)
    }, [users])

    const deleteUser = useCallback(function (id: number) {
        dispatch(deleteUserAC(id))
    }, [dispatch])

    const searchHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        const value = ev.currentTarget.value
        const results = users.filter((user) => {
            return user.name.toLowerCase().indexOf(value) > -1
            || user.username.toLowerCase().indexOf(value) > -1
            || user.email.toLowerCase().indexOf(value) > -1
        })
        setFoundUsers(results)
    }

    return (
        <div className='container-users'>
            <Search searchHandler={searchHandler}/>
            {foundUsers.map(u => {
                    return <li key={u.id} >
                        <span className={'user-name'}>{u.name} </span>
                        <span className={'user_user-name'}>{u.username}</span>
                        <span>{u.email}</span>
                        <button className={'deleteButton'} onClick={() => {deleteUser(u.id)}}>Delete
                        </button>
                    </li>
                }
            )}
        </div>
    )
})