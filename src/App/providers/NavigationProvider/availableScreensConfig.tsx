import { LoginPage } from '@pages/LoginPage/ui/LoginPage';
import { Main } from '@pages/Main';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';

type AvailableScreensConfig = {
  name: string;
  component: any;
}[];

const availableScreensConfig: AvailableScreensConfig = [
  {
    name: 'main',
    component: Main,
  },
  {
    name: 'login',
    component: LoginPage,
  },
  {
    name: 'profile',
    component: ProfilePage,
  },
];

export { availableScreensConfig };

export type { AvailableScreensConfig };
