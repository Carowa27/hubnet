import { Producer } from "./Producer";

export class Show {
  constructor(
    public id: string,
    public name: string,
    public producer: Producer,
    public description: string,
    public backgroundImg: string,
    public channelURL: string
  ) {}
}
