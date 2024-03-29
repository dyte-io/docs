import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";
import { clsx } from "../utils";
import { useStore } from "../store";
import React from "react";


export type PhoneProps = {
  children: (step: number) => React.ReactNode;
  active: boolean;
};

export default function Phone({ data }: NodeProps<PhoneProps>) {
    const { currentStep } = useStore();
  return (
    <div
      className={clsx(
        "rounded-t-[28px] rounded-b-[36px] bg-pink-500/90 shadow-xl",
        data.active ? "grayscale-0 opacity-100" : "grayscale opacity-40"
      )}
    >
      <p className={"rounded-t-md px-8 py-1 text-white text-xs font-semibold font-mono mb-0"}>
        Your Application
      </p>
      <div className="simulator nowheel bg-secondary-1000">
        <div className="bg-secondary-1000 h-full w-full p-2">{data.children(currentStep)}</div>
        <Handle className={"w-2 h-2"} type="source" position={Position.Right} />
      </div>
    </div>
  );
}
