import { useHistory, useLocation } from '@docusaurus/router';
import React, { useEffect } from 'react';
import { Background, BackgroundVariant, Controls, ReactFlow } from 'reactflow';
import "reactflow/dist/style.css";

import { edgeTypes } from "./edges";

import { steps, useStore } from "./store";
import { nodeTypes } from "./nodes/nodeTypes";


export const InteractiveTour = ({ href }: { href: string}) => {
  const history = useHistory();

  const store = useStore();

  useEffect(() => {
    const step = steps.find((e) => e.href === href);
    if(step) {
      store.incStep(step.startStep)
    }
  }, []);

  useEffect(() => {
    if(store.nextNav){
      history.push(store.nextNav);
    }
  }, [store.nextNav]);

  if(store.nodes.length === 0) return <div>Nothing to see</div>;

  return (
    <div className="absolute flex h-full w-full pr-12">
      <div className="flex flex-1 test">
        <ReactFlow
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodes={store.nodes}
          edges={store.edges}
          onNodesChange={store.onNodesChange}
          onEdgesChange={store.onEdgesChange}
          onConnect={store.addEdge}
          fitView
          fitViewOptions={{
            padding: 0.02,
          }}
        >
          <Background variant={BackgroundVariant.Dots} className='bg-secondary-900 dark:bg-secondary-800' />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
