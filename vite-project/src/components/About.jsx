import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

About.propTypes= {
    name: PropTypes.string,
    color: PropTypes.string
}

function About (props) {

    console.log("About component");

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    function updateCount() {
        setCount(count + 1);
        setCount1(23);
    }

    const timer = setInterval(() => {
        console.log("timer has started");
    }, 1000);

    useEffect(() => {
        console.log("Functional componnet has been mounted")
        return() => {
            clearInterval(timer);
            console.log("Functional component gets unmounted")
        }
    
    }, [])

    return (
        <>
            {console.log("component jsx")}
            <h1>About</h1>
            <h2>{props.name}</h2>
            <h3>{props.color}</h3>
            <h4>{count}</h4>
            <h4>{count1}</h4>
            <button onClick={updateCount}>Update Count</button>
        </>
    )
}

export default About;