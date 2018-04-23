export const ITransactionCommit = `
interface ITransactionCommit {

  /** TransactionCommit transactionId */
  transactionId: (number | Long);

  /** TransactionCommit requireMaster */
  requireMaster: boolean;
}

`;
