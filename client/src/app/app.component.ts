import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core/';
import { select } from 'ng2-redux';

import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'app';
    @select('alertMsg') error: string;
    constructor(private authService: AuthService){

    }
}
