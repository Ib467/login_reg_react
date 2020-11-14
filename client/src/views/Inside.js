import React, {useEffect} from 'react';
import LogoutButton from '../components/LogoutButton';
import {navigate} from '@reach/router';


export default function Inside(props){
    useEffect(() => {
        if (props.loggedName == ''){
            navigate('/')
        }
    })

    return (
        <div>
        <LogoutButton />
            Hello, {props.loggedName}
        </div>
    )
}