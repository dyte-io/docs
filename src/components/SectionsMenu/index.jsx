import React, { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

const SectionsMenu = forwardRef(
  ({ defaultValue = '', values = [], children, className, ...props }, ref) => {
    return (
      <Select.Root defaultValue={defaultValue} ref={ref} {...props}>
        <Select.Trigger
          aria-label="Select Section"
          className={clsx('sections-menu-trigger', className)}
        >
          <Select.Value />
          <Select.Icon>
            <ChevronDownIcon className="sections-menu-scrollButton" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className={clsx('sections-menu-content', className)}>
          <Select.ScrollUpButton className="sections-menu-scrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport>
            <Select.Group>
              {values.map(({ id, name, icon: Icon, disabled = false }) => (
                <Select.Item
                  value={id}
                  key={id}
                  className={clsx('sections-menu-item')}
                  disabled={disabled}
                >
                  <Select.ItemText>
                    <div className="item-text">
                      {Icon && <Icon />}
                      <span>{name}</span>
                    </div>
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon className="item-indicator" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
              {children}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="sections-menu-scrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    );
  }
);

SectionsMenu.displayName = 'SectionsMenu';

export default SectionsMenu;
