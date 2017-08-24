import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { SobreComponent } from './sobre/sobre.component';
 
const routes: Routes= [
	{ path: '', component: HomeComponent },
    { path: 'pessoa', component: PessoaComponent },
    { path: 'sobre', component: SobreComponent },
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }