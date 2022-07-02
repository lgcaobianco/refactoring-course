import { CPFChainValidator } from "./cpf-chain-validator";

export class Cpf {
  cpf: string;

  constructor(cpf: string) {
    const validator = new CPFChainValidator(cpf);
    this.cpf = validator.getCpfIfValid();
  }

}



