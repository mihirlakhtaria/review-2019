import { NgModule } from '@angular/core';
import { SearchEmployeeComponent, ListSessionsComponent, SessionDetailsComponent} from './components/index';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [
    SearchEmployeeComponent,
    ListSessionsComponent,
    SessionDetailsComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
