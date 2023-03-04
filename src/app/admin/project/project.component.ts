import { Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
import { CheckBoxPrinterComponent } from '../check-box-printer/check-box-printer.component';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input("currentProject") project: Project | any;
  @Input("recordIndex") i: number | any;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  hideDetails: boolean = false;

  constructor(public projectService: ProjectsService) { }

  ngOnChanges(simpleChanges:SimpleChange | any)
  {
    console.info("-----NgOnChange Called!!");

    for(let propName in simpleChanges){
      let chng = simpleChanges[propName] ;
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}:currentValue=${cur},
      previousValue=${prev}`);
    }

  }

  ngOnInit(): void {
    this.projectService.MyObservable.subscribe((hide: any) => {
      this.hideDetails = hide;
    });
  }

  onEditClick(event: any, i: number) {
    this.editClick.emit({ event, i });
  }

  onDeleteClick(event: any, i: number) {
    this.deleteClick.emit({ event, i });
  }

  @ContentChild("selectionBox") selectionBox:
    CheckBoxPrinterComponent | any = null;

  isAllCheckedChange(b: boolean) {
    if (b) {
      this.selectionBox.check();
    }
    else {
      this.selectionBox.unCheck();
    }
  }

}
