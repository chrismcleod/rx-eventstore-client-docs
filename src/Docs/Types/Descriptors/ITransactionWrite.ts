export const ITransactionWrite = `
interface ITransactionWrite {

  /** TransactionWrite transactionId */
  transactionId: (number | Long);

  /** TransactionWrite events */
  events?: (INewEvent[] | null);

  /** TransactionWrite requireMaster */
  requireMaster: boolean;
}

`;
