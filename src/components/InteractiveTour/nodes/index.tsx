/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Node } from 'reactflow';
import DoctorMeeting from '../components/DoctorMeeting';
import DoctorMeetingPreJoin from '../components/DoctorMeetingPreJoin';
import React from 'react';

export const initialNodes = [
  {
    id: 'explanation',
    type: 'explanation',
    position: {
      x: -700,
      y: -30,
    },
    data: {},
  },
  {
    id: 'cust-db',
    type: 'database',
    position: { x: 114, y: 500 },
    data: { active: false },
  },
  {
    id: 'cust-server',
    type: 'rest-api-player',
    position: { x: -10, y: 184 },
    data: { active: false },
  },
  {
    id: 'phone',
    type: 'phone',
    position: { x: -400, y: 50 },
    data: {
      children: (step: number) => {
        if (step > 0 && step <= 4) return <DoctorMeeting />;
        if (step > 4 && step <= 8) return <DoctorMeetingPreJoin />;
      },
      active: false,
    },
  },
  {
    id: 'dyte',
    type: 'logo',
    position: { x: 400, y: 50 },
    data: { active: false },
  },
] satisfies Node[];

function updateNodeData(node: Node, updateData: any) {
  const orgNode = initialNodes.find((e) => e.id === node.id);
  if (orgNode === undefined) return node;
  const newNode = { ...node };

  newNode.hidden = updateData._hidden;
  newNode.data = {
    ...orgNode.data,
    ...updateData,
  };
  return newNode;
}

type UpdateNodes = {
  [id: string]: any;
};

function updateNodesData(nodes: Node[], updates: UpdateNodes) {
  const newNodes = [...nodes];
  for (const i in newNodes) {
    newNodes[i] = updateNodeData(newNodes[i], updates[newNodes[i].id] || {});
  }
  return newNodes;
}

export function gotoStepNodes(nodes: Node[], step: number) {
  switch (step) {
    case 1: {
      const updates = {
        phone: {
          active: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 2: {
      const updates = {
        'cust-server': {
          active: true,
        },
        dyte: {
          active: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 3: {
      const updates = {
        'cust-server': {
          active: true,
        },
        dyte: {
          active: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 4: {
      const updates = {
        'cust-server': {
          active: true,
        },
        'cust-db': {
          active: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 5: {
      const updates = {
        phone: {
          active: true,
        },
        'cust-db': {
          _hidden: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 6: {
      const updates = {
        'cust-server': {
          active: true,
        },
        dyte: {
          active: true,
        },
        'cust-db': {
          _hidden: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
    case 7: {
      const updates = {
        'cust-server': {
          active: true,
        },
        dyte: {
          active: true,
        },
        'cust-db': {
          _hidden: true,
        },
      };
      return updateNodesData(nodes, updates);
    }
  }
  return initialNodes;
}
