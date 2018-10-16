import { Artist } from "./Artist";
import { User } from "./User";

export class Event {
    public artist: Artist;
    public organizer: User;
    constructor(
        public id: number,
        public address: string,
        public date_time: Date,
        public artist_id: number,
        public organizer_id: number
    ) {}
}