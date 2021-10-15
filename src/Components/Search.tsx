import React, {ChangeEvent, useCallback} from 'react';
import './Search.css'
import {useDispatch} from "react-redux";
import {getUsersListTC} from "../BLL/UsersReducer";

type SearchPropsType = {
    searchHandler: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const Search = (props: SearchPropsType) => {
    const dispatch = useDispatch()

    const resetSettings = useCallback(function () {
        dispatch(getUsersListTC())
    }, [dispatch])

    return (
        <>
            <input
                type="search"
                className="input"
                placeholder="Search for list"
                onChange={props.searchHandler}
            />
            <button className={'button'} onClick={resetSettings}>Reset</button>
        </>
    );
}




