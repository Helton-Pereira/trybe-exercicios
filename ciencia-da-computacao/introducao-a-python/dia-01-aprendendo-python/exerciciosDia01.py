# exercício 01

def bigger_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

print(bigger_number(8, 3))

# exercício 2

number_list = [1, 2, 3, 4, 5]

def media(numbers): 
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

print(media(number_list))

# exercício 3

def square(number):
    for row in range(number):
        print('*' * number)

square(2)

# exercício 4

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def find_biggest_name(list):
    biggest_name = list[0]
    for name in list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(find_biggest_name(names))

# exercício 5

def paint_calculator(square_meters):
    litters = square_meters / 3
    total_cans = litters // 18
    if litters % 18:
        total_cans += 1
    total_price = total_cans * 80
    return (total_cans, total_price)

print(paint_calculator(50))

# modo alternativo

# import math


# def paint_costs(area):
#    can_price = 80
#    required_liters = area / 3
#    required_cans = math.ceil(required_liters / 18)
#    return required_cans, required_cans * can_price

# exercício 6

def triangle_analyzer(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        print('Não é um triângulo')
    elif side1 == side2 == side3:
        print('Triângulo Equilátero')
    elif side1 == side2 or side1 == side3 or side2 == side3:
        print('Triângulo Isóceles')
    else:
        print('Triângulo Escaleno')

triangle_analyzer(3, 3, 3)