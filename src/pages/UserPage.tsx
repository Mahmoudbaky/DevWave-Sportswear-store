import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userServices from "@/services/userServices";
import { updateUserProfileValidationSchema } from "@/validators/userValidators";
import type { z } from "zod";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type UpdateUserProfile = z.infer<typeof updateUserProfileValidationSchema>;

const UserPage = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<UpdateUserProfile>({
    resolver: zodResolver(updateUserProfileValidationSchema),
    defaultValues: {
      userName: "",
      email: "",
      userImage: "",
    },
  });

  const { register, handleSubmit, reset, watch, formState } = form;

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const data = await userServices.getUser();
        console.log("Fetched user data:", data);
        if (!mounted) return;
        // map API fields to form fields; adapt if backend shape differs
        reset({
          userName: data?.data.userName || "",
          email: data?.data.email || "",
          userImage: data?.data.userImage || "",
        });
      } catch (err: any) {
        console.error(err);
        setServerError(err?.message || "Failed to load profile");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [reset]);

  const onSubmit = async (values: UpdateUserProfile) => {
    setServerError(null);
    setLoading(true);
    try {
      // Send only allowed fields to the API
      const payload = {
        userName: values.userName,
        email: values.email,
        userImage: values.userImage,
      };
      const res = await userServices.updateUser(payload);
      // reflect returned data if any
      reset({
        userName: res?.userName || res?.name || values.userName,
        email: res?.email || values.email,
        userImage: res?.userImage || values.userImage || "",
      });
      // optionally show a toast here
    } catch (err: any) {
      console.error(err);
      setServerError(
        err?.response?.data?.message || err?.message || "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 p-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        {/** Header */}
        <div className="flex p-4 @container border-b border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4 items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24"
                data-alt="User avatar"
                // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxAwMhY8wuLokxpDkIcw0VO1UkdX2zhhvo08X_jkGZ1wLY7Kqov2d-sQiV7LaPcFuvi2_rx8BSYWFRW10t_Si028m0qlmc-hwwgx7HXWmY4QfsmLcqlevJQRLVtZQgg9C72AsPAen_ErFvKXHW_uwperwZT5FuTPwQb40XP5wx5dm8DaTFLhMAC5LUUmN9_mU2hqSH5mezTKThVpPf7qn8SejbiQVcX_n5-mnI-RsQer6GBLj3LdlOF6WWnKsTUa_KMuZBGRye-og");'
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
                  {watch("userName") || "Your name"}
                </p>
                <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400">
                  {watch("email") || "your@email.com"}
                </p>
                {/* <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400">
                  {watch("joinedAt")
                    ? `Joined on ${new Date(
                        watch("joinedAt") as string
                      ).toLocaleDateString()}`
                    : ""}
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/** Form */}
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
          Personal Information
        </h2>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input placeholder="User name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <label className="flex flex-col">
                <p className="text-base font-medium leading-normal pb-2 text-gray-900 dark:text-white">
                  Phone Number
                </p>
                <input
                  {...register("phone")}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                  disabled={formState.isSubmitting}
                />
              </label> */}
            </div>
            {serverError ? (
              <p className="text-sm text-red-600">{serverError}</p>
            ) : null}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                onClick={() => reset()}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Cancel</span>
              </Button>
              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-60"
              >
                <span className="truncate">
                  {formState.isSubmitting ? "Saving..." : "Save Changes"}
                </span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default UserPage;
