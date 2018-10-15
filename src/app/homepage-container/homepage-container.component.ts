import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/HeaderService';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css']
})
export class HomepageContainerComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.emitChange('Private ShowCase', 'homepage');
  }
}
