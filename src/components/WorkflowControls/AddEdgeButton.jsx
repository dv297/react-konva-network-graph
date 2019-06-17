import React, { useContext } from 'react';

import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';

const AddEdgeButton = () => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState, sendCommand } = coordinator;

  return (
    <button
      onClick={() => {
        if (!machineState.matches('addEdge')) {
          sendCommand('ADD_EDGE');
        } else {
          sendCommand('ESCAPE');
        }
      }}
    >
      {machineState.matches('addEdge') ? 'Escape "Add Edge Mode"' : 'Add Edge'}
    </button>
  );
};

export default AddEdgeButton;
