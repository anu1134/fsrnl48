import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        console.log(name);
        console.log(message);
    }

    return (
        <>
            <form>
                <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" />
                <textarea onChange={((e) => setMessage(e.target.value))}/>
                <button onClick={handleSubmit}>Submit</button>
                <h1>Name is: {name}</h1>
                <h1>Message is: {message}</h1>
            
            </form>
        </>
    )
}

export default Form;