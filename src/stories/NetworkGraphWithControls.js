import React from 'react';

import { GraphCoordinator, NetworkGraph, WorkflowControls } from '../components';
import nodes from '../testdata/nodes';
import edges from '../testdata/edges';
import SampleNodeRenderer from '../components/SampleNodeRenderer/SampleNodeRenderer';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <GraphCoordinator>
      <WorkflowControls />
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
