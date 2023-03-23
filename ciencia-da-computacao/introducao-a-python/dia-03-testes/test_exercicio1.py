from exercicio1 import fizzBuzz

def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzBuzz(2) == [1, 2]

def test_fizzBuzz_should_return_fizz_if_divisible_by_3():
    assert fizzBuzz(3) == [1, 2, 'Fizz']

def test_fizzBuzz_should_return_buzz_if_divisible_by_5():
    assert fizzBuzz(5) == [1, 2, 'Fizz', 4, 'Buzz']

def test_fizzBuzz_should_return_fizzBuzz_if_divisible_by_5_and3():
    assert fizzBuzz(15)[-1] == 'FizzBuzz'