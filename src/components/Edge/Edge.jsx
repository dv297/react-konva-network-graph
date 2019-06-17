import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';

const Edge = (props) => {
  const yOffset = props.nodeHeight / 2;
  const offsetFrom = [props.from[0] + props.nodeWidth, props.from[1] + yOffset];
  const offsetTo = [props.to[0], props.to[1] + yOffset];

  return <Line points={[...offsetFrom, ...offsetTo]} stroke="black" />;
};

Edge.propTypes = {
  from: PropTypes.arrayOf(PropTypes.number).isRequired,
  to: PropTypes.arrayOf(PropTypes.number).isRequired,
  nodeWidth: PropTypes.number.isRequired,
  nodeHeight: PropTypes.number.isRequired,
};

Edge.defaultProps = {};

export default Edge;
