import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'BDT') {
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);
  
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(absAmount);
  
  return isNegative ? `- BDT ${formattedNumber}` : `BDT ${formattedNumber}`;
}

export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
