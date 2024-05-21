export interface Person {
  id : number;
  name: string;
  email: string;
  sexe : string;
  langage : Langage[];
}

export interface Langage {
    angular: number;
    golang : number;
    python: number;
}