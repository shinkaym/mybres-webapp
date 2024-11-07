import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChampionshipComponent } from './pages/championship/championship.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GroupComponent } from './pages/group/group.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { ChampionshipDetailComponent } from './pages/championship-detail/championship-detail.component';
import { NavbarLayoutComponent } from './layouts/navbar-layout/navbar-layout.component';
import { UserLayoutComponent } from './layouts/sub-layouts/user-layout/user-layout.component';
import { ChampionshipLayoutComponent } from './layouts/sub-layouts/championship-layout/championship-layout.component';
import { PreviousLayoutComponent } from './layouts/previous-layout/previous-layout.component';

export const routes: Routes = [
  { path: '', component: IntroComponent, title: 'Trang Intro' },
  {
    path: '',
    component: PreviousLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Đăng nhập' },
      { path: 'register', component: RegisterComponent, title: 'Đăng ký' },
      { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Quên mật khẩu' },
      {
        path: 'championship/detail/:slug',
        component: ChampionshipDetailComponent,
        title: 'Chi tiết giải đấu',
      },
    ],
  },
  {
    path: '',
    component: NavbarLayoutComponent,
    children: [
      {
        path: 'championship/:type',
        component: ChampionshipLayoutComponent,
        children: [{ path: '', component: ChampionshipComponent, title: 'Các giải đấu' }],
      },
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: 'profile', component: ProfileComponent, title: 'Trang cá nhân' },
          { path: 'activity', component: ActivityComponent, title: 'Hoạt động' },
          { path: 'group', component: GroupComponent, title: 'Nhóm' },
          { path: 'partner', component: PartnerComponent, title: 'Đồng đội' },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
