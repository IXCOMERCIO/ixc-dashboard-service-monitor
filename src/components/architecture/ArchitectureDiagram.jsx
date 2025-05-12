import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode.jsx';
import transformToDiagram from './transformToDiagram.jsx';

export default function ArchitectureDiagram({ service }) {
    const { nodes, edges } = transformToDiagram(service);

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
