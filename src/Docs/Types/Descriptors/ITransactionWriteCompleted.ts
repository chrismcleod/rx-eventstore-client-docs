export const ITransactionWriteCompleted = `
interface ITransactionWriteCompleted {

  /** TransactionWriteCompleted transactionId */
  transactionId: (number | Long);

  /** TransactionWriteCompleted result */
  result: OperationResult;

  /** TransactionWriteCompleted message */
  message?: (string | null);
}

`;
