export const IReadAllEventsCompleted = `
interface IReadAllEventsCompleted {

  /** ReadAllEventsCompleted commitPosition */
  commitPosition: (number | Long);

  /** ReadAllEventsCompleted preparePosition */
  preparePosition: (number | Long);

  /** ReadAllEventsCompleted events */
  events?: (IResolvedEvent[] | null);

  /** ReadAllEventsCompleted nextCommitPosition */
  nextCommitPosition: (number | Long);

  /** ReadAllEventsCompleted nextPreparePosition */
  nextPreparePosition: (number | Long);

  /** ReadAllEventsCompleted result */
  result?: (ReadAllEventsCompleted.ReadAllResult | null);

  /** ReadAllEventsCompleted error */
  error?: (string | null);
}

`;
