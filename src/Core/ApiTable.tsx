import React from 'react';

import { Definition, Example, Param, Reference } from '../Types';

import './ApiTable.scss';
import { Code } from './Code';
import { Link } from './Link';
import { View } from './View';

interface Props {
  definition: Definition;
}

export const ApiTable: React.SFC<Props> = ({ definition }) => (
  <View className="ApiTable">
    <View className="ApiDefinition">
      <span className="Title">{ definition.title }</span>
      <span className="Signature">
        { definition.signature }
      </span>
      <span className="Section Summary">
        { definition.summary }
      </span>
      <span className="Section Informal">
        { definition.informal }
      </span>
      <span className="Section Details">
        { definition.details }
      </span>
      <View className="Params">
        <strong className="Heading">Params:</strong>
        <ParamsTable params={ definition.params } />
      </View>
      <View className="Returns">
        <strong className="Heading">Returns: </strong>
        <span className="ReturnText">{ definition.returns }</span>
      </View>
      <View className="Examples">
        <strong className="Heading">Example{ definition.examples.length === 1 ? '' : 's' }: </strong>
        <Examples examples={ definition.examples } />
      </View>
      <View className="References">
        <strong className="Heading">Also See: </strong>
        <References references={ definition.references } />
      </View>
    </View>
    { definition.overview && (
      <View className="ApiOverview">
        <span className="Title">Overview</span>
        { definition.overview }
      </View>
    ) }
  </View>
);

export const ParamsTable: React.SFC<{ params: Param[] }> = ({ params }) => (
  <View className="ParamsTable">
    <View className="HeaderRow">
      <span className="HeaderCell">Name</span>
      <span className="HeaderCell">Type</span>
      <span className="HeaderCell">Attribute</span>
      <span className="HeaderCell">Description</span>
    </View>
    { params.map(param => <ParamView key={ param.key } param={ param } />) }
  </View>
);

export const ParamView: React.SFC<{ param: Param }> = ({ param }) => {
  return (
    <View className="ParamRow">
      { typeof param.name === 'string' ? <span className="ParamCell" title={ param.name }>{ param.name }</span> : <param.name className="ParamCell" /> }
      { typeof param.type === 'string' ? <span className="ParamCell" title={ param.type }>{ param.type }</span> : <param.type className="ParamCell" /> }
      { typeof param.attribute === 'string' ? <span className="ParamCell" title={ param.attribute }>{ param.attribute }</span> : <param.attribute className="ParamCell" /> }
      { typeof param.description === 'string' ? <span className="ParamCell" title={ param.description }>{ param.description }</span> : <param.description className="ParamCell" /> }
    </View>
  );
};

export const Examples: React.SFC<{ examples: Example[] }> = ({ examples }) => (
  <View className="ExamplesList">
    {
      examples.map(example => (
        <React.Fragment key={ example.description }>
          <span className="Description">{ example.description }</span>
          <Code code={ example.code } />
        </React.Fragment>
      ))
    }
  </View>
);

export const References: React.SFC<{ references: Reference[] }> = ({ references }) => (
  <View className="ExamplesList">
    {
      references.map(reference => (
        <Link key={ reference.href } href={ reference.href } label={ reference.label } />
      ))
    }
  </View>
);
