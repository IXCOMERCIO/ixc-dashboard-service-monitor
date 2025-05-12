import React from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
  {
    id: 'parent',
    position: { x: 300, y: 50 },
    data: { label: 'Parent Node' },
    sourcePosition: 'bottom',
  },
  {
    id: 'child-1',
    position: { x: 100, y: 250 },
    data: { label: 'Child 1' },
    targetPosition: 'top',
  },
  {
    id: 'child-2',
    position: { x: 300, y: 350 },
    data: { label: 'Child 2' },
    targetPosition: 'top',
  },
  {
    id: 'child-3',
    position: { x: 400, y: 450 },
    data: { label: 'Child 3' },
    targetPosition: 'top',
  },
  {
    id: 'child-4',
    position: { x: 500, y: 650 },
    data: { label: 'Child 4' },
    targetPosition: 'top',
  },
];

const edges = [
  { id: 'e1', source: 'parent', target: 'child-1', type: 'smoothstep' },
  { id: 'e2', source: 'child-1', target: 'child-2', type: 'smoothstep' },
  { id: 'e3', source: 'child-1', target: 'child-3', type: 'smoothstep' },
  { id: 'e4', source: 'child-3', target: 'child-4', type: 'smoothstep' },
];

export default function TestFlow() {
  return (
    <div style={{ width: '100%', height: 600 }}>
            <ReactFlowProvider>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
    </div>
  );
}
