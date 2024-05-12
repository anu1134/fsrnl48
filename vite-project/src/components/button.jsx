import PropTypes from 'prop-types';

Button.propTypes= {
    click: PropTypes.func,
    count: PropTypes.number,
    properties: PropTypes.object
}

function Button(props) {

    const { click, count } = props.properties;

    return (
        <button onClick={click}>
            Clicked {count} times
        </button>
    )
}

export default Button;