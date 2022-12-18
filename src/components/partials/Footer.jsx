import React from 'react';

const Footer = (props) => {
  return (
    <>
      <div className="footerText">
        Not registered yet? Sign up <a href={props.link}>here</a>
      </div>
    </>
  );
};

export default Footer;

