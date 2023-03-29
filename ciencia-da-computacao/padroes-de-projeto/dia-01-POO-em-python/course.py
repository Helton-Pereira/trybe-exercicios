class Ventilador:
    def __init__(self, cor, potencia, preco):
        self.__cor = cor
        self.__potencia = potencia
        self.preco = preco

    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self) -> str:
        if self.ventilador:
            return f'{self.nome} possui um ventilador '
        return f'{self.nome} não possui um ventilador'


ventilador_branco = Ventilador('branco', potencia=250, preco=150)
pessoa = Pessoa('Helton', saldo_na_conta=3000)
pessoa.comprar_ventilador(ventilador_branco)

print(pessoa)
