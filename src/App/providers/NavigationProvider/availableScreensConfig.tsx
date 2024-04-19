import { LoginPage } from '@pages/LoginPage/ui/LoginPage';
import { Main } from '@pages/Main';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage/ui/ForgotPasswordPage';
import { RegisterPage } from '@pages/RegisterPage/ui/RegisterPage';
import { User } from '../UserProvider/model/UserSlice';

type AvailableScreensConfig = (user: User | null) => {
  name: string;
  component: any;
}[];

const availableScreensConfig: AvailableScreensConfig = (user) => {
  const baseRouters = [
{
  name: 'main',
  component: Main,
},
{
  name: 'register',
  component: RegisterPage,
},
{
  name: 'profile',
  component: ProfilePage,
},
{
  'name': 'forgotPassword',
  component: ForgotPasswordPage,
},
];

  if (!user) {
    baseRouters.unshift(
          {
      name: 'login',
      component: LoginPage,
    },
    );
  }

  return baseRouters;
};

export { availableScreensConfig };

export type { AvailableScreensConfig };
