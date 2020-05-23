import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/components/layout.component';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './features/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: '',
    // canActivate: [UserAuthenticatedGuard],
    // canActivateChild: [UserAuthenticatedGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'app',
        //canActivate: [FlagGuard],
        data: {
         // featureFlag: FeaturesEnum.app,
          redirectTo: '/page-not-found',
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/about',
          },
          {
            path: 'about',
            component: AboutUsComponent,
          //  canActivate: [FlagGuard],
            data: {
              //featureFlag: FeaturesEnum.aboutUs,
              redirectTo: '/page-not-found',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: AppComponent,
  },
  // {
  //   path: 'savelogininfo',
  //   component: SaveLoginInfoComponent,
  // },
  // {path: 'logoutcallback', component: LogoutCallBackComponent},
  // {
  //   path: 'security-error',
  //   component: SecurityErrorComponent,
  // },
  // {
  //   path: 'page-not-found',
  //   component: PageNotFoundComponent,
  // },
  // {
  //   path: 'error',
  //   component: ErrorComponent,
  // },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
