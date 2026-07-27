# Soluções dos Exercícios: Expressões e Operadores

Abaixo você encontra as soluções detalhadas para os exercícios propostos na aula [Expressões e Operadores](expressoes_e_operadores.md).

Tente resolver os exercícios por conta própria antes de consultar este gabarito!

---

## Exercício 1: Conversão de Temperatura (Celsius para Fahrenheit)

**Enunciado:** Escreva um programa que peça a temperatura em graus Celsius (`°C`), calcule e imprima a temperatura correspondente em Fahrenheit (`°F`).
- Fórmula: $F = C \times 1.8 + 32$

### Solução

```python
celsius = float(input("Digite a temperatura em °C: "))

# A expressão multiplica a temperatura por 1.8 e soma 32
fahrenheit = celsius * 1.8 + 32

print("A temperatura em Fahrenheit é:")
print(fahrenheit)
```

**Explicação:** Usamos `float(input(...))` porque temperaturas podem ter casas decimais (como `25.5`). A multiplicação `celsius * 1.8` é executada antes da adição `+ 32` devido à prioridade dos operadores matemáticos.

---

## Exercício 2: Área e Perímetro de um Retângulo

**Enunciado:** Escreva um programa que peça a largura e a altura de um retângulo, calcule e imprima a sua **área** e o seu **perímetro**.
- Fórmula da Área: $\text{largura} \times \text{altura}$
- Fórmula do Perímetro: $2 \times (\text{largura} + \text{altura})$

### Solução

```python
largura = float(input("Digite a largura do retângulo: "))
altura = float(input("Digite a altura do retângulo: "))

# Cálculo da área (multiplicação simples)
area = largura * altura

# Os parênteses garantem que a soma (largura + altura) ocorra antes da multiplicação por 2
perimetro = 2 * (largura + altura)

print("Área do retângulo:", area)
print("Perímetro do retângulo:", perimetro)
```

**Explicação:** O uso de parênteses `(largura + altura)` é fundamental no cálculo do perímetro. Se escrevêssemos `2 * largura + altura`, o Python multiplicaria `2 * largura` primeiro e depois somaria a `altura`, gerando um resultado errado!

---

## Exercício 3: Cálculo de Desconto em uma Compra

**Enunciado:** Escreva um programa que solicite o preço original de um produto (em R$) e o percentual de desconto concedido (em %). O programa deve calcular e imprimir o valor final do produto após aplicar o desconto.
- Fórmula: $\text{Preço Final} = \text{Preço} - \left(\text{Preço} \times \frac{\text{Desconto}}{100}\right)$

### Solução

```python
preco = float(input("Digite o preço do produto (R$): "))
desconto_pct = float(input("Digite o percentual de desconto (%): "))

# A expressão calcula o valor em R$ do desconto e subtrai do preço original
preco_final = preco - (preco * (desconto_pct / 100))

print("Preço final com desconto: R$")
print(preco_final)
```

**Explicação:** Primeiro calculamos o valor absoluto do desconto dividindo o percentual por `100` e multiplicando pelo `preco`. Em seguida, subtraímos esse valor do preço inicial.

---

## Exercício 4: Média Ponderada

**Enunciado:** Escreva um programa que receba duas notas de um aluno. Sabendo que a primeira nota tem **peso 2** e a segunda nota tem **peso 3**, calcule e imprima a média ponderada do aluno.
- Fórmula: $\frac{\text{nota}_1 \times 2 + \text{nota}_2 \times 3}{2 + 3}$

### Solução

```python
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))

# Definindo os pesos das avaliações
peso1 = 2
peso2 = 3

# Os parênteses isolam o numerador e o denominador da divisão
media_ponderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)

print("A média ponderada do aluno é:")
print(media_ponderada)
```

**Explicação:** Os parênteses no numerador `(nota1 * peso1 + nota2 * peso2)` e no denominador `(peso1 + peso2)` garantem que a soma de todos os produtos seja calculada e dividida pela soma total dos pesos (`5`).

---

## Exercício 5: Teorema de Pitágoras (Hipotenusa)

**Enunciado:** Escreva um programa que receba o comprimento dos dois catetos de um triângulo retângulo e calcule o comprimento da hipotenusa.
- Fórmula: $h = \sqrt{a^2 + b^2} = (a^2 + b^2)^{0.5}$

### Solução

```python
cateto_a = float(input("Digite o valor do primeiro cateto: "))
cateto_b = float(input("Digite o valor do segundo cateto: "))

# Eleva os catetos ao quadrado, soma-os e tira a raiz quadrada usando ** 0.5
hipotenusa = (cateto_a**2 + cateto_b**2) ** 0.5

print("O valor da hipotenusa é:")
print(hipotenusa)
```

**Explicação:** Em Python, a radiciação (raiz quadrada) pode ser feita elevando uma expressão a `0.5`. Os parênteses externos `(cateto_a**2 + cateto_b**2)` garantem que a soma dos quadrados seja calculada antes de extrair a raiz quadrada.

---

## Exercício 6: Decomposição de Segundos em Horas, Minutos e Segundos

**Enunciado:** Escreva um programa que leia um valor inteiro em segundos e o converta para o formato de **Horas, Minutos e Segundos**.
- Dica: $1 \text{ hora} = 3600 \text{ segundos}$, $1 \text{ minuto} = 60 \text{ segundos}$. Use a divisão inteira `//` e o resto da divisão `%`.

