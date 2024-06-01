import React, { Component } from "react";

// Complete this Component
const ListItem = ({src,alt, href,bgcolor}) => {

  //const {lists} =this.prop.data;
  //const {id,name,link,icon,bgColor} = lists;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundcolor:bgcolor
      }}
    >
      <img src={src} alt={alt} />
      <a href={href}></a>
    </div>
  );
};

export default ListItem;
