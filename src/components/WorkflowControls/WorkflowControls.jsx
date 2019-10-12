import React from 'react';

import AddEdgeButton from './AddEdgeButton';
import DeleteEdgeButton from './DeleteEdgeButton';

const WorkflowControls = () => {
  return (
    <div style={{ width: '100%', height: 30 }}>
      <AddEdgeButton />
      <DeleteEdgeButton />
    </div>
  );
};

export default WorkflowControls;
