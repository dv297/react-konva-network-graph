import React from 'react';
import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

const GraphCoordinatorContext = React.createContext({});

const stateMachine = Machine(
  {
    id: 'workflow',
    context: {
      nodes: [],
    },
    initial: 'view',
    states: {
      view: {
        on: {
          ADD_EDGE: 'addEdge',
          DELETE_EDGE: 'deleteEdge',
        },
      },
      addEdge: {
        initial: 'selectFirstNode',
        states: {
          selectFirstNode: {
            on: {
              exit: ['selectNode'],
              SELECT_NODE: { target: 'selectSecondNode', actions: 'selectNode' },
              ESCAPE: 'finalize',
            },
          },
          selectSecondNode: {
            on: {
              SELECT_NODE: { target: 'createEdge', actions: ['selectNode', 'addNewEdge'] },
              ESCAPE: 'finalize',
            },
          },
          createEdge: {
            on: {
              NOTIFY_EDGE_CREATED: 'finalize',
              NOTIFY_EDGE_NOT_CREATED: 'finalize',
            },
          },
          finalize: {
            type: 'final',
          },
        },
        onDone: {
          target: 'view',
          actions: 'clearNodes',
        },
      },
      deleteEdge: {
        initial: 'selectFirstNode',
        states: {
          selectFirstNode: {
            on: {
              exit: ['selectNode'],
              SELECT_NODE: { target: 'selectSecondNode', actions: 'selectNode' },
              ESCAPE: 'finalize',
            },
          },
          selectSecondNode: {
            on: {
              SELECT_NODE: { target: 'deleteEdge', actions: ['selectNode', 'deleteSelectedEdges'] },
              ESCAPE: 'finalize',
            },
          },
          deleteEdge: {
            on: {
              NOTIFY_EDGE_DELETED: 'finalize',
              NOTIFY_EDGE_NOT_DELETED: 'finalize',
            },
          },
          finalize: {
            type: 'final',
          },
        },
        onDone: {
          target: 'view',
          actions: 'clearNodes',
        },
      },
    },
  },
  {
    actions: {
      selectNode: assign({
        nodes: (context, event) => [...context.nodes, event.id],
      }),
      clearNodes: assign({
        nodes: () => [],
      }),
    },
  },
);

const GraphCoordinator = (props) => {
  const [machineState, sendCommand, machineService] = useMachine(stateMachine);

  const contextValue = {
    machineState,
    sendCommand,
    machineService,
  };

  return <GraphCoordinatorContext.Provider value={contextValue}>{props.children}</GraphCoordinatorContext.Provider>;
};

GraphCoordinator.propTypes = {};

export default GraphCoordinator;
export { GraphCoordinatorContext };
