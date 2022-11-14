import { ContentPageComponent } from './Pages/Content-Page/Content-Page.component';
import { Report_PageComponent } from './Pages/Report_Page/Report_Page.component'
import { AMB_PageComponent } from './Pages/AMB_Page/AMB_Page.component'
import { Main_PageComponent } from './Pages/Main_Page/Main_Page.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'index', component: Main_PageComponent },
  { path: 'ABM_Page/:id', component: AMB_PageComponent },
  { path: 'Contents', component: ContentPageComponent },
  { path: 'Reporteria_Page', component: Report_PageComponent },
  { path: '**', component: Main_PageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
