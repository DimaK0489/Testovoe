import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/Store";
import {UsersType} from "../DAL/API";
import './Search.css'
import {deleteUserAC, getUsersListTC} from "../BLL/UsersReducer";

export const Search = () => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.users)
    const [name, setName] = useState<string>('');
    const [foundUsers, setFoundUsers] = useState<Array<UsersType>>(users);

    useEffect(() => {
        dispatch(getUsersListTC())
    }, [dispatch])

    const filter = (e: ChangeEvent<HTMLInputElement>) => {
        const keyword = e.currentTarget.value;

        if (keyword !== '') {
            const results = users.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.username.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.email.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(users);
        }
        setName(keyword);
    };
    const deleteUser = useCallback(function (id: number) {
        dispatch(deleteUserAC(id))
    }, [dispatch])

    return (
        <div className="container">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Search for list"
            />

            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-name">{user.name}</span>
                            <span className="user-userName">{user.username}</span>
                            <span className="user-email">{user.email}</span>
                            <button onClick={() => {deleteUser(user.id)}}>Delete</button>
                        </li>
                    ))
                ) : (
                    <h3>No results found!</h3>
                )}
            </div>
        </div>
    );
}




