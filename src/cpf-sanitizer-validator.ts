import { CPFChainValidator } from "./cpf-chain-validator";
import { CPFFormulaValidator } from "./cpf-formula-validator";
import { CpfSameCharValidator } from "./cpf-same-char-validator";
import { Validator } from "./validator";

export class CPFSanitizerValidator implements Validator {
    next: Validator;
    cpf: string;

    constructor(cpf: string) {
        this.cpf = cpf;
        this.next = new CpfSameCharValidator(cpf);
    }

    getCpfIfValid(cpf: string): string {
        cpf = cpf.replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .replace(' ', '');
        return this.next.getCpfIfValid(cpf);
    }


}