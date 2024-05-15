import { LoginPage } from '@pages/LoginPage/ui/LoginPage';
import { Main } from '@pages/Main';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage/ui/ForgotPasswordPage';
import { RegisterPage } from '@pages/RegisterPage/ui/RegisterPage';
import { RegisterVerificationCodePage } from '@pages/RegisterVerificationCodePage/ui/RegisterVerificationCodePage';
import { LogbookPage } from '@pages/LogbookPage/ui/LogbookPage';
import { User } from '../UserProvider/model/UserSlice';

type AvailableScreensConfig = (user: User | null) => {
  name: string;
  component: any;
}[];

const availableScreensConfig: AvailableScreensConfig = (user) => {
  const baseRouters = [
{
      name: 'login',
      component: LoginPage,
},

{
  name: 'verificationCode',
  component: RegisterVerificationCodePage,
},

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
{
  'name': 'logbookPage',
  component: LogbookPage,
},
];

return baseRouters;
};

export { availableScreensConfig };

export type { AvailableScreensConfig };
