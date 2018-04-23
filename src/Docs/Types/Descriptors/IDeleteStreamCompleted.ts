export const IDeleteStreamCompleted = `
interface IDeleteStreamCompleted {

  /** DeleteStreamCompleted result */
  result: OperationResult;

  /** DeleteStreamCompleted message */
  message?: (string | null);

  /** DeleteStreamCompleted preparePosition */
  preparePosition?: (number | Long | null);

  /** DeleteStreamCompleted commitPosition */
  commitPosition?: (number | Long | null);
}

`;
