import React, { useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ActivationEmail = () => {
    const {activation_token} = useParams()
    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', {activation_token})
                    alert(res.data.msg)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])
    return (
        <div>
            
        </div>
    );
};

export default ActivationEmail;