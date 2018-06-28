import { Routes } from '@angular/router';

import { ResultAppComponent } from './result-app/result-app.component';
import { AllComponent } from './all/all.component';



export const AppRoutes: Routes = [
    { path: 'LiveScores', component: ResultAppComponent },
    { path: '', component: AllComponent },
];
