import { Dialog, Icon, IDialogProps } from '@stoplight/ui-kit';
import { ScrollContainer } from '@stoplight/ui-kit/ScrollContainer';
import * as React from 'react';

import { NodeTypeColors, NodeTypeIcons } from '../../constants';
import { Docs } from '../../containers/Docs';
import { INodeEdge } from '../../types';
import { GoToRef } from './GoToRef';

export interface INodeDialogProps {
  direction: 'to' | 'from';
  onClose: IDialogProps['onClose'];
  edge?: INodeEdge;
}

export const NodeDialog = ({ edge, direction, ...dialogProps }: INodeDialogProps) => {
  const nodeName = edge && edge[`${direction}BranchNodeName`];
  const nodeUri = edge && edge[`${direction}BranchNodeUri`];
  const nodeType = edge && edge[`${direction}BranchNodeType`];
  const nodeVersion = edge && edge[`${direction}BranchNodeVersion`];

  return (
    <Dialog
      {...dialogProps}
      isOpen={!!edge}
      title={
        <div className="flex items-center mr-2">
          <div className="flex-1 flex items-center">
            {nodeName} {nodeVersion !== '0.0' && <span className="mx-2 text-sm text-gray-6">v{nodeVersion}</span>}
          </div>
          <GoToRef uri={nodeUri}>Go to ref</GoToRef>
        </div>
      }
      icon={<Icon icon={NodeTypeIcons[nodeType]} iconSize={20} color={NodeTypeColors[nodeType]} />}
    >
      <div className="h-96">
        <ScrollContainer>
          <Docs className="p-10" node={nodeUri} />
        </ScrollContainer>
      </div>
    </Dialog>
  );
};