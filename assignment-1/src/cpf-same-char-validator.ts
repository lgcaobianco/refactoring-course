import { CPFChainValidator } from "./cpf-chain-validator";
import { CPFFormulaValidator } from "./cpf-formula-validator";
import { CPFSanitizerValidator } from "./cpf-sanitizer-validator";
import { Validator } from "./validator"

export class CpfSameCharValidator implements Validator {
    next: Validator;
    cpf: string;
    constructor(cpf: string) {
        this.cpf = cpf;
        this.next = new CPFFormulaValidator(cpf);
    }

    getCpfIfValid(cpf: string): string {
        if (this.isEveryCharEqualsFirst(cpf)) {
            throw ("this string is the same char");
        }
        return this.next.getCpfIfValid(cpf);
    }

    private isEveryCharEqualsFirst = (cpf: string) => cpf.split('').every((char) => char === cpf[0])

}




