import { ClinicsRepository } from "../repository/ClinicsRepository";
import { graphqlHTTP } from "express-graphql";
import { clinicsSchema } from "./../schemas/graphqlSchema";

export class ClinicsController {
  path: string;
  repository: ClinicsRepository;
  handler: any;

  constructor(path: string, repository: ClinicsRepository) {
    this.path = path;
    this.repository = repository;
    const root = {
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
