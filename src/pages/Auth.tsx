import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const Auth: React.FC = () => {
  return (
    <>
      <ThemeSwitcher classNames="flex justify-end" />

      <div className="flex justify-center">
        <Tabs defaultValue="login" className="w-[450px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <p className="my-2 text-2xl text-center">Login</p>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="Password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <p className="my-2 text-2xl text-center">Register</p>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email" >Email</Label>
                  <Input id="email" placeholder="Email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="New password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password-check">Re-enter password</Label>
                  <Input id="password-check" placeholder="Check Password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
