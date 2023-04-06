import { ClinicsRepository } from "../repository/ClinicsRepository";
import { graphqlHTTP } from "express-graphql";
import { clinicsSchema } from "./../schemas/graphqlSchema";

enum SearchTypes {
  city="city",
  suburb="suburb",
  state="state",
  postal="postal",
  clinicName="clinicName",
}

export class ClinicsController {
  path: string;
  repository: ClinicsRepository;
  handler: any;

  constructor(path: string, repository: ClinicsRepository) {
    this.path = path;
    this.repository = repository;
    const root = {
      findClinic: (args: { searchField: string; searchType: SearchTypes }) => {
        switch (args.searchType) {
          case SearchTypes.city:
            return repository.getClinicsByCity(args.searchField);
          case SearchTypes.postal:
            return repository.getClinicsByZip(args.searchField);
          case SearchTypes.suburb:
            return repository.getClinicsBySuburb(args.searchField);
          case SearchTypes.state:
            return repository.getClinicsByState(args.searchField);
          case SearchTypes.clinicName:
            return repository.getClinicsByName(args.searchField);
        }
      },
      cityClinic: (args: { city: string }) =>
        repository.getClinicsByCity(args.city),
      stateClinic: (args: { state: string }) =>
        repository.getClinicsByState(args.state),
      postalClinic: (args: { postal: string }) =>
        repository.getClinicsByZip(args.postal),
      nameClinic: (args: { clinicName: string }) =>
        repository.getClinicsByName(args.clinicName),
      suburbClinic: (args: { suburb: string }) =>
        repository.getClinicsBySuburb(args.suburb),
    };
    this.handler = graphqlHTTP({
      schema: clinicsSchema,
      rootValue: root,
      graphiql: true,
    });
  }
}
