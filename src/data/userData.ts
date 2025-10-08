export interface User {
  name: string;
  email: string;
  password: string;
  points: number;
  profilePic?: string;
}

export const users: User[] = [
  {
    name: "Nabila Afifah",
    email: "bilaalib@gmail.com",
    password: "menejemenmb",
    points: 100,
  },
  {
    name: "Inas Apsari",
    email: "inassani@gmail.com",
    password: "inasinas",
    points: "kata bila 50" as any,
  },
];
