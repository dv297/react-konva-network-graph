import PropTypes from 'prop-types';

const { shape, oneOfType, string, number } = PropTypes;

const EdgeShape = shape({
  id: oneOfType([string, number]),
  from: oneOfType([string, number]),
  to: oneOfType([string, number]),
});

export default EdgeShape;
