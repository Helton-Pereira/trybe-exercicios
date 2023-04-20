# exercício 1

def how_many_evens(n):
    total = 0
    for index in range(n):
        if index % 2 and index != 0:
            total += 1
    return print(total)


#  how_many_evens(21)

# exercício 2

def recursive_count_evens(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_count_evens(n - 1)
    else:
        return recursive_count_evens(n - 1)


# print(recursive_count_evens(10))

# exercício 3

def biggest_number_aux(list, length):
    if length == 1:
        return list[0]
    else:
        biggest_number_rest_list = biggest_number_aux(list, length - 1)
        if biggest_number_rest_list > list[length - 1]:
            return biggest_number_rest_list
        else:
            return list[length-1]


def biggest_number(list):
    length = len(list)
    return biggest_number_aux(list, length)


#  print(biggest_number([3, 21, 10, 50, 14]))

# exercício 4

def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
