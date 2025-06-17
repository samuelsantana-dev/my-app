/* eslint-disable @typescript-eslint/no-explicit-any */
// components/PaletteView.tsx
'use client';

import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
type Node = {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
  style?: React.CSSProperties;
};

type Edge = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

type PaletteViewProps = {
  nodes: Node[];
  edges: Edge[];
};

export default function PaletteView({ nodes, edges }: PaletteViewProps) {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

