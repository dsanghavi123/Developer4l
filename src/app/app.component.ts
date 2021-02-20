import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 id = '4d79041e-f25f-421d-9e5f-3462459b9934';

constructor ( private router: Router) {

}
ngOnInit() {
  this.router.navigate(['/main/',this.id]);
 }

}
