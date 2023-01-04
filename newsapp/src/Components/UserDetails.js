import React from 'react'
import { useParams } from 'react-router-dom'
import data from "./data.json";
export default function UserDetails() {
    let {userId} = useParams()
  return (
      <>
        <h1 style={{float:"center"}}>User Details</h1>
        <ul>
            {data.filter((user)=> {
            return user.id == userId}).map((record, i) => 
            <li style={{listStyle: "none"}} key={i}>{record.name} {record.email}</li>
            )}
        </ul>
      </>
  )
}