import _ from 'lodash';

import * as Docs from './Docs';
import * as ApiDefinitions from './Docs/Api/Definitions';
import * as TypesDefinitions from './Docs/Types/Definitions';
import { RouteMap } from './Types';

export const Routes: RouteMap[] = [ {
  title: 'Introduction',
  path: '/intro',
  content: Docs.Intro,
  children: [ {
    title: 'Motivation',
    path: '/intro/motivation',
    content: Docs.Motivation,
  }, {
    title: 'Core Concepts',
    path: '/intro/core-concepts',
    content: Docs.CoreConcepts,
    overview: Docs.CoreConceptsOverview,
  } ],
}, {
  title: 'API',
  path: '/api',
  content: Docs.Api,
  children: Object.values(ApiDefinitions).map(definition => ({
    title: definition.title,
    path: `/api/${_.kebabCase(definition.title)}`,
    content: Docs.ApiDocs[ definition.key ],
  })),
}, {
  title: 'Types',
  path: '/types',
  content: Docs.Types,
  children: Object.values(TypesDefinitions).map(definition => ({
    title: definition.key,
    path: `/types/${_.kebabCase(definition.key)}`,
    content: Docs.TypesDocs[ definition.key ],
  })),
} ];
