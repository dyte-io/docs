import { NodeTypes } from 'reactflow';
import Database from './DatabaseNode';
import ExplanationNode from './ExplanationNode';
import LogoNode from './LogoNode';
import Phone from './Phone';
import { PositionLoggerNode } from './PositionLoggerNode';
import RestAPIPlayer from './RestAPIPlayer';

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'rest-api-player': RestAPIPlayer,
  phone: Phone,
  database: Database,
  logo: LogoNode,
  explanation: ExplanationNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
