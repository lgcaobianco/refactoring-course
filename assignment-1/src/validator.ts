export interface Validator {
    getCpfIfValid(cpf: string): string;
}