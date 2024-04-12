import { LoginPage } from '@pages/LoginPage/ui/LoginPage';
import { Main } from '@pages/Main';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
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
  name: 'profile',
  component: ProfilePage,
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
