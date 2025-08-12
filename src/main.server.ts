import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // <-- CORREGIDO
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config); // <-- CORREGIDO

export default bootstrap;