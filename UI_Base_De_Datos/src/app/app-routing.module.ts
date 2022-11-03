import { Report_PageComponent } from './Pages/Report_Page/Report_Page.component'
import { AMB_PageComponent } from './Pages/AMB_Page/AMB_Page.component'
import { Main_PageComponent } from './Pages/Main_Page/Main_Page.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'index', component: Main_PageComponent },
  { path: 'ABM_Page', component: AMB_PageComponent },
  { path: 'Reporteria_Page', component: Report_PageComponent },
  { path: '**', component: Main_PageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
