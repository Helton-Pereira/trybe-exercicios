def fizzBuzz(number):
    result = []
    for n in range(1, number + 1):
        if n % 3 == 0 and n % 5 == 0:
            n = 'FizzBuzz'
        elif n % 5 == 0:
            n = 'Buzz'
        elif n % 3 == 0:
            n = 'Fizz'
        result.append(n)
    return result

print(fizzBuzz(15))