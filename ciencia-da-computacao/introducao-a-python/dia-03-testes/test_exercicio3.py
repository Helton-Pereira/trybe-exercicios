import pytest
from exercicio3 import is_valid_email

def test_username_can_only_contain_letters():
    assert is_valid_email('aaaa@nomewebsite.ext') is None

def test_username_can_contain_letters_digits_and_dashes():
    assert is_valid_email('aa-a@nomewebsite.ext') is None

def test_username_doesnt_start_with_a_letter():
    with pytest.raises(ValueError, match='Username should starts with a letter'):
        is_valid_email('1aaa@nomewebsite.ext')

def test_username_doesnt_contain_valid_characters():
    with pytest.raises(ValueError, match='Username should contain only letter, numbers, dashes or underscores'):
        is_valid_email('a**aaa@nomewebsite.ext')

def test_website_contains_valid_characters():
    assert is_valid_email('abc@website123.com') is None

def test_website_doesnt_contain_valid_characters():
    with pytest.raises(ValueError):
        is_valid_email('aaaa@nome-website.ext')