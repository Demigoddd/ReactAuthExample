import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Profile: React.FC = () => {
  return (
    <>
      <ThemeSwitcher classNames="flex justify-end" />

      <div className="flex justify-center">
        <Card className="w-[450px]">
          <p className="my-2 text-2xl text-center">Profile</p>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" disabled />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full'>Sign Out</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
