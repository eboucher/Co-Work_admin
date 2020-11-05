import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workspace } from '@app/_models';
import { WorkspaceService } from '@app/_services/workspace.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {

  workspaceID: string;
  workspace: Workspace;

  constructor(
    private route: ActivatedRoute, 
    public workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.workspaceID = params.id;
    });
    this.workspaceService.getWorkspaceByID(this.workspaceID).subscribe(e => {
        this.workspace = e
      });
  }

  updateList() {

  }

  submitChanges() {
    
  }

  add() {
    
  }

  changeValue() {
    
  }

}