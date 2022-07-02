import { Validator } from "./validator";

export class CPFFormulaValidator implements Validator {
    next?: Validator
    cpf: string;

    constructor(cpf: string) {
        this.cpf = cpf;
    }

    getCpfIfValid(cpf: string): string {
        let totalizador1 = 0, totalizador2 = 0;
        let digito;

        for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
            digito = parseInt(cpf.substring(nCount - 1, nCount));
            totalizador1 += (11 - nCount) * digito;
            totalizador2 += (12 - nCount) * digito;
        }

        const restoTotalizador1 = totalizador1 % 11;
        const primeiroDigitoVerificacao = restoTotalizador1 < 2 ? 0 : 11 - restoTotalizador1;

        totalizador2 += 2 * primeiroDigitoVerificacao;
        const restoTotalizador2 = totalizador2 % 11;
        const segundoDigitoVerificacao = restoTotalizador2 < 2 ? 0 : 11 - restoTotalizador2;

        const digitosVerificacao = cpf.substring(cpf.length - 2, cpf.length);

        const digitosVerificacaoObtidos = primeiroDigitoVerificacao.toString() + segundoDigitoVerificacao.toString();
        if (digitosVerificacao !== digitosVerificacaoObtidos) {
            throw new Error("error from final validation")
        }
        return cpf;
    }


}