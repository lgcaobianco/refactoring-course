import { CPFFormulaValidator } from "./cpf-formula-validator";
import { CPFSanitizerValidator } from "./cpf-sanitizer-validator";
import { Validator } from "./validator";

export class CPFChainValidator implements Validator {
    cpf: string;
    next: Validator;

    constructor(cpf: string) {
        if (!cpf) {
            throw new Error("string invalid");
        }
        this.cpf = cpf;
        this.next = new CPFSanitizerValidator(this.cpf);
    }

    getCpfIfValid(): string {
        if (this.cpf.length < 11 || this.cpf.length > 14) {
            throw new Error("error from first chain");
        }
        return this.next.getCpfIfValid(this.cpf);
    }

}