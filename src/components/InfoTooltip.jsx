import React from 'react';
import { DyteTooltip } from '@dytesdk/react-ui-kit';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default function InfoTooltip({ label }) {
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <DyteTooltip variant="primary" label={label} kind="inline">
        <InfoCircledIcon />
      </DyteTooltip>
    </span>
  );
}
