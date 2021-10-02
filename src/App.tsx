import React, {useCallback, useEffect} from 'react';
import './App.css';
import {UsersList} from './UsersList';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Store";
import {UsersType} from "./API";
import {deleteUserAC, getUsersListTC} from "./usersReducer";

function App() {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.users)

    useEffect(() => {
        dispatch(getUsersListTC())
    }, [dispatch])

    const deleteUser = useCallback(function (id: number) {
        dispatch(deleteUserAC(id))
    }, [dispatch])

    return (
        <div className='list'>
            <UsersList />
            <ul>
                {users.map(u => {
                        return <li key={u.id}>
                            <span>{u.name} </span>
                            <span>{u.username}</span>
                            <span>{u.email}</span>
                            <button onClick={() => {deleteUser(u.id)}}>Delete</button>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}

export default App;
