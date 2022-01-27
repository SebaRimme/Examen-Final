import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./pages/login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule),

  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule),

  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./pages/registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule),

  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),

  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./pages/inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule),

  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule),

  },
  {
    path: 'qr-lector',
    loadChildren: () => import('./pages/qr-lector/qr-lector.module').then( m => m.QrLectorPageModule),

  },
  {
    path: 'qr-generar',
    loadChildren: () => import('./pages/qr-generar/qr-generar.module').then( m => m.QrGenerarPageModule),

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
