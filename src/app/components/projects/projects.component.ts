import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.services';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})

export class ProjectsComponent implements OnInit {

  // se uso '!' ya que TS no reconoce  una declaracion fuera del constructor , por ser una version mas actulizada que la de VSC
  public projects!:Project[];
  public url: string;

  constructor( 

    private _projectService : ProjectService

  ) {
    this.url = Global.url;
  }
 
  ngOnInit(){
    this.getProjects();
  }

  // GET PROJECTS TO FRONT END 
  getProjects(){
  	this._projectService.getProjects().subscribe(
  		response => {
        console.log(response);
  			if(response.project){
  				this.projects = response.project;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
