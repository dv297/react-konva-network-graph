import React from 'react';

import { GraphCoordinator, NetworkGraph, CustomWorkflowControlsWrapper } from '../components';
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
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <GraphCoordinator>
      <CustomWorkflowControlsWrapper>
        {({ mode, setToAddEdgeMode, setToDeleteEdgeMode, escapeCurrentMode }) => (
          <div>
            <h1>Current Mode: {mode}</h1>
            <button onClick={setToAddEdgeMode}>Custom Add Edge Button</button>
            <button onClick={setToDeleteEdgeMode}>Custom Delete Edge Button</button>
            <button onClick={escapeCurrentMode}>Custom Escape Button</button>
          </div>
        )}
      </CustomWorkflowControlsWrapper>
      <NetworkGraph
        width={window.innerWidth * 0.9}
        height={300}
        nodes={nodes}
        edges={edges}
        renderNode={(nodeData) => <SampleNodeRenderer {...nodeData} />}
        nodeWidth={300}
        nodeHeight={50}
        onEdgesUpdate={(edges) => {
          console.log(edges);
        }}
      />
    </GraphCoordinator>
  </div>
);
