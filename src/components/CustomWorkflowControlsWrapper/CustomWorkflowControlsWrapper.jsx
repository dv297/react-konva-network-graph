import React, { useContext } from 'react';

import { GraphCoordinatorContext } from '../GraphCoordinator/GraphCoordinator';

const getMode = (machineState) => {
  const value = machineState.value;
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    return keys[0];
  }

  return value;
};

const CustomWorkflowControlsWrapper = (props) => {
  const coordinator = useContext(GraphCoordinatorContext);
  const { machineState, sendCommand } = coordinator;

  if (!machineState) {
    throw new Error(
      'CustomWorkflowControlsWrapper depends on context provided by GraphCoordinator. Place this component below the GraphCoordinator tree',
    );
  }

  const mode = getMode(machineState);
  const setToAddEdgeMode = () => sendCommand('ADD_EDGE');
  const setToDeleteEdgeMode = () => sendCommand('DELETE_EDGE');
  const escapeCurrentMode = () => sendCommand('ESCAPE');

  return <div>{props.children({ mode, setToAddEdgeMode, setToDeleteEdgeMode, escapeCurrentMode })}</div>;
};

CustomWorkflowControlsWrapper.propTypes = {};

export default CustomWorkflowControlsWrapper;
