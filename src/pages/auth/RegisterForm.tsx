import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRegister } from '@/lib/useApi';

const formSchema = z.object({
  email: z.string()
    .email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  passwordConfirm: z.string()
    .min(1, 'Confirm password is required'),
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'Passwords do not match',
  path: ['passwordConfirm'], // This ensures the error appears under passwordConfirm
});

type FormSchemaType = z.infer<typeof formSchema>;

interface IRegisterForm {
  navigateToLoginTab: () => void;
}

export const RegisterForm = ({ navigateToLoginTab }: IRegisterForm) => {
  const { toast } = useToast();
  const registerMutation = useRegister();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  useEffect(() => {
    form.reset();
  }, [form]);

  const onSubmit = (values: FormSchemaType) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    registerMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Registration",
          description: 'You have registered successfully.'
        });
        navigateToLoginTab();
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;

        toast({
          variant: "destructive",
          title: `${axiosError.message}`,
          description: `Error: ${axiosError?.response?.data?.message}`
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirm</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password Confirm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full mt-2"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending && <Loader2 className="animate-spin" />}
          Register
        </Button>
      </form>
    </Form>
  );
};
