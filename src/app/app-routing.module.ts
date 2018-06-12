import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([      
      //{ path: 'notfound', component: NotFoundComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { 
  
}
