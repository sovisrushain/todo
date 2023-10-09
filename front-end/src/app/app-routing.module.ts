import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorComponent} from "./error/error.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LogoutComponent} from "./logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard/:name", component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: "todos", component: TodoListComponent, canActivate: [RouteGuardService]},
  {path: "logout", component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
