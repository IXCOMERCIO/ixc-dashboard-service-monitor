import React from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomNode from './CustomNode.jsx';
import CustomEdge from './CustomEdge.jsx';

export default function ArchitectureDiagram({ service }) {
  const { id: parentId, title, subservices } = service;

  // Layout automático horizontal
  const nodeWidth = 180;
  const nodeSpacing = 40;
  const totalWidth = subservices.length * nodeWidth + (subservices.length - 1) * nodeSpacing;
  const startX = 300 - totalWidth / 2;

  // Nodo padre
  const parentNode = {
    id: parentId,
    type: 'custom',
    position: { x: 300, y: 50 },
    sourcePosition: 'bottom',
    data: {
      name: title,
      status: calculateParentStatus(subservices),
    },
  };

  // Nodos hijos
  const childNodes = subservices.map((svc, index) => ({
    id: svc.id,
    type: 'custom',
    position: {
      x: startX + index * (nodeWidth + nodeSpacing),
      y: 250,
    },
    targetPosition: 'top',
    data: {
      name: svc.name,
      status: mapStatus(svc.status),
    },
  }));

  // Conexiones
  const edges = subservices.map((svc) => ({
    id: `e-${parentId}-${svc.id}`,
    source: parentId,
    target: svc.id,
    type: 'custom', // <- usamos CustomEdge
  }));

  return (
    <div style={{ width: '100%', height: 600 }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={[parentNode, ...childNodes]}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodeTypes={{ custom: CustomNode }}
          edgeTypes={{ custom: CustomEdge }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

function mapStatus(status) {
  switch (status) {
    case 'online':
      return 'succeeded';
    case 'offline':
      return 'declined';
    case 'degraded':
      return 'paused';
    default:
      return 'paused';
  }
}

function calculateParentStatus(subs) {
  if (subs.some((s) => s.status === 'offline')) return 'declined';
  if (subs.some((s) => s.status === 'degraded')) return 'paused';
  return 'succeeded';
}
