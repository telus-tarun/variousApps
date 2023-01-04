import React, { useEffect, useState} from 'react'
export default function Dropdown() {
    const [user, setUser] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [userErr, setuserErr] = useState("")
    const [mailErr, setmailErr] = useState("")
    const [phoneErr, setphoneErr] = useState("")
    let validateUser = () =>{
       
        if(user && user.length<5){
            setuserErr("Minimum length should be 5");
        }
        else if(user.length>10){
            setuserErr("Maximum length can be 10");
        }else{
            setuserErr("")
        }
    }


    let validateMail = () =>{
        let dot = mail.indexOf(".")
        let at = mail.indexOf("@")
        // let dotcount = mail.match(/\./g).length
        // let atcount = mail.match(/@/g).length
        if(mail){
            if(dot===0 || dot === mail.length-1 || at===0 || at === mail.length-1 || dot <= at+2){
                setmailErr("Invalid mail ID. Please check!")
            }else{
                setmailErr("")
            }
        }
        else{
            setmailErr("")
        }
    }
    let validatePhone = () =>{
        if(phone){
            setphoneErr("")
            if(phone.length<10){
                setphoneErr("Number length is less than 10");
            }
            if(isNaN(phone)){
                setphoneErr("Only numer is allowed");
            }
        }else{
            setphoneErr("")
        } 
    }
    useEffect(() => {
        validateUser();
        validateMail();
        validatePhone();
      })
    
    
    
  return (
    <>
        <form>
            <label>Username:</label><br/>
            <input type="text" value={user} onInput={e=>{setUser(e.target.value)}}/>{userErr}<br />
            
            <label>E-Mail:</label><br />
            <input type="email" value={mail} onInput={e=>{setMail(e.target.value)}} />{mailErr}<br />
            
            <label>Phone Number</label><br />
            <input type="text" value={phone} onInput={e=>{setPhone(e.target.value)}} />{phoneErr}<br /><br />
            
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}
