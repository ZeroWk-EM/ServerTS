export type Product = {
  id: number;
  owner: string;
  brand: string;
  model: string;
  year: number;
  vin: string;
  price: number;
  werehouse: string;
};

export const products: Product[] = [
  {
    id: 1,
    owner: "Daryn Port",
    brand: "BMW",
    model: "M5",
    year: 2007,
    vin: "JTEBU5JR8E5622732",
    price: 37378,
    werehouse: "EU",
  },
  {
    id: 2,
    owner: "Cos Halversen",
    brand: "Oldsmobile",
    model: "Bravada",
    year: 1996,
    vin: "1G6DB8E52E0136641",
    price: 35522,
    werehouse: "AS",
  },
  {
    id: 3,
    owner: "Emmaline Fitzgerald",
    brand: "GMC",
    model: "Rally Wagon 1500",
    year: 1993,
    vin: "KNAFK4A61E5876663",
    price: 26680,
    werehouse: "EU",
  },
  {
    id: 4,
    owner: "Celle Watkins",
    brand: "Ford",
    model: "Fusion",
    year: 2009,
    vin: "WBAEJ13451A949432",
    price: 37731,
    werehouse: "NA",
  },
  {
    id: 5,
    owner: "Mead Kaley",
    brand: "Chevrolet",
    model: "Silverado 1500",
    year: 2012,
    vin: "JN1AZ4EHXFM182309",
    price: 29147,
    werehouse: "OC",
  },
  {
    id: 6,
    owner: "Phip Frostick",
    brand: "Porsche",
    model: "911",
    year: 1985,
    vin: "WUATNAFGXBN408037",
    price: 23804,
    werehouse: "EU",
  },
  {
    id: 7,
    owner: "Kevyn Summerill",
    brand: "MINI",
    model: "Cooper",
    year: 2010,
    vin: "WBA3N5C51EF321758",
    price: 19515,
    werehouse: "NA",
  },
  {
    id: 8,
    owner: "Donnie Degli Antoni",
    brand: "Chevrolet",
    model: "Silverado 2500",
    year: 2000,
    vin: "WAUDH48H07K636456",
    price: 46382,
    werehouse: "NA",
  },
  {
    id: 9,
    owner: "Claresta_Morfield",
    brand: "Toyota",
    model: "Highlander",
    year: 2011,
    vin: "1GYEE53A790256720",
    price: 42665,
    werehouse: "EU",
  },
  {
    id: 10,
    owner: "Jorge Van Dalen",
    brand: "Buick",
    model: "Skylark",
    year: 1998,
    vin: "3N1CN7AP8FL982152",
    price: 16347,
    werehouse: "NA",
  },
];
