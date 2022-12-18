import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';

const Login = (props) => {
  return (
    <>
      <div className="mainSignBox">
        <Header />

        <div className="">
          <div className="pageName">Login</div>
          <div className="pageDesc">Please Login to continue</div>
        </div>

        <form>
          <label> Username </label>
          <input type="text" name="" id="" placeholder="Enter your username" />

          <label> Password </label>
          <input type="text" name="" id="" placeholder="Enter your password" />
          <button className="formBtn"> Sign in </button>
        </form>

        <Footer link="/signup" />
      </div>
    </>
  );
};

export default Login;

