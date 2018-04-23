export const IReadEventCompleted = `
interface IReadEventCompleted {

  /** ReadEventCompleted result */
  result: ReadEventCompleted.ReadEventResult;

  /** ReadEventCompleted event */
  event: IResolvedIndexedEvent;

  /** ReadEventCompleted error */
  error?: (string | null);
}

`;
