import { Injectable } from '@angular/core';
import { mockNotesByPatient } from '@mocks/notes.mock';
import { BehaviorSubject, delay, firstValueFrom } from 'rxjs';
import { Notes, UserInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public fetchUserInfo(): UserInfo[] {
    // Simulates GET call to endpoint
    return [
      {
        id: '111',
        name: 'test patient',
      },
    ];
  }

  public async getPatientNotes(patientId: string): Promise<Notes[] | null> {
    const patientData = mockNotesByPatient.find((list) => list.patientId === patientId);
    const stream = new BehaviorSubject<Notes[] | null>(patientData ? patientData.notes : null).pipe(
      delay(2000),
    );
    return firstValueFrom(stream);
  }
}
