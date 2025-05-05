import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function CustomNode({ data }) {
    const statusMap = {
        succeeded: { label: 'Succeeded', icon: '🟢', class: 'text-green-600' },
        declined: { label: 'Declined', icon: '🔴', class: 'text-gray-500' },
        paused: { label: 'Error / Paused', icon: '⚠️', class: 'text-yellow-500 italic' },
    };

    const current = statusMap[data.status] || {
        label: 'Unknown',
        icon: '❔',
        class: 'text-gray-400',
    };

    return (
        <div className="rounded-lg border bg-white shadow-sm px-4 py-3 w-40 text-center text-sm relative">
            {/* Handles para conexión */}
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />

            <div className="font-semibold">{data.name}</div>
            {data.description && (
                <div className="text-xs text-gray-500">{data.description}</div>
            )}
            <div className="mt-2 space-y-1">
                <div className={current.class}>
                    {current.icon} {current.label}
                </div>
            </div>
        </div>
    );
}
