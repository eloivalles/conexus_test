import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public fetchUserInfo(): UserInfo[] {
    // Simulates GET call to endpoint
    return [
      {
        id: '111',
        name: 'test patient',
      },
    ];
  }
}
