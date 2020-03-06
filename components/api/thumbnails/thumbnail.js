import React from 'react';

const Thumbnail = ({ title, icon, children }) => (
  <div className="thumbnail-container">
    <div className="header">
      <div className="icon">{icon}</div>
      <div>{title}</div>
    </div>
    <div className="content">{children}</div>
  </div>
);

export default Thumbnail;
