import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.services';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',     
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService]
})


export class DetailComponent implements OnInit {
  
  public url: string;
  public project!: Project;
  public confirm: boolean;
  
  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProject(id);

    });
  }

  getProject(id: any){   
  	this._projectService.getProject(id).subscribe(
  		response => {
        console.log(this.project);
  			this.project = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  setConfirm(confirm: any){
    this.confirm = confirm;
  }

  deleteProject(id: any){
  	this._projectService.deleteProject(id).subscribe(
  		response => {
  			if(response.project){
  				this._router.navigate(['/projects']);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }



}
