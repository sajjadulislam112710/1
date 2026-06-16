export type WalletCategory = 'Physical' | 'Digital' | 'Bank' | 'Crypto' | 'Receivable' | 'Liability' | 'Cards';

export interface Wallet {
  id: string;
  name: string;
  balance: number;
  category: WalletCategory;
  color: string;
  icon: string;
  createdAt: number;
}

export interface Fund {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  category: string;
  color: string;
  deadline?: string;
  createdAt: number;
}

export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  linkedFundId?: string;
  linkedWalletId?: string;
  status: 'active' | 'completed' | 'on-hold';
  createdAt: number;
}

export type TransactionType = 'income' | 'expense' | 'transfer' | 'receivable' | 'liability';

export interface PayoutInstallment {
  amount: number;
  date: number;
  walletId: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  category: string;
  walletId?: string; // The primary wallet (source for expense/transfer, target for income)
  fromFundId?: string; // Source fund for transfers
  toWalletId?: string; // For transfers destination wallet, or initial wallet for receivable/liability
  fundId?: string; // Optional link to a fund or destination fund for transfers
  note: string;
  purpose?: string;
  receivableSubtype?: 'income' | 'lended_money' | 'others';
  date: number;
  paidAmount?: number; // Accumulated payoff/repayment tracker
  payouts?: PayoutInstallment[]; // Individual collection or payback repayments
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string;
  color: string;
}

export interface UserPreferences {
  currency: string;
  theme: 'light' | 'dark';
}
