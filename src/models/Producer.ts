export class Producer {
    constructor(
        public name: string,
        public description: string,
        public socialmedia: Socialmedia[],
        public profileImg: string,
    ) {}
}

class Socialmedia {
    constructor (
        public media: string,
        public URL: string,
    ) {}
}