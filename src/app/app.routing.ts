 import { ModuleWithProviders} from '@angular/core';
 import {Routes, RouterModule} from '@angular/router';

//------- Imports from Module---- //

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

//------------Routes------------//

const appRoutes: Routes = [
    {path:'', component: AboutmeComponent},
    {path:'about_me', component: AboutmeComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'create', component: CreateComponent},
    {path:'contact', component: ContactComponent},
    {path:'project/:id',component: DetailComponent},
    {path:'edit_project/:id', component: EditComponent},
    {path:'**', component: ErrorComponent},
];

//---------Export--------------//

export const appRoutingProviders: any[] =  [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


