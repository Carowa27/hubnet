import { Producer } from "./Producer";

export class Show {
    constructor(
        public id: string,
        public name: string,
        public color: string,
        public textcolor: string,
        public mirrored: boolean,
        public title: string,
        public description: string,
        public shortDescription: string,
        public backgroundImg: string,
        public channelURL: string,
        public video: string,
        public characterImg: string,
        public producer: Producer, 
    ) {}
}