import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function CustomNode({ data }) {
    const statusMap = {
        healthy: { label: 'Healthy', icon: '🟢', class: 'border-green-500' },
        critical: { label: 'Critical', icon: '🔴', class: 'border-red-500' },
        warning: { label: 'Warning', icon: '⚠️', class: 'border-yellow-500' },
    };

    const current = statusMap[data.status] || {
        label: 'Unknown',
        icon: '❔',
        class: 'border-gray-300',
    };

    return (
        <div className={`rounded-lg border-2 shadow-sm px-4 py-3 w-40 text-center text-sm relative `}>
            {/* Handles para conexión */}
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />

            <div className="font-semibold">{data.name}</div>
            {/* {data.description && (
                <div className="text-xs text-gray-500">{data.description}</div>
            )} */}
            <div className="mt-2 space-y-1">
                <div>
                    {current.icon} {current.label}
                </div>
            </div>
        </div>
    );
}
