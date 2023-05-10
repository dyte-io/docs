import React from 'react';
import { DyteTooltip } from '@dytesdk/react-ui-kit';
import { Info } from 'react-feather';

export default function InfoTooltip({ label }) {
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <DyteTooltip variant="primary" label={label} kind="inline">
        <Info />
      </DyteTooltip>
    </span>
  );
}
