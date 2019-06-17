import React, { useContext } from 'react';

import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';

const DeleteEdgeButton = () => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState, sendCommand } = coordinator;

  return (
    <button
      onClick={() => {
        if (!machineState.matches('deleteEdge')) {
          sendCommand('DELETE_EDGE');
        } else {
          sendCommand('ESCAPE');
        }
      }}
    >
      {machineState.matches('deleteEdge') ? 'Escape "Delete Edge Mode"' : 'Delete Edge'}
    </button>
  );
};

export default DeleteEdgeButton;
