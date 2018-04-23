import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

import { View } from '../Core';
import { Routes } from '../Routes';

import { Item } from './Views/Item';
import { Title } from './Views/Title';
import './style.scss';

type Props = { path: string };

export const Main: React.SFC<Props> = ({ path }) => (
  <View id="Sidebar" className="Container">
    <Accordion>
      {
        Routes.map(route => (
          <AccordionItem
            key={ route.path }
            title={
              <Title
                href={ route.path }
                title={ route.title }
                expanded={ path.includes(route.path) }
              />
            }
            expanded={ path.includes(route.path) }
          >
            { route.children && route.children.map(child => (
              <Item key={ child.path } { ...child } active={ path === child.path } />
            )) }
          </AccordionItem>
        ))
      }
    </Accordion>
  </View>
);
