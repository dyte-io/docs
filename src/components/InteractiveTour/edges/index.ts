/* eslint-disable @typescript-eslint/no-explicit-any */
import { MarkerType, type Edge, type EdgeTypes } from 'reactflow';
import CustomEdgeWLabel from './CustomEdgeWithLabel';

export const initialEdges = [
  {
    id: 'phone->cust-server',
    source: 'phone',
    target: 'cust-server',
    animated: false,
  },
  {
    id: 'cust-server->cust-db',
    source: 'cust-server',
    target: 'cust-db',
    animated: false,
  },
  {
    id: 'cust-server->dyte',
    source: 'cust-server',
    target: 'dyte',
    sourceHandle: 'dyte-conn',
    animated: false,
  },
] satisfies Edge[];

function updateEdgeData(edge: Edge, updateData: any) {
  const orgEdge = initialEdges.find((e) => e.id === edge.id);
  if (orgEdge === undefined) return edge;
  const newEdge = { ...orgEdge, ...updateData };
  return newEdge;
}

type UpdateEdge = {
  [id: string]: any;
};

function updateEdgesData(edges: Edge[], updates: UpdateEdge) {
  const newEdges = [...edges];
  for (const i in newEdges) {
    newEdges[i] = updateEdgeData(newEdges[i], updates[newEdges[i].id] || {});
  }
  return newEdges;
}

const markerLarge = {
  type: MarkerType.ArrowClosed,
  width: 24,
  height: 24,
  color: '#2563eb',
};

export function gotoStepEdges(edges: Edge[], step: number) {
  switch (step) {
    case 1: {
      const updates = {
        'phone->cust-server': {
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
          },
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 2: {
      const updates = {
        'cust-server->dyte': {
          animated: true,
          markerEnd: markerLarge,
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
          type: 'edge-w-label',
          data: {
            label: 'HTTP Request',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 3: {
      const updates = {
        'cust-server->dyte': {
          animated: true,
          markerStart: markerLarge,
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
          type: 'edge-w-label',
          data: {
            label: 'HTTP Response',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 4: {
      const updates = {
        'cust-server->cust-db': {
          animated: true,
          markerEnd: markerLarge,
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
          type: 'edge-w-label',
          data: {
            label: 'Store meeting information',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 5: {
      const updates = {
        'cust-server->cust-db': {
          hidden: true,
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 6: {
      const updates = {
        'cust-server->cust-db': {
          hidden: true,
        },
        'cust-server->dyte': {
          animated: true,
          markerEnd: markerLarge,
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
          type: 'edge-w-label',
          data: {
            label: 'HTTP Request',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    case 7: {
      const updates = {
        'cust-server->cust-db': {
          hidden: true,
        },
        'cust-server->dyte': {
          animated: true,
          markerStart: markerLarge,
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
          type: 'edge-w-label',
          data: {
            label: 'HTTP Response',
          },
        },
        'phone->cust-server': {
          animated: true,
          markerStart: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
          },
          type: 'edge-w-label',
          data: {
            label: 'Forward the token',
          },
          style: {
            strokeWidth: 2,
            stroke: '#2563eb',
          },
        },
      };
      return updateEdgesData(edges, updates);
    }
    default: {
      return initialEdges;
    }
  }
}

export const edgeTypes = {
  'edge-w-label': CustomEdgeWLabel,
  // Add your custom edge types here!
} satisfies EdgeTypes;
