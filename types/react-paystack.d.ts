declare module 'react-paystack' {
  export interface PaystackProps {
    email: string;
    amount: number;
    publicKey: string;
    text?: string;
    onSuccess: (response: any) => void;
    onClose: () => void;
    currency?: string;
    reference?: string;
    metadata?: any;
    className?: string;
    children?: React.ReactNode;
    plan?: string;
    quantity?: string;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: string;
  }

  export function usePaystackPayment(config: PaystackProps): (onSuccess?: (reference: any) => void, onClose?: () => void) => void;
}
