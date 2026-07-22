<!-- 
A ideia desse artigo é apresentar as partes elementares da programação em python. Apesar da linguagem ser python, gostaria de algumas noções do funcionamento dessas coisas no contexto da computação em geral. Estou falando de variáveis, funções, estruturas de controle, etc..  

Em específico aqui vamos falar sobre numeros, tipos e variáveis.
Não sei em quanto detalhes vou entrar, mas vou tentar manter um nível de profundidade bom para que vocês entendam de fato o que está acontecendo. Em futuras revisões eu posso detalhar mais algumas coisas ou enxugar um pouco.
-->

# Números, Tipos, Expressões e Mais!

> "A resposta para a pergunta fundamental sobre a vida, o universo e tudo mais é 42." - Douglas Adams.

Em geral, quando pensamos em programação, pensamos em lógica, em algoritmos, em estruturas de controle. Mas, antes de tudo, a programação é sobre lidar com dados, com números, com texto, com imagens, com sons. E é sobre isso que vamos falar aqui. A explicação desse paragrafo pode parecer um pouco abstrata, mas veremos ao longo deste artigo que na prática é mais fácil de entender.

## Números em Python

Vamos iniciar o python em modo REPL e vamos brincar um pouco com números. 

> 💡 Para acessar o modo REPL, digite `python3` (ou `python`) no terminal do seu sistema. Veja a aula ([Olá mundo!](hello_world.md)), caso você não esteja familizarizado.

Digitando `1` pressionado a tecla Enter, teremos:

```python
>>> 1
1
```

Isso significa que o valor do número 1 é 1. Isso é tão óbvio :)! Vamos tentar com outro número. Digitando `10.5`, qual será o valor?

```python
>>> 10.5
10.5
```

O valor de 10 é 10. Programar é tão fácil! >u<

Estes são os dois tipos principais de números em python. Assim como na Matemática, números como 1, 2, 200, -10 são chamados de **inteiros**, denotados por `int`. Números como 1.5, 2.3, 3.14159, -10.5, e outros números com decimais, são chamados de **ponto flutuante**, denotados por `float`. 

> ℹ️  Existem também os números **complexos**, denotados por `complex`, que são números da forma a + bi, onde a e b são números reais e i é a unidade imaginária (Não iremos focar neles por enquanto, pois eles aparecem em um formate de tupla, que veremos mais adiante).

Um dado qualquer em Python é um **objeto**, e todo objeto tem um **tipo**. Por exemplo, o número `1` é uma **instância** do tipo `int`. O número `10.5` é uma **instância** do tipo `float`. 

> Essa ideia de que tudo em Python é um objeto pode não fazer sentido agora, mas é consequencia do fato de Python ser uma linguagem de **programação orientada a objetos**. No futuro você verá que também será capaz de criar seus proprios tipos!. 

Para verificar qual é o *tipo* de um dado ou uma variável, usando a função _bultin_ `type()`. Por exemplo:

```python
>>> type(42)
<class 'int'>
>>> type(10.5)
<class 'float'>
```

Podemos converter um tipo em outro. Por exemplo, podemos converter um inteiro em um float, ou um float em um inteiro, usando as funções _builtin_ `float()` e `int()`. Veja o exemplo:

```python
>>> 10
10
>>> float(10)
10.0
>>> 10.5
10.5
>>> int(10.5)
10
```

> Note que ao converter um número real para um número inteiro, a parte decimal é perdida. Chamamos isso de **Truncar**.

## Booleanos

Um outro tipo de dado muito importante são os **booleanos**, que representam os valores verdadeiros ou falsos, denotados por `bool`. Um dado booelanos pode assumir dois valores, `True` ou `False` (Verdadeiro ou Falso). A boolean é uma unidade fundamental na computação, pois é a base para a tomada de decisão em programas de computador.

```python
>>> type(True)
<class 'bool'>
>>> type(False)
<class 'bool'>
```

Esses tipo de valor é comum em qualquer linguagem de programação. Quando uma expressão pode ser classificada como verdadeira ou falsa, dizemos que ela é uma **expressão booleana**. Por exemplo:

```python
>>> 2 + 2 == 4
True
>>> 5 - 5 == 1
False
>>> type(2 + 2 == 4)
<class 'bool'>
```

> ⚠️ O operador de igualdade em Python é escrito `==`, e não `=`. O operador `=` é reservado para atribuir um valor a uma variável, que veremos adiante.

Os números 0 e 1, também podem ser usados como valores booleanos. Também podemos converter valores booleanos para números inteiros usando a função `int()`, e números inteiros para valores booleanos usando a função `bool()`. Isso será bem util para nossas expressões no futuro. Veja o exemplo:

```python
>>> True == 1
True
>>> False == 0
True
```

```python
>>> int(True) #convertendo um booleano para inteiro
1
>>> int(False) #convertendo um booleano para inteiro
0
>>> bool(1) # convertendo um inteiro 1 para um booleano
True
>>> bool(0) # convertendo um inteiro 0 para um booleano
False
```

> 💡 Se tentarmos converter outros inteiros, ou até mesmo números float, veremos que qualquer valor diferente de 0 é convertido para `True` e 0 é convertido para `False`. Teste isso no seu computrador ;P

> ⚠️ Note que Python é **case-sensitive** (sensível ao tamanho das letras).  Portanto, `True` e `true` não são a mesma coisa. Se digitarmos `true` em vez de `True`, receberemos um erro. 

# Textos

Nós seres humanos que estamos atras da tela do computador, costumamos nos cumprimentar fando algo como "Olá, como vai você?", ao invés de "01000010 01100001 01101110 01100001 01101110 01100001 01110011". Por isso precisamos também dos tipos de texto. 

Em Python, textos são chamados de **strings** e são denotados por `str`. As strings em Python são sequências de caracteres, e podem ser criadas usando aspas simples `'` ou aspas duplas `"`. Por exemplo:

```python
>>> type("Olá, como vai você?")
<class 'str'>
>>> type("01000010 01100001 01101110 01100001 01101110 01100001 01110011")
<class 'str'>
>>> type("2")
<class 'str'>
```

Embora "2" seja um caractere que pode ser representado por um número inteiro, ele é uma string porque está entre aspas. 

> ℹ️ Isso pode ser uma fonte de confusão para iniciantes, principalpente ao usar a função `input()`, que veremos mais adiante. Nem sempre os tipos são explicitos, por exemplo ao escrever o comando `print("2")` e `print(2)`, ambos serão impressos da mesma forma, ainda que sejam dois tipos diferentes. Conforme você praticar essas confusões desaparecerão ;)

Python é codificado em **unicode**, que é um padrão de codificação de caracteres que permite representar praticamente todos os caracteres de todos os idiomas do mundo (inclusive emojis! 😂). 

Também existem sequências especiais de caracteres, chamadas de **sequências de escape**, que permitem representar caracteres especiais em strings, eles são processados quando a string é exibida (por exemplo com a função `print()`). Por exemplo, `"\n"` representa quebra de linha. 

```python
>>>print("Mas não há sentido em chorar sobre cada erro.\nVocê simplesmente continua tentando até acabar o bolo.\n🎂")
Mas não há sentido em chorar sobre cada erro.
Você simplesmente continua tentando até acabar o bolo.
🎂
```

<!--Trecho do poema da GlaD0s, do porta. Gosto muito. Talvez faça mais referencias ao bolo :D-->
