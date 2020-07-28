import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserCreationComponent} from './user-creation/user-creation.component';

const routes: Routes = [
  {
    path: 'create',
    component: UserCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
