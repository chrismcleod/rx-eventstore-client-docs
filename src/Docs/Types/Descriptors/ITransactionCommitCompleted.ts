export const ITransactionCommitCompleted = `
interface ITransactionCommitCompleted {

  /** TransactionCommitCompleted transactionId */
  transactionId: (number | Long);

  /** TransactionCommitCompleted result */
  result: OperationResult;

  /** TransactionCommitCompleted message */
  message?: (string | null);

  /** TransactionCommitCompleted firstEventNumber */
  firstEventNumber: (number | Long);

  /** TransactionCommitCompleted lastEventNumber */
  lastEventNumber: (number | Long);

  /** TransactionCommitCompleted preparePosition */
  preparePosition?: (number | Long | null);

  /** TransactionCommitCompleted commitPosition */
  commitPosition?: (number | Long | null);
}

`;
