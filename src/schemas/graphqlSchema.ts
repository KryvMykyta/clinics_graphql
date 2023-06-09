import { GraphQLEnumType, buildSchema } from "graphql";


export const clinicsSchema = buildSchema(`
  enum searchTypes {
    city,
    suburb,
    state,
    postal,
    clinicName,
  }

  type Query {
    findClinic(searchField: String, searchType: searchTypes): [Clinic],
    cityClinic(city: String): [Clinic],
    stateClinic(state: String): [Clinic],
    postalClinic(postal: String): [Clinic],
    nameClinic(clinicName: String): [Clinic],
    suburbClinic(suburb: String): [Clinic]
  }

  type Clinic {
    clinicName: String,
    adress: String,
    aboutClinic: String,
    zip: String,
    email: String,
    suburb: String,
    state: String,
    city: String,
    website: String,
    phone: String,
    lat: Float,
    lng: Float
  }
`);
