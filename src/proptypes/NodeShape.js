import PropTypes from 'prop-types';

const NodeShape = PropTypes.shape({
  nodeGraphData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
});

export default NodeShape;
