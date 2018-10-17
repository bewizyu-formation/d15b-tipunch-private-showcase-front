import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { EventService } from '../service/EventService';
import { UserService } from '../service/UserService';
import { HeaderService } from '../service/HeaderService';

@Component({
  selector: 'app-booker-container',
  templateUrl: './booker-container.component.html',
  styleUrls: ['./booker-container.component.css']
})
export class BookerContainerComponent implements OnInit {
  bookForm: FormGroup;
  dateCtrl: FormControl;
  addressCtrl: FormControl;
  maxGuestsCtrl: FormControl;
  hourCtrl: FormControl;
  minutesCtrl: FormControl;

  currentUser$: Observable<User>;
  artistId;
  userId;
  constructor(private fb: FormBuilder, 
    private route:ActivatedRoute, private eventService: EventService, 
    private headerService: HeaderService, private router: Router) {
    this.dateCtrl = fb.control('', [Validators.required]);
    this.addressCtrl = fb.control('', [Validators.required]);
    this.maxGuestsCtrl = fb.control({value: 'Illimité', disabled: true});
    this.hourCtrl = fb.control('', [Validators.required, Validators.pattern('([01]?[0-9]|2[0-3])')]);
    this.minutesCtrl = fb.control('', [Validators.required, Validators.pattern('[012345]?[0-9]')]);

    this.bookForm = fb.group({
      'address': this.addressCtrl,
      'maxGuests': this.maxGuestsCtrl,
      'date': this.dateCtrl,
      'hour': this.hourCtrl,
      'minutes':  this.minutesCtrl,
    });

  }
  
  ngOnInit() {
    // Getting artists related to user department code
    this.route.data.subscribe((data) => {
      this.currentUser$ = data.user;
      this.currentUser$.subscribe( user => {
        this.userId = user.id;
      })
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.artistId = params.get('idArtist');
    });
    this.headerService.emitChange('Booker un artiste', 'event');
  }

  onSubmit() {
    const date = new Date(this.bookForm.value.date);
    const hour = this.bookForm.value.hour < 10 ? `0${this.bookForm.value.hour}` : `${this.bookForm.value.hour}`;
    const minutes = this.bookForm.value.minutes < 10 ? `0${this.bookForm.value.minutes}` : `${this.bookForm.value.minutes}`;

    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;

    const dateTime = `${date.getFullYear()}-${month}-${day} ${hour}:${minutes}`;

    const address = this.bookForm.value.address;
    this.eventService.save({
      address: address,
      date_time: dateTime,
      artist_id: parseInt(this.artistId),
      organizer_id: parseInt(this.userId),
    });
    this.router.navigate(['events'])
  }
}