import { Input } from "@/components/ui/input";
import type { ShippingAddress } from "@/types";

interface AddressFormProps {
  shippingAddress: ShippingAddress;
  onAddressChange: (address: ShippingAddress) => void;
}

const AddressForm = ({
  shippingAddress,
  onAddressChange,
}: AddressFormProps) => {
  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    onAddressChange({
      ...shippingAddress,
      [field]: value,
    });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
        1. Shipping Information
      </h2>
      <div className="space-y-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Full Name</span>
            <Input
              className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
              type="text"
              value={shippingAddress.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Address</span>
            <Input
              className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
              type="text"
              value={shippingAddress.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your address"
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-sm font-medium">City</span>
            <Input
              className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
              type="text"
              value={shippingAddress.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter your city"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Zip Code</span>
            <Input
              className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
              type="text"
              value={shippingAddress.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="Enter zip code"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Phone Number</span>
            <Input
              className="mt-1 block w-full rounded border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary"
              type="tel"
              value={shippingAddress.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="Enter phone number"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