### Solução

```python
total_segundos = int(input("Digite o tempo total em segundos: "))

# Quantas horas inteiras cabem no total de segundos?
horas = total_segundos // 3600

# O resto da divisão por 3600 traz os segundos excedentes (que não formam 1 hora cheia)
resto_segundos = total_segundos % 3600

# Quantos minutos inteiros cabem nos segundos restantes?
minutos = resto_segundos // 60

# Os segundos finais são o resto da divisão por 60
segundos = resto_segundos % 60

print("Horas:", horas)
print("Minutos:", minutos)
print("Segundos:", segundos)
```

**Explicação:** O operador `//` descobre quantas unidades completas cabem no valor (horas ou minutos), enquanto `%` extrai a sobra que será passada para a etapa seguinte.

---

# Soluções dos Exercícios: Operadores Lógicos e Comparação

## Exercício 7: Aprovação por Nota e Frequência

**Enunciado:** Peça a nota final do aluno e a sua frequência (em %). O aluno é aprovado se a nota for maior ou igual a `7.0` **E** a frequência for maior ou igual a `75%`. Imprima `True` ou `False`.

### Solução

```python
nota = float(input("Digite a nota final: "))
frequencia = float(input("Digite a frequência (%): "))

# Ambas as condições precisam ser verdadeiras para o 'and' retornar True
aprovado = (nota >= 7.0) and (frequencia >= 75)

print("O aluno foi aprovado?")
print(aprovado)
```

**Explicação:** O operador `and` garante que o resultado só seja `True` se o aluno cumprir tanto o requisito de nota quanto o de frequência ao mesmo tempo.

---

## Exercício 8: Montanha-Russa no Parque

**Enunciado:** Para andar na montanha-russa, a pessoa precisa ter no mínimo `1.50m` de altura **E** no mínimo `12` anos de idade. Peça a altura e a idade e imprima `True` se puder andar ou `False` caso contrário.

### Solução

```python
altura = float(input("Digite a sua altura em metros (ex: 1.65): "))
idade = int(input("Digite a sua idade em anos: "))

# A pessoa precisa ter altura suficiente E idade suficiente
pode_andar = (altura >= 1.50) and (idade >= 12)

print("Pode andar na montanha-russa?")
print(pode_andar)
```

---

## Exercício 9: Meia-Entrada no Cinema

**Enunciado:** Peça a idade de uma pessoa e se ela é estudante (`1` se for ou `0` se não for). A pessoa tem direito à meia-entrada se for menor de 18 anos **OU** tiver 60 anos ou mais. Se for estudante, ela tem direito independente da idade. Imprima `True` ou `False`.

### Solução

```python
idade = int(input("Digite a sua idade: "))
eh_estudante = bool(int(input("Você é estudante? (1 para sim, 0 para não): ")))

# Tem direito se for estudante OR se tiver < 18 anos OR se tiver >= 60 anos
meia_entrada = eh_estudante or (idade < 18) or (idade >= 60)

print("Tem direito à meia-entrada?")
print(meia_entrada)
```

**Explicação:** Lembre que podemos converter inteiros em booleanos com a função `bool()`. Se o usuário digitar 1, o resultado é True. Se digitar 0, o resultado é False. Note também que 

---

## Exercício 10: Aprovação de Empréstimo Bancário (Desafio)

**Enunciado:** Um banco aprova empréstimo se o cliente tiver idade entre `21` e `65` anos, renda mensal de no mínimo `R$ 2500` **E NÃO** estiver com o nome negativado (`1` se estiver negativado ou `0` se não estiver). Peça esses dados ao usuário e imprima se o empréstimo foi aprovado (`True` ou `False`).

### Solução

```python
idade = int(input("Digite a sua idade: "))
renda = float(input("Digite a sua renda mensal (R$): "))
negativado = int(input("Seu nome está negativado? (1 para sim, 0 para não): ")) == 1

# Expressão combinando comparação de faixa de idade, renda e a negação (not) do negativado
emprestimo_aprovado = (21 <= idade <= 65) and (renda >= 2500.0) and not negativado

print("Empréstimo aprovado?")
print(emprestimo_aprovado)
```

**Explicação:** O operador `not negativado` inverte o booleano `negativado`. Se o cliente NÃO está negativado (`negativado = False`), a expressão `not False` se torna `True`, permitindo que o `and` aprove o empréstimo.

---

## Exercício 11: Ano Bissexto (Desafio Master)

**Enunciado:** Peça um ano ao usuário (ex: `2024`) e determine se ele é bissexto. Um ano é bissexto se for divisível por 4 **E NÃO** for divisível por 100, **OU** se for divisível por 400. Imprima `True` ou `False`.

### Solução

```python
ano = int(input("Digite um ano para verificar: "))

# Um número é divisível por outro se o resto da divisão (%) for igual a 0
eh_bissexto = (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0)

print("O ano é bissexto?")
print(eh_bissexto)
```

**Explicação:** Os parênteses `(ano % 4 == 0 and ano % 100 != 0)` garantem que a primeira regra combinada seja testada antes do `or` com a regra especial de divisibilidade por 400.


