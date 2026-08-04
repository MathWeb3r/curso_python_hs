<!-- 
Esse artigo é para discutir a criação de expressões

Inicialmente pensei em fazê-lo junto com if/else, mas talvez seja muita coisa pra um só artigo.

-->

> "There is no sense crying over every mistake. You just keep on trying till you run out of cake." — GLaDOS

Chegamos agora em um assunto onde as coisas começam a ficar bem interessantes. Vamos introduzir os conceitos de **expressões**. Na verdade, você já criou várias expressões em outras aulas, como por exemplo: `1 + 2`. A soma `1 + 2` é uma expressão simples que usa o **operador** `+`. Na verdade, qualquer operação matemática é um tipo de expressão que usa um **operador aritmético** para combinar dois valores. 

Nesta aula, veremos todos os principais tipos de **operadores** do Python.

## Operações Matemáticas

As expressões matemáticas em Python são feitas com operadores aritméticos e acredito que seu funcionamento é bem intuitivo, por motivos que irei explicar. Os operadores são exatamente os mesmos que vemos na matemática básica. Porém, melhor do que falar, é fazer!

Vamos abrir o Python pelo nosso terminal e testar algumas operações (_Veja a aula [Olá Mundo!](hello_world.md) para saber como acessá-lo_). A começar pela nossa conhecida (e querida) soma, feita com o símbolo `+`:

```python
>>> 2 + 3
5
```

Agora a subtração, com o símbolo `-`:

```python
>>> 5 - 2
3
```

Então a multiplicação, feita com `*`:

```python
>>> 2 * 3
6
```

e também a divisão, feita com `/`:

```python
>>> 10 / 4
2.5
```

Diferente das outras operações, a divisão `/` de dois _inteiros_ resulta em um **float**. Podemos verificar isso com a função `type()`:

```python
>>> type(2 + 3) # tipo do resultado da soma
<class 'int'>
>>> type(10 / 4) # tipo do resultado da divisão
<class 'float'>
```

Existe também a divisão inteira, representada pelo operador `//`:

```python
>>> 11 // 4
2
```

O `//` retorna o _quociente_ da divisão entre dois inteiros, ou se você preferir, o resultado dessa divisão arredondado pra baixo. 

Da mesma forma, o operador `%` retorna o **resto** da divisão entre dois inteiros. 

```python
>>> 11 % 4
3
```

Uma maneira fácil de visualizar os operadores `//` e `%` é pensar na divisão como nós aprendemos na escolinha. Por exemplo, para fazer a divisão de `11` por `4`, como costumávamos fazer? Primeiro multiplicamos o `4` por algum número inteiro até que o valor seja próximo, mas menor que `11`. Nesse caso, multiplicamos `4` por `2` para obter `8`. Esse `2` é o quociente, ou seja, o resultado da divisão inteira - o operador `//` em Python. O resto é o dividendo `11` menos o produto do quociente pelo divisor, ou seja, `11 - 8 = 3`. O operador `%` em Python retorna exatamente esse resto. Veja no (lindo) esquema abaixo: 

