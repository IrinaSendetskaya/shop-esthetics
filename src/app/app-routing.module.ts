import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/components/layout.component';


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
  },
  //   children: [
  //     {
  //       path: 'app',
  //       canActivate: [SideswipeNgxFeatureFlagGuard],
  //       data: {
  //         featureFlag: FeaturesEnum.app,
  //         redirectTo: '/page-not-found',
  //       },
  //       children: [
  //         {
  //           path: '',
  //           pathMatch: 'full',
  //           redirectTo: 'overview',
  //         },
  //         {
  //           path: 'ensemble-charts',
  //           component: PredictionComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.prediction,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'history-match-summary',
  //           component: HistoryMatchSummaryComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.historyMatchSummary,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'create-ensemble',
  //           component: CreateEnsembleComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.createNewEnsemble,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'key-events',
  //           component: DevStrategyComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.devStrategy,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'overview',
  //           component: NewOverviewComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.newOverview,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'reservoir-map',
  //           component: ReservoirMapComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.reservoirGridMap,
  //             redirectTo: '/page-not-found',
  //           },
  //           resolve: {
  //             cameraPosition: GridVizCameraPositionResolverService,
  //           },
  //         },
  //         {
  //           path: 'probability-map',
  //           component: ProbabilityMapComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.reservoirGridMap,
  //             redirectTo: '/page-not-found',
  //           },
  //           resolve: {
  //             cameraPosition: GridVizCameraPositionResolverService,
  //           },
  //         },
  //         {
  //           path: 'machine-guided-well-placement-advice',
  //           component: MachineGuidedWellPlacementComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.mlPage,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: 'labs',
  //       canActivate: [SideswipeNgxFeatureFlagGuard],
  //       data: {
  //         featureFlag: FeaturesEnum.labs,
  //         redirectTo: '/page-not-found',
  //       },
  //       children: [
  //         {
  //           path: '',
  //           pathMatch: 'full',
  //           redirectTo: 'overview',
  //         },
  //         {
  //           path: 'videos',
  //           component: VideosComponent,
  //         },
  //         {
  //           path: 'probability-map',
  //           component: ProbabilityMapComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.reservoirGridMap,
  //             redirectTo: '/page-not-found',
  //           },
  //           resolve: {
  //             cameraPosition: GridVizCameraPositionResolverService,
  //           },
  //         },
  //         {
  //           path: 'reservoir-map',
  //           component: ReservoirMapComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.reservoirGridMap,
  //             redirectTo: '/page-not-found',
  //           },
  //           resolve: {
  //             cameraPosition: GridVizCameraPositionResolverService,
  //           },
  //         },
  //         {
  //           path: 'key-events',
  //           component: DevStrategyComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.devStrategy,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'overview',
  //           component: OverviewComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.overview,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'new-overview',
  //           component: NewOverviewComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.newOverview,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'dev-zone',
  //           component: DevZoneComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.devZone,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'dev-awaiting',
  //           component: DevAwaitingComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.ingestionv2,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'default-ensembles',
  //           component: DefaultEnsemblesComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.devZone,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'field-cumulative',
  //           component: HistoryMatchComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.historyMatch,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'well-cumulative',
  //           component: WellSimVsObsComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.wellSimVsObs,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'well-rate-pressure',
  //           component: WellRatePressureComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.wellRatePressure,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'ensemble-charts',
  //           component: PredictionComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.prediction,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'history-match-errors',
  //           component: HistoryMatchErrorsComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.historyMatchErrors,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'history-match-summary',
  //           component: HistoryMatchSummaryComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.historyMatchSummary,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'formations',
  //           component: FlowUnitComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.flowunits,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'create-ensemble',
  //           component: CreateEnsembleComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.createNewEnsemble,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //         {
  //           path: 'machine-guided-well-placement-advice',
  //           component: MachineGuidedWellPlacementComponent,
  //           canActivate: [SideswipeNgxFeatureFlagGuard],
  //           data: {
  //             featureFlag: FeaturesEnum.mlPage,
  //             redirectTo: '/page-not-found',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  //},
  // {
  //   path: 'login',
  //   component: AppComponent,
  // },
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
