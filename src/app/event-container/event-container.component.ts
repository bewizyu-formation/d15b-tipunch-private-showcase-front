import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/HeaderService';
import { EventService } from '../service/EventService';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit {

  events$ = this.eventService.events$;
  constructor(private headerService: HeaderService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.findAll();
    this.headerService.emitChange('Evenements', 'event');
  }

  getDayNameOfDate(str: string) {
    const date = new Date();
    const options = { weekday: 'short'};
    return date.toLocaleDateString('fr-FR', options).substring(0, 3);
  }

  getDayAndMonthOfDate(str: string) {
    const date = new Date(str);
    return `${date.getDate()} / ${date.getMonth() + 1}`;
  }

  getTimeOfDate(str: string) {
    const date = new Date(str);
    return `à ${date.getHours()}h${date.getMinutes()}`;
  }
}
