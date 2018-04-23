export interface RouteMap {
  title: string;
  path: string;
  content: React.ReactType;
  overview?: React.ReactType;
  children?: RouteMap[];
}

export interface Example {
  description: string;
  code: string;
}

export interface Reference {
  href: string;
  label: string;
}

export interface Param {
  key: string;
  name: React.ReactType;
  type: React.ReactType;
  attribute: React.ReactType;
  description: React.ReactType;
}

export interface Definition {
  key: string;
  title: string;
  signature: string;
  summary: string;
  informal?: string;
  overview: React.ReactNode;
  details: React.ReactNode;
  params: Param[];
  returns: string;
  examples: Example[];
  references: Reference[];
}

export interface IType {
  key: string;
  descriptor: string;
}
