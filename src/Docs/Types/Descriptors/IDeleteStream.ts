export const IDeleteStream = `
interface IDeleteStream {

  /** DeleteStream eventStreamId */
  eventStreamId: string;

  /** DeleteStream expectedVersion */
  expectedVersion: (number | Long);

  /** DeleteStream requireMaster */
  requireMaster: boolean;

  /** DeleteStream hardDelete */
  hardDelete?: (boolean | null);
}

`;
