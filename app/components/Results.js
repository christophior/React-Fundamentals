var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
	return (<div>{puke(props)}</div>);
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;