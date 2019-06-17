import React from 'react';

import { NetworkGraph } from '../components';
import nodes from '../testdata/nodes';
import edges from '../testdata/edges';
import SampleNodeRenderer from '../components/SampleNodeRenderer/SampleNodeRenderer';

export default () => (
  <NetworkGraph
    width={window.innerWidth * 0.9}
    height={window.innerHeight * 0.9}
    nodes={nodes}
    edges={edges}
    renderNode={(nodeData) => <SampleNodeRenderer {...nodeData} />}
    nodeWidth={300}
    nodeHeight={50}
  />
);
