import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.services'; 
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute,Params} from '@angular/router'; /* nuevo  */


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService, UploadService]
})

export class CreateComponent implements OnInit {

  
  public title:string;
  public project: Project;
  public status!: string;   
  public save_project: any; 
  public filesToUpload!: Array<File>; 
  public url:string; /* nuevo  */

  constructor(
    private _projectService : ProjectService,
    private _uploadService: UploadService,
	private _route: ActivatedRoute,
	private _router: Router
  ) {
    this.title = "Create Project";
    this.project = new Project('','','','',2021,'','');
    this.url = Global.url;
   }

  ngOnInit(){
  }

  onSubmit(form: any){
		
		// Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe(
			response => {
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload_image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_project = result.project;

							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_project = response.project;
						this.status = 'success';
						form.reset();
					}
					
				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}



}
