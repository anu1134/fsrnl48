import React from "react";

import PropTypes from 'prop-types';

class AboutClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
        }
    }

    render() {

        function updateCount() {
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
    color: PropTypes.color
}

export default AboutClass;