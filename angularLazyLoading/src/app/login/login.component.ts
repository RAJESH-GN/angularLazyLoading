import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  urlParam: String;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('Route Sample:' + this.route.snapshot.paramMap.get('id'));
  }

  public goto(id: String) {
    this.router.navigate(['login', id]);
    this.urlParam = id;
  }
}
