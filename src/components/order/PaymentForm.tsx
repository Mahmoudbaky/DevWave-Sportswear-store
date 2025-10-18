import { Input } from "@/components/ui/input";

interface PaymentFormProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

const PaymentForm = ({
  paymentMethod,
  onPaymentMethodChange,
}: PaymentFormProps) => {
  const handlePaymentMethodChange = (method: string) => {
    onPaymentMethodChange(method);
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
        2. Payment Method
      </h2>
      <div className="space-y-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-slate-300 dark:border-slate-700 p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
            <Input
              checked={paymentMethod === "CashOnDelivery"}
              className="form-radio h-5 w-5 border-slate-400 dark:border-slate-600 bg-transparent text-primary"
              name="payment-method"
              type="radio"
              onChange={() => handlePaymentMethodChange("CashOnDelivery")}
            />
            <span className="text-sm font-medium">Cash on delivery</span>
          </label>
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-slate-300 dark:border-slate-700 p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
            <Input
              checked={paymentMethod === "Stripe"}
              className="form-radio h-5 w-5 border-slate-400 dark:border-slate-600 bg-transparent text-primary"
              name="payment-method"
              type="radio"
              onChange={() => handlePaymentMethodChange("Stripe")}
            />
            <span className="text-sm font-medium">Stripe</span>
          </label>
        </div>
        {paymentMethod === "Stripe" && (
          <>
            <div className="grid grid-cols-1 gap-4 pt-4">
              <label className="block">
                <span className="text-sm font-medium">Card Number</span>
                <Input
                  className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Expiration Date</span>
                <Input
                  className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
                  placeholder="MM/YY"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">CVV</span>
                <Input
                  className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
                  placeholder="123"
                  type="text"
                />
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
