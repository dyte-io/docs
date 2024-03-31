import { useHistory } from '@docusaurus/router';
import React, { useEffect, useState } from 'react';
import { Background, BackgroundVariant, Controls, ReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import {
  provideDyteDesignSystem,
} from '@dytesdk/react-ui-kit';
import { useDyteClient } from '@dytesdk/react-web-core';

import { edgeTypes } from './edges';

import { steps, useStore } from './store';
import { nodeTypes } from './nodes/nodeTypes';
import  OnboardingPartTwo, { stepsTwo } from './OnboardingPartTwo';

export const InteractiveTour = ({ href }: { href: string }) => {
  const history = useHistory();
  const [r, setR] = useState(false);
  const [meeting, initMeeting] = useDyteClient();

  const store = useStore();

  useEffect(() => {
    const step = steps.find((e) => e.href === href);
    if (step) {
      store.incStep(step.startStep);
    }
    setTimeout(() => {
      setR(true);
    }, 200);
  }, []);

  useEffect(() => {
    initMeeting({
      authToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjM5MGJmMjc0LTQxMzMtNDI2ZC04NDkxLWVhN2ExYTE5MDQ4YiIsIm1lZXRpbmdJZCI6ImY5MTMzODM0LWE4MmYtNGNhYi05OTRiLWY3M2RiMmQwNmY4OCIsInBhcnRpY2lwYW50SWQiOiIxZDVhNTkyMy1iYzY5LTQ5ZDAtODJhNy1lZDIzZmE0ZTUyZWYiLCJwcmVzZXRJZCI6Ijg3NzNiZDAzLTkzNjItNDdjNy1hNzlkLThmNTQxMWMyNDc2NiIsImlhdCI6MTY2OTgzMDE5OCwiZXhwIjoxNjc4NDcwMTk4fQ.ngSKuI24JHtPxiimrGT1Vkk7_AdvrMRwkbltvlWpyWmmm14-Kl4OUVw2nm7q0S2uEgw7xXRz8faxzzJTMogkKlUSXGXOpUc_lXYH9h7u29MCFf3nJDy_FZIsSgPmULLoF3p4OlU9wNSwEnO0h856PdB4MfAuXxa24vkgI1tplzBPOS4NcW9x8pfE7J98ixVZKcPvqNig_pLOypy0j5Pd3CHdi25EFml1Fr0iyui4hDrjE-mzMnYwvojkXSb47MSxVoOLGvWn__dL2qrPSho4C3fhb_HEupWAzCHMDBpl1IGhazN1-mZ40WNYsKFFcch89qOsr0dA2C_d0PHVzCVP3A',
      defaults: {
        audio: false,
        video: false,
      },
    });

    provideDyteDesignSystem(document.body, {
      theme: 'light',
    });
  }, []);

  useEffect(() => {
    if (meeting) {
      meeting.self.on('roomJoined', () => {
        if(store.currentStep == 10) store.incStep(11);
        else if(store.currentStep == 11) store.incStep(12);
      })
    }
  }, [meeting]);

  useEffect(() => {
    if (store.nextNav) {
      history.push(store.nextNav);
    }
  }, [store.nextNav]);

  if (store.nodes.length === 0) return <div>Nothing to see</div>;
  if (r === false) return null;

  const nonReactFlowStep = stepsTwo.find((e) => e.step === store.currentStep);

  if (nonReactFlowStep) {
    return (
      <OnboardingPartTwo step={nonReactFlowStep} meeting={meeting} store={store} />
    );
  }

  return (
    <div className="absolute flex h-full w-full pr-12">
      <div className="flex flex-1">
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
          <Background
            variant={BackgroundVariant.Dots}
            className="bg-secondary-900 dark:bg-secondary-800"
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
