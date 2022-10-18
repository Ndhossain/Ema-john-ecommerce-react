/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password, () => {
            console.log(from);
            navigate(from, { replace: true });
        });
        setEmail('');
        setPassword('');
        e.target.reset();
    };

    return (
        <div
            style={{ height: 'calc(100vh - 80px)' }}
            className="max-w-xl mx-auto flex flex-col justify-center"
        >
            <div className="p-5 bg-slate-100 rounded-xl">
                <h1 className="text-3xl font-medium text-center text-orange-400">Sign In</h1>
                <form onSubmit={handleSubmit} action="submit" className="mt-5 flex flex-col gap-3">
                    <div>
                        <label className="flex flex-col gap-3">
                            Email:
                            <input
                                className="border-2 border-orange-200 rounded-md px-3 py-2"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                onBlur={(e) => setEmail(e.target.value)}
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
                                onBlur={(e) => setPassword(e.target.value)}
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
                            />
                            Remember Me
                        </label>
                    </div>
                    <p className="text-sm">Forgot Password?</p>
                    <p className="text-sm">
                        New to ema-john?{' '}
                        <Link to="/signup" className="text-orange-400">
                            Sign Up
                        </Link>{' '}
                        now
                    </p>
                    <button
                        className="w-full py-2 bg-orange-400 rounded-md text-white font-semibold"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
