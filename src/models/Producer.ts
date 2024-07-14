export class Producer {
  constructor(
    public name: string,
    public description: string,
    public socialmedia: Socialmedia[],
    public cutout: string,
    public logo: string
  ) {}
}

class Socialmedia {
  constructor(public media: Socials, public URL: string) {}
}

export enum Socials {
  YOUTUBE = "Youtube",
  TWITCH = "Twitch",
  DISCORD = "Discord",
  INSTAGRAM = "Instagram",
  TIKTOK = "TikTok",
  XTWITTER = "X",
  FACEBOOK = "Facebook",
  PAYPAL = "PayPal",
  PATREON = "Patreon",
}
