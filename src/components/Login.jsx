import React from "react";
import Footer from './Footer';
import Header from './Header';

const Login = () => {
    return (
        <>
            <div className="mainSignBox">
                <Header pageName="Login" desc="Please login to continue" />
                <form>
                    <label> Username </label>
                    <input type="text" name="" id="" placeholder="Enter your username" />

                    <label> Password </label>
                    <input type="text" name="" id="" placeholder="Enter your password" />
                </form>
                <Footer buttonName="Sign in" />
            </div>
        </>
    )
}

export default Login