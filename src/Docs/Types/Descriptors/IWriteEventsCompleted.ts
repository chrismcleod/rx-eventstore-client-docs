export const IWriteEventsCompleted = `
interface IWriteEventsCompleted {

  /** WriteEventsCompleted result */
  result: OperationResult;

  /** WriteEventsCompleted message */
  message?: (string | null);

  /** WriteEventsCompleted firstEventNumber */
  firstEventNumber: (number | Long);

  /** WriteEventsCompleted lastEventNumber */
  lastEventNumber: (number | Long);

  /** WriteEventsCompleted preparePosition */
  preparePosition?: (number | Long | null);

  /** WriteEventsCompleted commitPosition */
  commitPosition?: (number | Long | null);
}

`;
