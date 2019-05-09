import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateComponent} from './create/create.component';

const loginRoutes:Routes=[{
    path:'',component:CreateComponent
}]

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule{}
