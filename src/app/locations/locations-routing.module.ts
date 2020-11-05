import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationListComponent } from './location-list';
import { LocationDetailComponent } from './location-detail';
import { LocationEditComponent } from './location-edit';
import { LocationCreateComponent } from './location-create';

const locationsRoutes: Routes = [
  { path: 'locations',  component: LocationListComponent, data: { animation: 'locations' } },
  { path: 'location/:id', component: LocationDetailComponent, data: { animation: 'location' } },
  { path: 'location/:id/edit', component: LocationEditComponent, data: { animation: 'location-edit' } },
  { path: 'create-location', component: LocationCreateComponent, data: { animation: 'location-create' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(locationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationsRoutingModule { }