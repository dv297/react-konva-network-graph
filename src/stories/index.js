import React from 'react';

import { storiesOf } from '@storybook/react';

import NetworkGraphComponent from './NetworkGraphComponent';
import NetworkGraph from '../components/NetworkGraph/NetworkGraph';
import GraphCoordinatorComponent from './GraphCoordinatorComponent';
import GraphCoordinator from '../components/GraphCoordinator/GraphCoordinator';
import WorkflowControlsComponent from './WorkflowControlsComponent';
import CustomWorkflowControlsWrapperComponent from './CustomWorkflowControlsWrapperComponent';
import CustomWorkflowControlsWrapper from '../components/CustomWorkflowControlsWrapper/CustomWorkflowControlsWrapper';

const componentInfoOptions = {
  info: {
    inline: true,
    source: true,
  },
};

const getComponentInfoOptions = (overrides) => {
  const { propTables = [], text = undefined } = overrides;
  return {
    info: {
      ...componentInfoOptions.info,
      propTables,
      text,
    },
  };
};

storiesOf('Components', module)
  .add(
    'Network Graph',
    () => NetworkGraphComponent,
    getComponentInfoOptions({ propTables: [NetworkGraph], text: 'Basic view-only version of the network graph' }),
  )
  .add(
    'Graph Coordinator',
    () => GraphCoordinatorComponent,
    getComponentInfoOptions({
      propTables: [GraphCoordinator],
      text:
        'Wrapper component that manages the state for adding edges between nodes. Generally, this component will be rendered with the default WorkflowControls or a custom one created using CustomWorkflowControlsWrapper along with the NetworkGraph itself',
    }),
  )
  .add(
    'Workflow Controls',
    () => WorkflowControlsComponent,
    getComponentInfoOptions({
      propTables: false,
      text: 'Basic version of some controls that allow for adding edges between nodes',
    }),
  )
  .add(
    'CustomWorkflowControlsWrapper',
    () => CustomWorkflowControlsWrapperComponent,
    getComponentInfoOptions({
      propTables: [CustomWorkflowControlsWrapper],
      text: 'Component that provides a render prop for creating a custom UI for managing the state of the NetworkGraph',
    }),
  );
