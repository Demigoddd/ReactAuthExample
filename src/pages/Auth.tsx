import { useState } from 'react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { LoginForm } from '@/pages/auth/LoginForm';
import { RegisterForm } from '@/pages/auth/RegisterForm';

export const Auth: React.FC = () => {
  const [tab, setTab] = useState('login');

  return (
    <>
      <ThemeSwitcher classNames="flex justify-end" />

      <div className="flex justify-center">
        <Tabs value={tab} onValueChange={(value: string) => setTab(value)} className="w-[450px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <p className="my-2 text-2xl text-center">Login</p>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <p className="my-2 text-2xl text-center">Register</p>
              <CardContent>
                <RegisterForm navigateToLoginTab={() => setTab('login')} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
