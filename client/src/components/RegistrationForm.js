import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function RegistrationForm(){
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });


    function handleChange(event){
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:8000/api/users', formState, {
            withCredentials: true

        })
        .then(() => navigate('/inside')
        .catch(() => console.log));
    }


    return (
        <>

        <form onSubmit={handleSubmit} className="register">
            <div className="form-group">
                <label>First Name</label>
                <input
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                />
            </div>


            <div>
                <label>Email</label>
                <input
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>


            <div>
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password Confirmation</label>
                <input
                    name="passwordConfirmation"
                    type="password"
                    value={formState.passwordConfirmation}
                    onChange={handleChange}
                />
            </div>

            <button>Submit</button>
        </form>


        </>
    )
}