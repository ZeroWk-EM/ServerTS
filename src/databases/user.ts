export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: "Male" | "Female";
  ip_address: string;
};

export const users: User[] = [
  {
    id: 1,
    firstname: "Ollie",
    lastname: "Buggs",
    email: "obuggs0@geocities.com",
    gender: "Male",
    ip_address: "254.20.49.148",
  },
  {
    id: 2,
    firstname: "Rutledge",
    lastname: "Stanbury",
    email: "rstanbury1@google.fr",
    gender: "Male",
    ip_address: "175.142.110.245",
  },
  {
    id: 3,
    firstname: "Gibbie",
    lastname: "Cancutt",
    email: "gcancutt2@noaa.gov",
    gender: "Male",
    ip_address: "249.29.121.29",
  },
  {
    id: 4,
    firstname: "Chickie",
    lastname: "Cauley",
    email: "ccauley3@blogger.com",
    gender: "Male",
    ip_address: "166.1.227.28",
  },
  {
    id: 5,
    firstname: "Cello",
    lastname: "Yegorchenkov",
    email: "cyegorchenkov4@squarespace.com",
    gender: "Male",
    ip_address: "224.184.175.97",
  },
  {
    id: 6,
    firstname: "Florrie",
    lastname: "Raymen",
    email: "fraymen5@sogou.com",
    gender: "Female",
    ip_address: "160.183.125.173",
  },
  {
    id: 7,
    firstname: "Duane",
    lastname: "Ferencowicz",
    email: "dferencowicz6@arizona.edu",
    gender: "Male",
    ip_address: "116.199.156.190",
  },
  {
    id: 8,
    firstname: "Annora",
    lastname: "Grzegorzewicz",
    email: "agrzegorzewicz7@hhs.gov",
    gender: "Female",
    ip_address: "57.126.133.75",
  },
  {
    id: 9,
    firstname: "Dore",
    lastname: "Rustedge",
    email: "drustedge8@ebay.com",
    gender: "Female",
    ip_address: "140.177.193.186",
  },
  {
    id: 10,
    firstname: "Kariotta",
    lastname: "Tailour",
    email: "ktailour9@ow.ly",
    gender: "Female",
    ip_address: "165.101.93.184",
  },
];
