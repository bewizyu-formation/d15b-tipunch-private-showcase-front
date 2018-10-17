import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/HeaderService';
import {EventService} from '../service/EventService';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../model/User';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit {

  events$ = this.eventService.events$;

  currentUser$: Observable<User>;
  userId;

  constructor(private headerService: HeaderService, private eventService: EventService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.currentUser$ = data.user;
      this.currentUser$.subscribe(user => {
        this.userId = user.id;
      });
    });
    this.eventService.findAll();
    this.headerService.emitChange('Evenements', 'event');
  }

  getDayNameOfDate(str: string) {
    const date = new Date();
    const options = {weekday: 'short'};
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

  subscribeEvent(eventId) {
    console.log('user ' + this.userId + ' sub to event number ' + eventId);
    this.eventService.addGuest(eventId, this.userId);
    location.reload();
  }

  isParticipating(guests) {
    let value = false;
    guests.forEach(id => {
      if (this.userId === id) {
        value = true;
      }
    });
    return value;
  }
}
