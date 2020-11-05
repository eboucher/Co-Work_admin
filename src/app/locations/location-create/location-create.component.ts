import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/_services';
import { WorkspaceService } from '@app/_services/workspace.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  mealTray = false;
  WiFi = false;
  unlimitedDrinks = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private workspaceService: WorkspaceService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          mealTray: ['', Validators.required],
          WiFi: ['', Validators.required],
          unlimitedDrinks: ['', Validators.required],
          city: ['', Validators.required],
          laptops: ['', Validators.required],
          rooms: ['', Validators.required],
          mondayOp: ['', Validators.required],
          mondayCl: ['', Validators.required],
          tuesdayOp: ['', Validators.required],
          tuesdayCl: ['', Validators.required],
          wednesdayOp: ['', Validators.required],
          wednesdayCl: ['', Validators.required],
          thursdayOp: ['', Validators.required],
          thursdayCl: ['', Validators.required],
          fridayOp: ['', Validators.required],
          fridayCl: ['', Validators.required],
          saturdayOp: ['', Validators.required],
          saturdayCl: ['', Validators.required],
          sundayOp: ['', Validators.required],
          sundayCl: ['', Validators.required]
      });
  }

  convertToBool(txt: string) {
    if(txt == "true")
      return true;
    else
      return false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;
      // reset alerts on submit
      this.alertService.clear();

      this.loading = true;
      const rooms = [];
      this.workspaceService.createWorkspace(
        this.f.name.value, 
        this.f.description.value,
        this.convertToBool(this.f.mealTray.value),
        this.convertToBool(this.f.WiFi.value),
        this.convertToBool(this.f.unlimitedDrinks.value),
        this.f.city.value,
        this.convertToBool(this.f.laptops.value),
        rooms,
        this.f.mondayOp.value,
        this.f.mondayCl.value,
        this.f.tuesdayOp.value,
        this.f.tuesdayCl.value,
        this.f.wednesdayOp.value,
        this.f.wednesdayCl.value,
        this.f.thursdayOp.value,
        this.f.thursdayCl.value,
        this.f.fridayOp.value,
        this.f.fridayCl.value,
        this.f.saturdayOp.value,
        this.f.saturdayCl.value,
        this.f.sundayOp.value,
        this.f.sundayCl.value,
        )
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
