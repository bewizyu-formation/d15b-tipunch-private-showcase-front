import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/HeaderService';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.emitChange('Evenements', 'event');
  }

}
