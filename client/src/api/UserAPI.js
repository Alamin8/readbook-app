import { useEffect, useState } from 'react';
import axios from 'axios'

const UserAPI = (token) => {
    const [isLogged, setIsLogged]=useState(false)
    const [isAdmin, setIsAdmin]=useState(false)
    const [userInfo, setUserInfo]=useState([])
    const [callback, setCallback]=useState(false)
    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    setUserInfo(res.data)
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                } catch (err) {
                    alert(err.response)
                }
            }

            getUser()
            
        }
    },[token])
    return {
        isLogged:[isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        userInfo: [userInfo, setUserInfo],
        callback: [callback, setCallback]
    }
};

export default UserAPI;