import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode.jsx';
import '@xyflow/react/dist/style.css';

export default function ArchitectureDiagram({ service }) {
    const { id: parentId, title, subservices, status } = service;

    const statusColorMap = {
        online: 'succeeded',
        degraded: 'paused',
        offline: 'declined',
    };

    const parentNode = {
        id: parentId,
        type: 'custom',
        position: { x: 50, y: 200 },
        sourcePosition: 'right',
        data: {
            name: title,
            status: statusColorMap[status] || 'paused',
        },
    };

    const childNodes = subservices.map((svc, index) => ({
        id: svc.id,
        type: 'custom',
        position: { x: 250, y: 100 + index * 120 },
        targetPosition: 'left',
        data: {
            name: svc.name,
            status: statusColorMap[svc.status] || 'paused',
            description: svc.description || '',
        },
    }));

    const nodes = [parentNode, ...childNodes];

    const edges = subservices.map((svc) => ({
        id: `e-${parentId}-${svc.id}`,
        source: parentId,
        target: svc.id,
        type: 'smoothstep',
    }));

    return (
        <div style={{ width: '100%', height: '60vh' }}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    nodeTypes={{ custom: CustomNode }}
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
}
