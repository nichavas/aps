import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListItemCreateComponent } from './list-item-create/list-item-create.component';
import { ListItemsComponent } from './list-items/list-items.component';

const routes: Routes = [
	{ path: '', component: ListItemsComponent },
	{ path: 'create', component: ListItemCreateComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ ListItemCreateComponent,ListItemsComponent ];