![Imagem: Divisão feita do método manual](https://github.com/MathWeb3r/curso_python_hs/blob/main/programacao/4_expressoes_e_operadores/divisao.svg?raw=True)

> O `%` é frequentemente chamado de operador **módulo**.

Por último o operador de exponenciação, feito com `**`:

```python
>>> 2**3
8
```

A instrução `2**3` é o mesmo que $2^3$ (_2 elevado a 3_ na matemática). 

Essas são todas as operações suportadas pelo Python! Você deve estar sentindo falta das raízes, mas na verdade elas são feitas com o `**`. Do mesmo modo como podemos escrever, na matemática, a radiciação:

$$
\sqrt{4} = 4^{1/2}
$$

Podemos fazer em Python:

```python
>>> 4**0.5
2.0
```

## Concatenação e Repetição de textos

Vimos apenas operações matemáticas com números. Mas o Python também suporta operações com **strings**! Por exemplo, o operador `+` é usado para **concatenar** strings, ou seja, para juntá-las.

```python
>>> "Amo" + " " + "Bolo de Cenoura"
'Amo Bolo de Cenoura'
```

O operador `*` é usado para repetir strings.

```python
>>> "Não" * 5
'NãoNãoNãoNãoNão'
```

Repare que a _concatenação_ só pode ocorrer entre strings, e que a repetição só pode ocorrer entre uma string e um inteiro! Caso contrário, resulta em um erro.

```python
>>> "Bananas" + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
```
```python
>>> "Laranjas" * 3.5
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can't multiply sequence by non-int of type 'float'
```

> Por que você gostaria de somar 2 mais bananas? Calcular 3.5 vezes laranjas?! Não sei, mas infelizmente o Python ainda não está preparado para isso...


## Expressões compostas

As expressões que nós vimos nos exemplos dos operadores aritméticos, foram expressões _simples_, isto é, temos algo na forma `valor <operador> valor`. Mas e se quisermos fazer algo como: 

$$
2 + 3 \times 4
$$

Sabemos da matemática, que para resolver essa equação precisamos fazer primeiro a multiplicação, depois a soma. Mas se quiséssemos que a soma fosse feita primeiro, usaríamos parênteses, assim:

$$
(2 + 3) \times 4
$$

E dessa forma a soma acontece primeiro, depois a multiplicação. **A forma como o Python resolve é exatamente a mesma!**. Em Python, a multiplicação e a divisão são feitas sempre antes da soma e da subtração, por exemplo:

```python
>>> 2 + 3 * 4 - 1
13
```

Aqui é feita primeiro a multiplicação `3 * 4` que dá `12`. Depois é feita a soma `2 + 12` que dá `14`. Por fim, é feita a subtração `14 - 1` que dá `13`. 

Mas e se quisermos que a soma seja feita primeiro? Assim como na matemática, usamos parênteses:

```python
>>> (2 + 3) * 4 - 1
19
```

Aqui, o Python primeiro resolve a expressão dentro dos parênteses `(2 + 3)` que dá `5`. Depois é feita a multiplicação `5 * 4` que dá `20`. Por fim, é feita a subtração `20 - 1` que dá `19`.

Da mesma forma que a matemática também, o Python resolve as operações com `()` aninhados de dentro para fora. Por exemplo:

```python
>>> (2 * (3 + 1)) / 2
4.0
```

>A ordem em que as expressões são resolvidas em python segue uma hierarquia, você pode conferir em [Operator precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence), na documentação do Python.

## Operadores de Comparação

Aqui, novamente, vamos ver algumas figuras conhecidas da matemática. Os operadores de **comparação**. Já vimos o `==`, que representa a igualdade. 

```python
>>> 7 == 3 + 4 
True
```

Maior que $>$, representado por `>`, e menor que $<$, representado por `<`, são usados da seguinte forma:

```python
>>> 4 > 3 # 4 é maior que 3?
True
>>> 3 > 4
False
>>> 3 < 4
True
>>> 4 < 3
False
```

Da mesma forma, maior ou igual que, $\ge$, representado por `>=` e menor ou igual que, $\le$, representado por `<=`, são usados da seguinte forma:

```python
>>> 4 >= 4 # 4 é maior ou igual a 4?
True
>>> 4 >= 5 
False
>>> 3 <= 3 # 3 é menor ou igual a 3?
True
>>> 4 <= 3 
False
```

Em Python os operadores de comparação também suportar a sintexe de intervalo, ou seja, podemos fazer:

```python
>>> 3 <= 4 <= 5
True
```

Isto é, `4` é maior ou igual a `3` e menor ou igual a `5`. `4` está contido no intervalo $[3, 5]$.

> Ali em cima eu usei o termo sintaxe. Fazendo um paralelo com a língua portuguesa, a sintaxe é como as frases são construídas, a ordem das palavras e a forma como elas se relacionam entre si. Em programação é a mesma coisa, a sintaxe é a forma como nós devemos escrever as nossas instruções. Por exemplo se você digitar `3 === 5`, como `===` não é um operador, o Python vai gerar o erro `SyntaxError: invalid syntax`, pois você está usando uma sintaxe inválida.

## Operadores Lógicos

Chegamos neles, os operadores **lógicos**, o coração da computação <3. Eles são usados para combinar expressões booleanas e retornar um valor booleano. Os principais operadores lógicos são `and` (E), `or` (OU) e `not` (NÃO). 

O operador `and` (E) retorna `True` apenas se ambas as expressões forem verdadeiras. Veja:

```python
>>> True and True
True
>>> True and False
False
```

Por exemplo, vamos verificar essa expressão: 

```python
>>> (10 > 5) and (2 > 3)
False
```

Do lado direito, temos `10 > 5` que é verdade e `2 > 3` que é falso. O que o operador `and` faz é perguntar, neste caso, "10 é maior que 5 **e** 2 é maior que 3?" Comomodo a segunda parte é falsa, o resultado final é falso.

> O uso de parênteses não é obrigatório, mas é uma **boa prática**. Você poderia escrever `10 > 5 and 2 > 3`, e isso funcionaria do mesmo modo, mas pode causar confusões, principalmente quando as expressões ficarem maiores. 

Já o operador `or` (OU), precisa que apenas uma das partes seja verdadeira para retornar `True`. Vejamos:

```python
>>> True or False
True
>>> False or False
False
```

Agora, vamos verificar a expressão abaixo:

```python
>>> (10 > 5) or (2 > 3)
True
```

A pergunta que o `or` faz é "10 é maior que 5 **ou** 2 é maior que 3?". No caso, a primeira parte é verdadeira, logo, o resultado é verdadeiro. O resultado só será falso se ambas as afirmações forem falsas. 

O último operador é o `not` (NÃO). Este operador nega a afirmação booleana, que na prática, inverte seu valor. Vejamos:

```python
>>> not True
False
>>> not False
True
```

Por exemplo:

```python
>>> not (10 > 5)
False
```

A comparação `10 > 5` naturalmente retorna `True`, porém o `not` inverte esse valor para `False`. Da mesma forma, o `not` invertiria o valor de `False` para `True`, como neste exemplo:

```python
>>> not (2 >= 3)
True
```

Da mesma forma como fizemos com as expressões metemática, podemos combinar os operadores lógicos em expressões mais complexas. 

## Alguns exemplos

Vamos agora usar os operador para criar alguns programas. Abra a sua IDE e vamos começar! Tente fazer os exemplos abaixo:

### Maioridade
Vamos fazer um programa que verifica se o usuário é maior de idade. O programa primeiro vai pedir ao usuário para digitar sua idade e armazenar em uma variável. A condição para que alguém seja maior de idade é que sua idade seja maior ou igual à 18. Então o programa vai verificar se idade inseridade satizfas essa condição. Por último, ele vai imprimir na tela `True`, o usuário for maior de idade, caso contrário, ele vai imprimir `False`. 

Uma possível solução:

```python
idade = int(input("Digite a sua idade: "))

# A variável maior de idade recebe o valor booleano da expressão.
# Se idade for maior ou igual à 18, será True
# Se idade for menor que 18, será False.
maior_de_idade = (idade >= 18)

print("O usuário é maior de idade?")
print(maior_de_idade)
```

### Número par
Um outro exemplo, vamos verificar se um número é par. A condição para que um número sejá par é que ele seja divisível por 2, ou seja, o resto da divisão por 2 seja 0. Faça um programa que recebe um número, e imprima `True` se o número for par, caso contrário, imprima `False`. 

Uma possível solução:

```python
numero = int(input("Digite um número: "))

# A variável par recebe o valor booleano da expressão.
# Se o resto da divisão de numero por 2 for 0, será True
# Se o resto da divisão de numero por 2 for 1, será False.
par = (numero % 2 == 0)

print("O número é par?")
print(par)
```

### Média entre 3 números
Vamos agora criar um programa que calcula a média de 3 notas. Uma nota é um valor real, ou seja, pode ter vírgula. Por exemplo, 7.5. Peça para o usuário digitar 3 notas e imprima na tela a média entre elas.

Uma possível solução:

```python
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

# A variável media recebe o valor da média das três notas.
# Lembre-se: os parênteses garantem que a soma seja feita antes da divisão.
media = (nota1 + nota2 + nota3) / 3

print("A média entre as três notas é:")
print(media)
```

Como eu comentei no começo dessa seção, os operadores lógicos são essenciais para a computação de modo geral. Os computadores falando usando binário. No fundo tudo o que estamos vendo aqui, são apenas `0` e `1`, _verdadeiro_ e _falso_. As letras, números, as imagens e os sons. Os sinais que o seu teclado faz quanda tecla é pressionada. E são esses operadores que fazem tudo isso que você está aprendendo acontecer. Não existe nenhuma mágica por trás da tela do seu computador, são apenas operações lógicas, como as que vimos, na verdade milhões delas.

Mas para construir uma intuição real do funcionamento desses mecanismos é preciso pratica-los. Por isso, ao final dessa aula, estou sugerindo alguns exercícios para você treinar como podemos usar essas expressões para resolver problemas reais. A compreensão da lógica booleana será especialmente importante para a próxima aula, em que veremos os operadores `if` e `else`, que nos permitirão tomar decisões em nossos programas, baseado em expressões booleanas.

---

## Exercícios Práticos: Expressões Matemáticas

Agora é a sua vez de praticar! Abra sua IDE ou o terminal e tente criar programas em Python para resolver os problemas abaixo utilizando `input()`, expressões matemáticas e `print()`.

1. **Conversão de Temperatura**: Peça ao usuário uma temperatura em graus Celsius (`°C`) e imprima na tela essa mesma temperatura em Fahrenheit (`°F`) e em Kelvin (`K`).
   - Fórmula: $F = C \times 1.8 + 32$

2. **Área e Perímetro do Retângulo**: Peça a largura e a altura de um retângulo e calcule a sua **área** e o seu **perímetro**.

3. **Cálculo de Desconto**: Peça o preço de um produto e o percentual de desconto (ex: `15` para 15%). Calcule e exiba o preço final com desconto.

4. **Média Ponderada**: Solicite duas notas de um aluno. A primeira nota tem **peso 2** e a segunda tem **peso 3**. Calcule e exiba a média ponderada do aluno.

5. **Hipotenusa (Desafio)**: Solicite o valor de dois catetos de um triângulo retângulo e calcule o valor da hipotenusa ($h = \sqrt{a^2 + b^2}$).
   - *Dica:* Lembre-se de que a raiz quadrada pode ser calculada elevando a expressão a `0.5` (`** 0.5`).

6. **Decomposição de Segundos (Desafio Master)**: Peça ao usuário um tempo total em segundos (número inteiro) e converta para a quantidade correspondente em **Horas, Minutos e Segundos**.
   - *Dica:* Use a divisão inteira (`//`) e o resto da divisão (`%`).

---

## Exercícios Práticos: Operadores Lógicos e Comparação

Agora teste seus conhecimentos com operadores relacionais e lógicos (`and`, `or`, `not`):

7. **Aprovação por Nota e Frequência**: Peça a nota final do aluno e a sua frequência (em %). O aluno é aprovado se a nota for maior ou igual a `7.0` **E** a frequência for maior ou igual a `75%`. Imprima `True` ou `False`.

9. **Montanha-Russa no Parque**: Para andar na montanha-russa, a pessoa precisa ter no mínimo `1.50m` de altura **E** no mínimo `12` anos de idade. Peça a altura e a idade e imprima `True` se puder andar ou `False` caso contrário.

10. **Meia-Entrada no Cinema**: Peça a idade de uma pessoa e se ela é estudante (`1`, se for ou `0` se não for). A pessoa tem direito à meia-entrada se for menor de 18 anos **OU** tiver 60 anos ou mais. Se for estudante, ela tem direito independente da idade. Imprima `True` ou `False`.

11. **Aprovação de Empréstimo (Desafio)**: Um banco aprova empréstimo se o cliente tiver idade entre `21` e `65` anos, renda mensal de no mínimo `R$ 2500` **E NÃO** estiver com o nome negativado. Peça esses dados ao usuário e imprima se o empréstimo foi aprovado (`True` ou `False`).

12. **Ano Bissexto (Desafio Master)**: Peça um ano ao usuário (ex: `2024`) e verifique se ele é bissexto. Um ano é bissexto se for divisível por 4 **E NÃO** for divisível por 100, **OU** se for divisível por 400. Imprima `True` ou `False`.

> 📝 **Gabarito disponível:** Confira as soluções detalhadas e explicadas de todos os exercícios no arquivo [Soluções dos Exercícios](solucoes_expressoes.md).