export const IWriteEvents = `
interface IWriteEvents {

  /** WriteEvents eventStreamId */
  eventStreamId: string;

  /** WriteEvents expectedVersion */
  expectedVersion: (number | Long);

  /** WriteEvents events */
  events?: (INewEvent[] | null);

  /** WriteEvents requireMaster */
  requireMaster: boolean;
}

`;
