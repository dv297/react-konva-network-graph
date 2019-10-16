import React, { useContext } from 'react';
import PropTypes from 'prop-types';

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

CustomWorkflowControlsWrapper.propTypes = {
  /**
   * Function that defines a custom UI for controlling the state of the NetworkGraph. This function is passed an object
   * with the following properties:
   * - mode: The current mode that the network graph is in
   * - setToAddEdgeMode: Function for changing the mode to allow for adding edges
   * - setToDeleteEdgeMode: Function for changing the mode to allow for deleting edges
   * - escapeCurrentMode: Function for resetting to the default "view" mode
   */
  children: PropTypes.func.isRequired,
};

export default CustomWorkflowControlsWrapper;
