import PropTypes from 'prop-types';

const NodeShape = PropTypes.shape({
  nodeGraphData: PropTypes.shape({
    /**
     * Unique identifier for the node
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

    /**
     * The position of the node on the x-axis
     */
    x: PropTypes.number,

    /**
     * The position of the node on the y-axis
     */
    y: PropTypes.number,
  }).isRequired,
});

export default NodeShape;
