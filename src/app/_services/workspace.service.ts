import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Workspace } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  getWorkspaceByID(id: string) {
      return this.http.get<Workspace>(`${environment.apiUrl}/workspaces/${id}`)
      .pipe(map(resp => {
        //console.log("resp = " + JSON.stringify(resp));
        return resp;
      }));
  }

  createWorkspace(
    name: string,
    description: string,
    mealTray: boolean,
    WiFi: boolean,
    unlimitedDrinks: boolean,
    city: string,
    laptops: boolean,
    rooms: string,
    mondayOp: string,
    mondayCl: string,
    tuesdayOp: string,
    tuesdayCl: string,
    wednesdayOp: string,
    wednesdayCl: string,
    thursdayOp: string,
    thursdayCl: string,
    fridayOp: string,
    fridayCl: string,
    saturdayOp: string,
    saturdayCl: string,
    sundayOp: string,
    sundayCl: string) 
    {
      return this.http.post<Workspace>(`${environment.apiUrl}/workspaces/`, {
        name,
        description,
        mealTray,
        WiFi,
        unlimitedDrinks,
        city,
        laptops,
        rooms,
        mondayOp,
        mondayCl,
        tuesdayOp,
        tuesdayCl,
        wednesdayOp,
        wednesdayCl,
        thursdayOp,
        thursdayCl,
        fridayOp,
        fridayCl,
        saturdayOp,
        saturdayCl,
        sundayOp,
        sundayCl
      }).pipe(map(resp => {
        console.log(resp);
      }))
  }

  book(): void { }

  deleteBooking(reservationID: string): any{ }

  addToolsToReservation(reservationID: string, toolIDs: string[]): any{ }

  removeToolsInReservation(reservationID: string, toolIDs: string[]): any { }

}