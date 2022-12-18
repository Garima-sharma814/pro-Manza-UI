import React from 'react';
const logoName = "ubiquitous.co";

const Header = (props) => {
  return (
    <>
      <div className="regHeader">
        <div>
          <img className="logoImg" src="../images/Ellipse 6.png" alt="" />
          <div className="logoName">{logoName}</div>
        </div>
      </div>
    </>
  )
}

export default Header