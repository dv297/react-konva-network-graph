import React from 'react';

import { GraphCoordinator, NetworkGraph, WorkflowControls } from '../components';
import SampleNodeRenderer from '../components/SampleNodeRenderer/SampleNodeRenderer';

const nodes = [
  {
    label: 'Node 1',
    nodeGraphData: {
      id: 1,
      x: 50,
      y: 50,
    },
  },
  {
    label: 'Node 2',
    nodeGraphData: {
      id: 2,
      x: 600,
      y: 50,
    },
  },
  {
    label: 'Node 3',
    nodeGraphData: {
      id: 3,
      x: 600,
      y: 150,
    },
  },
];

const edges = [
  {
    edgeGraphData: {
      id: 1,
      from: 1,
      to: 2,
    },
  },
];

export default (
  <GraphCoordinator>
    <WorkflowControls />
    <NetworkGraph
      width={window.innerWidth * 0.9}
      height={300}
      nodes={nodes}
      edges={edges}
      renderNode={(nodeData) => <SampleNodeRenderer {...nodeData} />}
      nodeWidth={300}
      nodeHeight={50}
    />
  </GraphCoordinator>
);
