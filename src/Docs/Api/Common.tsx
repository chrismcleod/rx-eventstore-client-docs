import React from 'react';

import { Definition, Param } from '../../Types';

import * as Snippets from './Snippets';

export const correlationIdParam: Param = {
  key: 'correlationId',
  name: 'correlationId',
  attribute: ({ className }) => <span className={ className }>Optional <br /> Auto-Generated</span>,
  description: 'A unique UUID to track this command.  Will be auto-generated if not provided.',
  type: 'string',
};

export const credentialsParam: Param = {
  key: 'credentials',
  name: 'credentials',
  attribute: ({ className }) => <span className={ className }>Optional <br /> Inherited</span>,
  description: 'A username and password to use for this command.  Inherited from the client if not provided.',
  type: 'Credentials',
};
