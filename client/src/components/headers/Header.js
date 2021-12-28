import React, { useContext } from 'react';
import {GlobalState} from '../../GlobalState'

const Header = () => {
    const state = useContext(GlobalState)
    const [user]=state.userAPI.userInfo
    return (
        <div className='header'>
            <div className="container">
                <h2 className='log'>
                    readBook
                </h2>
                <div className="search-bar">
                    <i className='uil uil-search'></i>
                    <input type="search" placeholder='Search for creators, inspiration and projects' />
                </div>
                <div className="create">
                    <label className='btn btn-primary' htmlFor="create-post">Create</label>
                    <div className="profile-photo">
                        <img src={user.avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;