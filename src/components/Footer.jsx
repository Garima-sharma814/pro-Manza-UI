import React from 'react';

const Footer = (props) => {
    return (
        <>
            <button className="formBtn" > {props.buttonName} </button>
            <div className="footerText"> Not registered yet? <a href="/">Sign up</a>  </div>
        </>
    )
}

export default Footer;
