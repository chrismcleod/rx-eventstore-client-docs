export const ITransactionStart = `
interface ITransactionStart {

  /** TransactionStart eventStreamId */
  eventStreamId: string;

  /** TransactionStart expectedVersion */
  expectedVersion: (number | Long);

  /** TransactionStart requireMaster */
  requireMaster: boolean;
}

`;
