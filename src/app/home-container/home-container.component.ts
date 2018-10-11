import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ArtistService} from '../service/ArtistService';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  artists: Observable<any> = new Observable<any>();

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    // this.artists = [
    //   new Artist(1, 'test1', 'hello', 'lol@mail.fr',
    //     null, 'Elton John', 'salut c Elton John', '', '',
    //     undefined,
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Elton_John_November_2015.jpg/260px-Elton_John_November_2015.jpg'),
    //   new Artist(2, 'test2', 'hello', 'lol@mail.fr',
    //     null, 'Franck Mickael', 'salut c Frank Mickael', '',
    //     '', undefined,
    //     'https://www.closermag.fr/var/closermag/storage/images/1/2/5/9/3/12593581/frank-michael-meurtri-par-mort-mere.jpg'),
    //   new Artist(3, 'test3', 'hello', 'lol@mail.fr',
    //     null, 'George Michael', 'salut c George Michael mdr', '', '',
    //     undefined, 'https://images-na.ssl-images-amazon.com/images/I/C1zxjXpBEsS._SL1000_.png'),
    //   new Artist(3, 'test3', 'hello', 'lol@mail.fr',
    //     null, 'George Michael', 'salut c George Michael mdr', '', '',
    //     undefined, 'https://images-na.ssl-images-amazon.com/images/I/C1zxjXpBEsS._SL1000_.png'),
    //   new Artist(3, 'test3', 'hello', 'lol@mail.fr',
    //     null, 'George Michael', 'salut c George Michael mdr', '', '',
    //     undefined, 'https://images-na.ssl-images-amazon.com/images/I/C1zxjXpBEsS._SL1000_.png'),
    //   new Artist(3, 'test3', 'hello', 'lol@mail.fr',
    //     null, 'George Michael', 'salut c George Michael mdr', '', '',
    //     undefined, 'https://images-na.ssl-images-amazon.com/images/I/C1zxjXpBEsS._SL1000_.png'),
    //   new Artist(3, 'test3', 'hello', 'lol@mail.fr',
    //     null, 'George Michael', 'salut c George Michael mdr', '', '',
    //     undefined, 'https://images-na.ssl-images-amazon.com/images/I/C1zxjXpBEsS._SL1000_.png'),
    // ];
    console.log(this.artistService.findAll());
    this.artists = from(this.artistService.getArtists$);
  }

}
