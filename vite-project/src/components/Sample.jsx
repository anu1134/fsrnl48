import AboutClass from "./AboutClass";
import React from "react";

class Sample extends React.Component {
    constructor() {
        console.log("Parent Constructor");
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Parent component has been mounted");
    }

    componentDidUpdate() {
        console.log("parent's componnet update called");
    }

    componentWillUnmount() {
        console.log("Parent component has been unmounted");
    }

    render() {
        console.log("Parent component has been rendered");

        function updateButton() {
            console.log("button clicked");
            this.setState({count: 1})
        }

        return (
            <>
                <button onClick={updateButton.bind(this)}>Update Parent</button>
                <AboutClass name="Anshika" color="blue"/>
                
            </>
        )
    }
}

// function Sample() {
//     return (
//         <>
//             <About name="Anshika" color="red"/>
//             <AboutClass name="Anshika" color="blue"/>
//         </>
//     )
// }

export default Sample;