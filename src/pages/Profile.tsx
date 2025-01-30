import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useAuth } from '@/lib/authProvider';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProfile } from '@/lib/useApi';

export const Profile: React.FC = () => {
  const { logout } = useAuth();
  const { data, isLoading, isError, error } = useProfile();

  return (
    <>
      <ThemeSwitcher classNames="flex justify-end" />

      <div className="flex justify-center">
        <Card className="w-[450px]">
          <p className="my-2 text-2xl text-center">Profile</p>
          <CardContent className="space-y-2">
            {isError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>error</AlertTitle>
                <AlertDescription>
                  Error: {error.message}
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              {isLoading ? (
                <Skeleton className="w-full h-9" />
              ) : (
                <Input id="email" value={data?.email || ''} disabled />
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="id">Id</Label>
              {isLoading ? (
                <Skeleton className="w-full h-9" />
              ) : (
                <Input id="id" value={data?.id || ''} disabled />
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={logout}
              disabled={isLoading}
            >
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
