export const Event = `
interface Event<TData = any> {
  code: number;
  correlationId: string;
  type: string;
  data: TData;
}
`;
