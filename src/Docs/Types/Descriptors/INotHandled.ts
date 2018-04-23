export const INotHandled = `
interface INotHandled {

  /** NotHandled reason */
  reason: NotHandled.NotHandledReason;

  /** NotHandled additionalInfo */
  additionalInfo?: (NotHandled.IMasterInfo | null);
}
`;
