import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public recipeWebsite = {title: "Recipe Website", photoLocation: "./assets/images/recipe-website.PNG"};
  public askMilwaukee = {title: "Ask Milwaukee - Alexa Skill", photoLocation: "./assets/images/ask-milwaukee.png"};
  public androidApp = {title: "Android Recycling Application", photoLocation: "./assets/images/Reuse_Repair_Android_App.png"}; 
  public menuApp = {title: "User Interface Design", photoLocation: "./assets/images/Menu-App.png"}; 
  public photoApp = {title: "Photo Storage Website", photoLocation: "./assets/images/web-dev-screenshot.png"};
  public rogo = {title: "Rogo Puzzle - Optimization Project", photoLocation: "./assets/images/rogo.png"}; 

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPhotoModal(photoData) {
    const modalRef = this.modalService.open(PhotoModalComponent, { size: 'lg' });

    modalRef.componentInstance.title = photoData.title;
    modalRef.componentInstance.photoLocation = photoData.photoLocation;
  }

}
