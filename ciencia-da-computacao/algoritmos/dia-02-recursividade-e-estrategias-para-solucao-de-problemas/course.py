import time


def countdown(n):
    time.sleep(1)
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


def sum(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum(n - 1)


sum(4)
