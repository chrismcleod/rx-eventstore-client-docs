export const IReadStreamEventsCompleted = `
interface IReadStreamEventsCompleted {

  /** ReadStreamEventsCompleted events */
  events?: (IResolvedIndexedEvent[] | null);

  /** ReadStreamEventsCompleted result */
  result: ReadStreamEventsCompleted.ReadStreamResult;

  /** ReadStreamEventsCompleted nextEventNumber */
  nextEventNumber: (number | Long);

  /** ReadStreamEventsCompleted lastEventNumber */
  lastEventNumber: (number | Long);

  /** ReadStreamEventsCompleted isEndOfStream */
  isEndOfStream: boolean;

  /** ReadStreamEventsCompleted lastCommitPosition */
  lastCommitPosition: (number | Long);

  /** ReadStreamEventsCompleted error */
  error?: (string | null);
}


`;
