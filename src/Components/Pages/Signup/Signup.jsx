/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signUpUser, error: err } = useAuth();

    console.log(err);

    const handleEmail = (e) => {
        setError('');
        if (!email && !/^\S+@\S+\.\S+$/.test(e.target.value)) {
            setError('Enter a valid Email');
            return;
        }
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setError('');
        if (
            !password &&
            !/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
                e.target.value
            )
        ) {
            setError(
                'Use minimum 8 characters & Maximum 20 characters. It will contain at least one uppercase character, one lowercase character, one digit, one special character'
            );
            return;
        }
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setError('');
        if (password !== e.target.value) {
            setError('Password is not matching');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            signUpUser(email, password, name);
            setEmail('');
            setPassword('');
            setName('');
            e.target.reset();
        }
    };

    return (
        <div
            style={{ height: 'calc(100vh - 80px)' }}
            className="max-w-xl mx-auto flex flex-col justify-center"
        >
            <div className="p-5 bg-slate-100 rounded-xl">
                <h1 className="text-3xl font-medium text-center text-orange-400">Sign up</h1>
                <form onSubmit={handleSubmit} action="submit" className="mt-5 flex flex-col gap-3">
                    <div>
                        <label className="flex flex-col gap-3">
                            Name:
                            <input
                                className="border-2 border-orange-200 rounded-md px-3 py-2"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                onBlur={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-3">
                            Email:
                            <input
                                className="border-2 border-orange-200 rounded-md px-3 py-2"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                                onBlur={handleEmail}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-3">
                            Password:
                            <input
                                className="border-2 border-orange-200 rounded-md px-3 py-2"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                                onChange={handlePassword}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-3">
                            Confirm Password:
                            <input
                                className="border-2 border-orange-200 rounded-md px-3 py-2"
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Enter Confirm Password"
                                required
                                onBlur={handleConfirmPassword}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex gap-1">
                            <input
                                className="bg-transparent"
                                type="checkbox"
                                id="checkbox"
                                name="checkbox"
                                required
                            />
                            I agree with all terms & conditions
                        </label>
                    </div>
                    <p className="text-sm">
                        Already have a accout?{' '}
                        <Link to="/signin" className="text-orange-400">
                            Sign In
                        </Link>{' '}
                        now
                    </p>
                    <button
                        className="w-full py-2 bg-orange-400 rounded-md text-white font-semibold"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
