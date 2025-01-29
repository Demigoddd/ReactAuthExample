import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useAuth } from '@/lib/authProvider';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProfile } from '@/lib/useApi';

export const Profile: React.FC = () => {
  const { logout } = useAuth();
  const { data, isLoading, isError, error } = useProfile();

  const exit = () => {
    logout();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ThemeSwitcher classNames="flex justify-end" />

      <div className="flex justify-center">
        <Card className="w-[450px]">
          <p className="my-2 text-2xl text-center">Profile</p>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={data.email} disabled />
            </div>
            <div className="space-y-1">
              <Label htmlFor="id">Id</Label>
              <Input id="id" value={data.id} disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full' onClick={exit}>Sign Out</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
