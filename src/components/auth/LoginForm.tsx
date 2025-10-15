import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { requestOtp, verifyOtp, resetOtpState } from "@/redux/slices/authSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // LOCAL STATE - Manages form inputs
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  // REDUX HOOKS
  // useDispatch: Get the dispatch function to trigger actions
  const dispatch = useDispatch<AppDispatch>();

  // useSelector: Read data from Redux store
  // This component will re-render when these values change
  const { loading, error, otpSent, pendingEmail, otpExpiresAt } = useSelector(
    (state: RootState) => state.auth
  );

  // Show error toast when error changes
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // STEP 1: Handle email submission to request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Dispatch the async thunk
    // unwrap() allows us to handle the result with try/catch
    try {
      await dispatch(requestOtp(email)).unwrap();
      toast.success("OTP sent to your email!");
    } catch (err) {
      // Error is already in Redux state and shown via useEffect
      console.error("Failed to send OTP:", err);
    }
  };

  // STEP 2: Handle OTP verification
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      await dispatch(verifyOtp({ email: pendingEmail || email, otp })).unwrap();
      toast.success("Login successful!");
      navigate("/");
      // Navigation will happen via redirect or route protection
    } catch (err) {
      console.error("Failed to verify OTP:", err);
    }
  };

  // Handle going back to email input
  const handleBackToEmail = () => {
    dispatch(resetOtpState());
    setOtp("");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {otpSent ? "Verify OTP" : "Login to your account"}
          </CardTitle>
          <CardDescription>
            {otpSent
              ? `Enter the 6-digit code sent to ${pendingEmail}`
              : "Enter your email to receive a one-time password"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* CONDITIONAL RENDERING: Show different forms based on otpSent state */}
          {!otpSent ? (
            // EMAIL FORM - Step 1
            <form onSubmit={handleRequestOtp}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Sending..." : "Send OTP"}
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline">
                      Sign up
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          ) : (
            // OTP FORM - Step 2
            <form onSubmit={handleVerifyOtp}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="otp">One-Time Password</FieldLabel>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="000000"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    disabled={loading}
                    required
                    className="text-center text-2xl tracking-widest"
                  />
                  {otpExpiresAt && (
                    <FieldDescription>
                      Code expires at{" "}
                      {new Date(otpExpiresAt).toLocaleTimeString()}
                    </FieldDescription>
                  )}
                </Field>
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Verifying..." : "Verify & Login"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBackToEmail}
                    disabled={loading}
                    className="w-full"
                  >
                    Back to Email
                  </Button>
                  <FieldDescription className="text-center">
                    Didn&apos;t receive the code?{" "}
                    <button
                      type="button"
                      onClick={handleRequestOtp}
                      disabled={loading}
                      className="underline"
                    >
                      Resend
                    </button>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
