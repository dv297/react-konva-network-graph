import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layer, Stage } from 'react-konva';
import uuid from 'uuid/v4';

import Node from '../Node/Node';
import NodeShape from '../../proptypes/NodeShape';
import EdgeShape from '../../proptypes/EdgeShape';
import Edge from '../Edge/Edge';
import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';
import WorkflowInstructions from '../WorkflowInstructions/WorkflowInstructions';

const isEventFromNode = (event) => event.target.name().includes('node');

const doesEdgeAlreadyMatch = (edge, node1, node2) =>
  (node1 === edge.edgeGraphData.from && node2 === edge.edgeGraphData.to) ||
  (node1 === edge.edgeGraphData.to && node2 === edge.edgeGraphData.from);

const doesNewEdgeNeedToBeAdded = (edges, fromNodeId, toNodeId) =>
  fromNodeId !== toNodeId && !edges.some((edge) => doesEdgeAlreadyMatch(edge, fromNodeId, toNodeId));

const updateScaleBy = 1.1;

function NetworkGraph(props) {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState, machineService, sendCommand } = coordinator;

  const [nodes, setNodes] = useState(props.nodes);
  const [edges, setEdges] = useState(props.edges);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { onEdgesUpdate, onEdgeAdded, onEdgeDeleted } = props;
  useEffect(() => {
    if (!machineService) {
      return;
    }

    machineService.execute(machineState, {
      addNewEdge: () => {
        setEdges((prevEdges) => {
          const [fromNode, toNode] = machineState.context.nodes;
          if (!doesNewEdgeNeedToBeAdded(prevEdges, fromNode, toNode)) {
            sendCommand('NOTIFY_EDGE_NOT_CREATED');
            return prevEdges;
          }
          const newEdge = {
            edgeGraphData: {
              id: uuid(),
              from: fromNode,
              to: toNode,
            },
          };
          const updatedEdges = [...prevEdges, newEdge];
          onEdgesUpdate(updatedEdges);
          onEdgeAdded(newEdge);

          sendCommand('NOTIFY_EDGE_CREATED');
          return updatedEdges;
        });
      },
      deleteSelectedEdges: () => {
        setEdges((prevEdges) => {
          const [node1, node2] = machineState.context.nodes;
          const indexOfEdgeToRemove = prevEdges.findIndex((edge) => doesEdgeAlreadyMatch(edge, node1, node2));

          if (indexOfEdgeToRemove === -1) {
            sendCommand('NOTIFY_EDGE_NOT_DELETED');
            return prevEdges;
          }

          const edgeToRemove = prevEdges.find((_, idx) => idx === indexOfEdgeToRemove);
          const updatedEdges = prevEdges.filter((_, idx) => idx !== indexOfEdgeToRemove);
          onEdgesUpdate(updatedEdges);
          onEdgeDeleted(edgeToRemove);
          sendCommand('NOTIFY_EDGE_DELETED');
          return updatedEdges;
        });
      },
    });
  }, [machineService, machineState, onEdgesUpdate, sendCommand]);

  return (
    <Stage
      draggable
      width={props.width}
      height={props.height}
      scale={{ x: scale, y: scale }}
      position={position}
      onWheel={(event) => {
        event.evt.preventDefault();

        const { deltaY } = event.evt;

        const isScrollingUp = deltaY < 0;

        const newScale = isScrollingUp ? scale * updateScaleBy : scale / updateScaleBy;

        const mousePointerPositionX = event.evt.x;
        const mousePointerPositionY = event.evt.y;
        const mousePointTo = {
          x: mousePointerPositionX / scale - position.x / scale,
          y: mousePointerPositionY / scale - position.y / scale,
        };
        const newPos = {
          x: -(mousePointTo.x - mousePointerPositionX / newScale) * newScale,
          y: -(mousePointTo.y - mousePointerPositionY / newScale) * newScale,
        };

        setScale(newScale);
        setPosition(newPos);
      }}
      onDragEnd={(event) => {
        event.evt.preventDefault();

        // Relies on the Node component exposing a name attribute
        if (isEventFromNode(event)) {
          return;
        }

        setPosition({
          x: event.target.attrs.x,
          y: event.target.attrs.y,
        });
      }}
    >
      <GraphCoordinatorContext.Provider value={coordinator}>
        <Layer>
          {edges.map((edge) => {
            const fromNode = nodes.find((node) => node.nodeGraphData.id === edge.edgeGraphData.from);
            const toNode = nodes.find((node) => node.nodeGraphData.id === edge.edgeGraphData.to);
            return (
              <Edge
                key={edge.edgeGraphData.id}
                from={[fromNode.nodeGraphData.x, fromNode.nodeGraphData.y]}
                to={[toNode.nodeGraphData.x, toNode.nodeGraphData.y]}
                nodeWidth={props.nodeWidth}
                nodeHeight={props.nodeHeight}
              />
            );
          })}
          {nodes.map((node) => (
            <Node
              key={node.nodeGraphData.id}
              renderNode={props.renderNode}
              data={node}
              onDragMove={(movingNode) => {
                const updatedNodes = nodes.map((node) => {
                  if (node.nodeGraphData.id !== movingNode.id) {
                    return node;
                  }

                  return {
                    ...node,
                    nodeGraphData: {
                      ...node.nodeGraphData,
                      x: movingNode.x,
                      y: movingNode.y,
                    },
                  };
                });
                setNodes(updatedNodes);
              }}
              onDragEnd={props.onNodeDragEnd}
            />
          ))}
        </Layer>
        <WorkflowInstructions />
      </GraphCoordinatorContext.Provider>
    </Stage>
  );
}

NetworkGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  renderNode: PropTypes.func.isRequired,
  nodes: PropTypes.arrayOf(NodeShape).isRequired,
  edges: PropTypes.arrayOf(EdgeShape).isRequired,
  nodeWidth: PropTypes.number.isRequired,
  nodeHeight: PropTypes.number.isRequired,

  onNodeDragEnd: PropTypes.func,
  onEdgesUpdate: PropTypes.func,
  onEdgeAdded: PropTypes.func,
  onEdgeDeleted: PropTypes.func,
};

NetworkGraph.defaultProps = {
  onNodeDragEnd: () => {},
  onEdgesUpdate: () => {},
  onEdgeAdded: () => {},
  onEdgeDeleted: () => {},
};

export default NetworkGraph;
