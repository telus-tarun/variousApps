import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json"
export default function user() {
  return (
    <>
      <div className="container" sytle={{margin:"0 auto"}}>
        <ul>
            {data.map((item, i)=>
             <li style={{listStyle: "none"}} key={i}>
               <Link key={item.id} to={/users/ + item.id}>User {item.id}</Link>
            </li>)}
        </ul>
      </div>
    </>
  );
}