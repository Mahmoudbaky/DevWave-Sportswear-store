import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  categorySchema,
  type CategoryForm,
} from "@/validators/categoryValidators";
import categoriesService from "@/services/categoriesServices";

const CategoryFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const form = useForm<CategoryForm>({
    resolver: zodResolver(categorySchema) as Resolver<CategoryForm>,
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { reset, formState } = form;

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const res = await categoriesService.getCategory(id);
        const c = res.data;

        reset({
          name: c.name ?? "",
          description: (c as any).description ?? "",
        });
      } catch (error) {
        // handle if needed
      }
    };

    fetchCategory();
  }, [id, reset]);

  const onSubmit: SubmitHandler<CategoryForm> = async (values) => {
    try {
      const payload = {
        name: values.name,
        description: values.description,
      };

      if (id) {
        await categoriesService.updateCategory(id, payload);
      } else {
        await categoriesService.createCategory(payload);
      }

      navigate("/admin/categories");
    } catch (err) {
      // handle error if needed
    }
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold  dark:text-background-light">
            {id ? "Edit Category" : "Create Category"}
          </h2>
          <p className="/60 dark:text-background-light/60">
            {id
              ? "Update category details below."
              : "Create a new category by filling out the form below."}
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(-1)} variant="outline" size="sm">
            Cancel
          </Button>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Button
              className="cursor-pointer"
              type="submit"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting
                ? id
                  ? "Updating..."
                  : "Saving..."
                : id
                ? "Update Category"
                : "Create Category"}
            </Button>
            <Button variant="ghost" onClick={() => navigate(-1)} type="button">
              Back
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default CategoryFormPage;
