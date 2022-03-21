import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apiService: ApiService) {}

  getUsers(){
    return this.apiService.get(`/users.json`);
  }
}
