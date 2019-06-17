import React, { useContext } from 'react';

import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';
import { Layer, Text } from 'react-konva';

const AddEdgeInstructions = () => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState } = coordinator;

  return (
    <>
      {machineState.matches('addEdge.selectFirstNode') && (
        <Text absolutePosition={[10, 10]} fontSize={18} text="Select the first node" />
      )}
      {machineState.matches('addEdge.selectSecondNode') && (
        <Text absolutePosition={[10, 10]} fontSize={18} text="Select the second node" />
      )}
    </>
  );
};

const DeleteEdgeInstructions = () => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState } = coordinator;

  return (
    <>
      {machineState.matches('deleteEdge.selectFirstNode') && (
        <Text absolutePosition={[10, 10]} fontSize={18} text="Select the first node" />
      )}
      {machineState.matches('deleteEdge.selectSecondNode') && (
        <Text absolutePosition={[10, 10]} fontSize={18} text="Select the second node" />
      )}
    </>
  );
};

const WorkflowInstructions = () => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState } = coordinator;

  if (!machineState) {
    return null;
  }

  return (
    <Layer>
      {machineState.matches('addEdge') && <AddEdgeInstructions />}
      {machineState.matches('deleteEdge') && <DeleteEdgeInstructions />}
    </Layer>
  );
};

export default WorkflowInstructions;
