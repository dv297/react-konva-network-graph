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
  /**
   * Function defining how to render each individual node. This function is expected to return a React element created
   * using react-konva. Data for the node, as well as meta-data for graphing the node, such as positioning, is provided
   * as a parameter to this function.
   */
  renderNode: PropTypes.func.isRequired,

  /**
   * Object containing data related to the node. This includes the node data as well as positioning data.
   */
  data: PropTypes.object.isRequired,

  /**
   * Callback function called when the user is actively dragging a node. When called, the function is passed an object
   * with the following properties:
   * - id: The id of the node
   * - x: The position of the node on the x axis
   * - y: The position of the node on the y axis
   */
  onDragMove: PropTypes.func,

  /**
   * Callback function called when the user is done dragging a node. When called, the function is passed an object with
   * the following properties:
   * - id: The id of the node
   * - x: The position of the node on the x axis
   * - y: The position of the node on the y axis
   */
  onDragEnd: PropTypes.func,
};

Node.defaultProps = {
  onDragMove: () => {},
  onDragEnd: () => {},
};

export default Node;
