/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Signin() {
    return (
        <div>
            <h1 className="font-3xl">Sign In</h1>
            <form action="submit">
                <div>
                    <label>
                        Email
                        <input type="email" id="email" name="email" placeholder="Enter Email" />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        Remember Me
                    </label>
                </div>
                <span>Forgot Password?</span>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
