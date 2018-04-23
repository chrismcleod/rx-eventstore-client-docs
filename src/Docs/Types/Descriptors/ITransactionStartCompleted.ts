export const ITransactionStartCompleted = `
interface ITransactionStartCompleted {

  /** TransactionStartCompleted transactionId */
  transactionId: (number | Long);

  /** TransactionStartCompleted result */
  result: OperationResult;

  /** TransactionStartCompleted message */
  message?: (string | null);
}

`;
