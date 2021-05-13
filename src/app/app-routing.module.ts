import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'computers',
    loadChildren: () => import('./pages/computers/computers.module').then(m => m.ComputersPageModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./pages/laptop/laptop.module').then(m => m.LaptopPageModule)
  },
  {
    path: 'parts',
    loadChildren: () => import('./pages/parts/parts.module').then(m => m.PartsPageModule)
  },
  {
    path: 'printer',
    loadChildren: () => import('./pages/printer/printer.module').then(m => m.PrinterPageModule)
  },
  {
    path: 'printer-parts',
    loadChildren: () => import('./pages/printer-parts/printer-parts.module').then(m => m.PrinterPartsPageModule)
  },
  {
    path: 'xerox',
    loadChildren: () => import('./pages/xerox/xerox.module').then(m => m.XeroxPageModule)
  },
  {
    path: 'photgraphy',
    loadChildren: () => import('./pages/photgraphy/photgraphy.module').then(m => m.PhotgraphyPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'computer-details/:id',
    loadChildren: () => import('./pages/computer-details/computer-details.module').then(m => m.ComputerDetailsPageModule)
  },
  {
    path: 'printer-details/:id',
    loadChildren: () => import('./pages/printer-details/printer-details.module').then(m => m.PrinterDetailsPageModule)
  },
  {
    path: 'laptop-details/:id',
    loadChildren: () => import('./pages/laptop-details/laptop-details.module').then(m => m.LaptopDetailsPageModule)
  },
  {
    path: 'parts-details/:id',
    loadChildren: () => import('./pages/parts-details/parts-details.module').then(m => m.PartsDetailsPageModule)
  },
  {
    path: 'printer-parts-details/:id',
    loadChildren: () => import('./pages/printer-parts-details/printer-parts-details.module').then(m => m.PrinterPartsDetailsPageModule)
  },
  {
    path: 'xerox-details/:id',
    loadChildren: () => import('./pages/xerox-details/xerox-details.module').then( m => m.XeroxDetailsPageModule)
  },
  {
    path: 'photo-details/:id',
    loadChildren: () => import('./pages/photo-details/photo-details.module').then( m => m.PhotoDetailsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'service-details/:id',
    loadChildren: () => import('./pages/service-details/service-details.module').then( m => m.ServiceDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
