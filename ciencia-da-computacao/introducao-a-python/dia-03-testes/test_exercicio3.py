import pytest
from exercicio3 import is_valid_email

def test_username_can_only_contain_letters():
    assert is_valid_email("aaaa@nomewebsite.ext") is None

def test_username_can_only_contain_valid_characters():
    with pytest.raises(ValueError, match='Username should contain only letter, numbers, dashes or underscores'):
        is_valid_email("a**aaa@nomewebsite.ext")