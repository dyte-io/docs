/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  applyNodeChanges,
  applyEdgeChanges,
  Edge,
  NodeChange,
  EdgeChange,
  Node,
} from 'reactflow';
import { nanoid } from 'nanoid';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { gotoStepNodes, initialNodes } from './nodes';
import { gotoStepEdges, initialEdges } from './edges';
import { faker } from '@faker-js/faker';

export const steps = [
  {
    href: 'create-meeting',
    name: 'Create a meeting',
    startStep: 1,
    endStep: 4,
  },
  {
    href: 'add-participant',
    name: 'Add a participant',
    startStep: 5,
    endStep: 7,
  },
  {
    href: 'init-sdk',
    name: 'Initialize SDK',
    startStep: 8,
    endStep: 9,
  },
  {
    href: 'join-meeting',
    name: 'Join meeting',
    startStep: 10,
    endStep: 11,
  },
];

type State = {
  nodes: Node[];
  edges: Edge[];
  doctors: any[];
  currentStep: number;
  nextNav?: string;
};

type Actions = {
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  addEdge: (data: any) => void;
  incStep: (step?: number) => void;
};

export const useStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    nodes: [],
    nextNav: undefined,
    edges: [],
    doctors: ['Cardiology', 'Dermatology', 'Pediatrics', 'Psychiatrist'].map(
      (e) => ({
        dept: e,
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      }),
    ),
    currentStep: 0,

    onNodesChange(changes) {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },

    onEdgesChange(changes: any) {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },

    addEdge(data: any) {
      const id = nanoid(6);
      const edge = { id, ...data };

      set({ edges: [edge, ...get().edges] });
    },
    incStep(nextStep) {
      set((s) => {
        const nStep = nextStep ?? s.currentStep + 1;
        const step = steps.find((n) => n.startStep == nStep);
        let nextNav = undefined;
        if (step) {
          nextNav = step.href;
        }
        return {
          nextNav: nextNav,
          currentStep: nStep,
          nodes: gotoStepNodes(
            s.nodes.length == 0 ? initialNodes : s.nodes,
            nStep,
          ),
          edges: gotoStepEdges(
            s.edges.length == 0 ? initialEdges : s.edges,
            nStep,
          ),
        };
      });
    },
  }),
  shallow,
);
