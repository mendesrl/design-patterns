export interface Hero {
    id: string;
    name: string;
    powerstats: {
      intelligence: string;
      strength: string;
      speed: string;
      durability: string;
      power: string;
      combat: string;
    };
    biography: {
      fullName: string;
      placeOfBirth: string;
      publisher: string;
    };
    appearance: {
      gender: string;
      race: string;
      height: string[];
      weight: string[];
    };
    connections: {
        relatives: string;
    }
    image: {
      url: string;
    };
  }
  