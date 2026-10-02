import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SiteFooter } from './shared/site-footer.component';
import { SiteHeader } from './shared/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
