import {React,useState} from "react";

function Hooks(){
    let [counter,setcounter] = useState(15)

    // let counter = 4;
    const addcount = ()=>{
        counter = counter+1
        setcounter(counter) 
        console.log(counter,Math.random());
        
    }
    const removecount = ()=>{
        counter = counter-1
        setcounter(counter)
    }

//use effact

    return (
        <>
       
        <h1>mehak counter</h1>
        <h1>counter value:{counter}</h1>
        <button onClick={addcount}>Add value {counter}</button>
        <br/>
        <button onClick={removecount}>remove value {counter}</button>

        </>
    )
}
export default Hooks