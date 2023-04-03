from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def remover_rotinas(self, rotina):
        self.__rotinas.remove(rotina)

    def despertar(self):
        print('Som do alarme: AOBA!!!!')


# Interface Observer
class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


# Observador Rotina Luzes
class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print('Acendendo Luzes')


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando o café")


class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligar computador")


if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuzes(alarme_manha).acionar()
    AcionadorCafeteira(alarme_manha).acionar()
    AcionadorComputador(alarme_manha).acionar()

    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde).acionar()

    alarme_tarde.despertar()
