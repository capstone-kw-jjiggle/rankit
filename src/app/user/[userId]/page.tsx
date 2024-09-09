import React from 'react';
import {
  bottomDivStyle,
  containerStyle,
  middleDivStyle,
  sharedDivStyle,
  topDivStyle,
} from './UserPage.css';

const UserPage = () => {
  return (
    <div className={containerStyle}>
      <div className={topDivStyle}>
        <div className={sharedDivStyle}></div>
      </div>

      <div className={middleDivStyle}>
        <div className={sharedDivStyle}></div>
      </div>

      <div className={bottomDivStyle}>
        <div className={sharedDivStyle}></div>
      </div>
    </div>
  );
};

export default UserPage;
