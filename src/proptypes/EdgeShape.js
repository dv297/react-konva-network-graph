import PropTypes from 'prop-types';

const { shape, oneOfType, string, number } = PropTypes;

const EdgeShape = shape({
  /**
   * A unique identifier for the edge
   */
  id: oneOfType([string, number]),

  /**
   * Identifier for the node that defines the starting point of the edge
   */
  from: oneOfType([string, number]),

  /**
   * Identifier for the node that defines the ending point of the edge
   */
  to: oneOfType([string, number]),
});

export default EdgeShape;
