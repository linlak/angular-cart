import { Routes } from '@angular/router';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
{
path: '',
children: [
{
path: '',
loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule)
},
{
path: 'products',
loadChildren: () => import('./layouts/product/product.module').then(mod => mod.ProductModule)
},
{
path: 'users',
loadChildren: () => import('./layouts/user/user.module').then(mod => mod.UserModule)
},
{
path: 'task-board',
loadChildren: () => import('./layouts/task-board/task-board.module').then(mod => mod.TaskBoardModule)
}
]
},
{ path: 'no-access', component: NoAccessComponent },
{ path: '**', component: PageNotFoundComponent }
];
