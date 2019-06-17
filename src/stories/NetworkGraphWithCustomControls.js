import React from 'react';

import { GraphCoordinator, NetworkGraph, CustomWorkflowControlsWrapper } from '../components';
import nodes from '../testdata/nodes';
import edges from '../testdata/edges';
import SampleNodeRenderer from '../components/SampleNodeRenderer/SampleNodeRenderer';

export default () => (
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
        height={window.innerHeight * 0.9}
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
