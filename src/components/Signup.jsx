import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';

const Signup = (props) => {
  return (
    <>
      <div className="mainSignBox">
        <Header />
        <div className="">
          <div className="pageName">Sign Up</div>
          <div className="pageDesc">Please fill the details below</div>
        </div>

        <form>
          <label> Username </label>
          <input type="email" name="" id="" placeholder="Enter your username" />

          <label> Password </label>
          <input type="password" name="" id="" placeholder="Enter your password" />

          <label> User type </label>
          <select type="password" name="" id="" placeholder="Enter your password">
            <option value="admin">Admin</option>
            <option value="client">Client</option>
          </select>
          <button className="formBtn"> Sign in </button>
        </form>

        <Footer link="/" />
      </div>
    </>
  );
};

export default Signup;

