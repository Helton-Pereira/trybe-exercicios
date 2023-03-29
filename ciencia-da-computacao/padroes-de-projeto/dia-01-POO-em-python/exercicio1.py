class TV:
    def __init__(self, tamanho) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, value):
        if value < 1 or value > 99:
            raise ValueError
        self.__canal = value

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def status(self):
        if self.__ligada:
            return 'A tv está ligada'
        else:
            return 'A tv está desligada'
