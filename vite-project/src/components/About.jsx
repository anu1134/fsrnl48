import PropTypes from 'prop-types';
import { useState } from 'react';

About.propTypes= {
    name: PropTypes.string,
    color: PropTypes.string
}

function About (props) {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    function updateCount() {
        setCount(count + 1);
        setCount1(23);
    }

    return (
        <>
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