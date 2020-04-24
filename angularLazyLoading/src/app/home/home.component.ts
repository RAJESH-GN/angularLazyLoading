import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config.service';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ConfigService],
})
export class HomeComponent implements OnInit {
  observable: Observable<User[]>;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.observable = this.configService.getUsers();
  }
}
