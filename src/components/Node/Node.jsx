import React, { useContext } from 'react';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';

import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';

const Node = (props) => {
  const { nodeGraphData } = props.data;
  const coordinator = useContext(GraphCoordinatorContext);
  const { sendCommand } = coordinator;

  return (
    <>
      <Group
        draggable
        name={`node-${nodeGraphData.id}`}
        x={nodeGraphData.x}
        y={nodeGraphData.y}
        onDragMove={(event) => {
          event.currentTarget.moveToTop();
          props.onDragMove({ id: nodeGraphData.id, x: event.target.x(), y: event.target.y() });
        }}
        onDragEnd={(event) => {
          props.onDragEnd({ id: nodeGraphData.id, x: event.target.x(), y: event.target.y() });
        }}
        onClick={(event) => {
          event.currentTarget.moveToTop();
          sendCommand({ type: 'SELECT_NODE', id: nodeGraphData.id });
        }}
      >
        {props.renderNode(props.data)}
      </Group>
    </>
  );
};

Node.propTypes = {
  renderNode: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  onDragMove: PropTypes.func,
  onDragEnd: PropTypes.func,
};

Node.defaultProps = {
  onDragMove: () => {},
  onDragEnd: () => {},
};

export default Node;
