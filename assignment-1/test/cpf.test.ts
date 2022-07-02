import { Cpf } from "../src/cpf";

describe('test cpf converter', function () {
  it('should pass with real cpf', function () {
    const cpf = new Cpf('98744459041');
    expect(cpf).toBeInstanceOf(Cpf);
  });

  it('should pass with CPF that first digit of verification is 0', function () {
    const cpf = new Cpf('201.894.530-01');
    expect(cpf).toBeInstanceOf(Cpf);
  });

  it('should pass with CPF that last digit of verification is 0', function () {
    const cpf = new Cpf('964.100.710-60');
    expect(cpf).toBeInstanceOf(Cpf);
  });


  it('should pass with real cpf WITH MASK', function () {
    const cpf = new Cpf('987.444.590-41');
    expect(cpf).toBeInstanceOf(Cpf);
    expect(cpf.cpf).toBe('98744459041');
  });

  it('should throw cpf invalid with fake cpf', function () {
    expect(() => new Cpf('42042042042')).toThrowError("error from final validation")
  })

  it('should return false if every char is the same', function () {
    expect(() => new Cpf('111111111111')).toThrowError("this string is the same char");
  })

  it('should throw error with null', function () {
    // @ts-ignore
    expect(() => new Cpf(null)).toThrowError("string invalid");
  })


  it('should return false with undefined', function () {
    // @ts-ignore
    expect(() => new Cpf(undefined)).toThrowError("string invalid")
  })


  it('should return false with less than 11 digits', function () {
    expect(() => new Cpf('420453')).toThrowError("error from first chain")
  })

  it('should return false with more than 15 digits', function () {
    expect(() => new Cpf('42045333333333333333333')).toThrow("error from first chain")
  })

});
