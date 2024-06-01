import React from "react";

import PropTypes from 'prop-types';

class AboutClass extends React.Component {

    constructor(props) {
        console.log("Child constructor");
        super(props);
        this.state = {
            count: 0,
            count1: 1,
        }
    }

    componentDidMount() {
        console.log("Child component has been mounted");
    }

    componentDidUpdate() {
        console.log("child component has been updated");
    }

    componentWillUnmount() {
        console.log("child component has been unmounted");
    }

    render() {
        console.log("child component has beeb rendered");

        function updateCount() {
            console.log("count button clicked");
            this.setState({count: this.state.count + 1})
        }

        return (
            <>
                <h1>About Class Compponent</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.color}</h2>
                <h2>{this.state.count}</h2>
                <h2>{this.state.count1}</h2>
                <button onClick={updateCount.bind(this)}>Update Count</button>
            </>
        )
    }
}

AboutClass.propTypes= {
    name: PropTypes.string,
    color: PropTypes.string
}

export default AboutClass;