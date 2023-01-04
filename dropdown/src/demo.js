import React, { useState} from 'react'
import countries from "./data/country.json"
import cities from "./data/city.json"
export default function Dropdown() {
    const [state, setState] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [firstErr, setfirstErr] = useState("");
    const [lastErr, setlastErr] = useState("");
    const findCity = (id) =>{
        // eslint-disable-next-line
        const city = cities.filter(item => item.countryID == id);
        setState(city);
    }
    let isValid;
    const handleSubmit = (e) =>{
        e.preventDefault();
        isValid = true;
        setfirstErr("")
        setlastErr("")
        formValidate();
        if(isValid === true){
            console.log("Form submitted successfully!!")
        }
    }

    let formValidate = () =>{
        if(fname.trim().length <5){
            setfirstErr("fname can't be less than 5");
            isValid = false;
        }
        if(fname.trim().length >10){
            setfirstErr("fname can't be greater than 10");
            isValid = false;
        }
        if(lname.trim().length <5){
            setlastErr("lname can't be less than 5");
            isValid = false;
        }
        if(lname.trim().length >10){
            setlastErr("lname can't be greater than 10");
            isValid = false;
        }
        
        return {firstErr, lastErr, isValid}

    }

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         let data = await fetch(`https://telusapi.herokuapp.com/api/task-list/`, {
    //             method: 'GET', 
    //             mode: 'cors', 
    //           })
    //           let parseData = await data.json();
    //           console.log(parseData);
              
    //     }
    //     fetchData();
    // },[])


    // formValidate
    
  return (
    <>
        <select onChange={(e)=> findCity(e.target.value)}>
        <option value="0">Select Country</option>
        {countries.map((item)=>{return(
            <option key={item.id} value={item.id}>{item.country}</option>
            )
        }
        )}
    </select><br/><br/>



    <select>
            <option value="0">Select State</option>
            {state.map((item)=>{return(
                <option key={item.id} value={item.id}>{item.city}</option>
                )
            }
            )}
        </select>    
            <br/>
            <br/>
            <br/>

        <form onSubmit={handleSubmit}>
            <label>First name:</label><br/>
            <input type="text" value={fname} onChange ={(e) =>{setFname(e.target.value);}} />{firstErr}<br />
            <label>Last name:</label><br />
            <input type="text" value={lname} onChange ={(e) =>{setLname(e.target.value)}}  />{lastErr}<br /><br />
            <input type="submit" value="Submit" />
        </form>
    </>
    
  )
}
