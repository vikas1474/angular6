import { NgModule } from "@angular/core";
import {LoginRoutingModule} from './login-routing.module';

import {CreateComponent} from './create/create.component';

@NgModule({
    imports:[
        LoginRoutingModule
    ],
    declarations:[
        CreateComponent
    ]
})

export class LoginModule{

}