---
title: "Hello World"
sidebar_position: 1 #coisa pro docusaurus
slug: "hello-world"
---

# Bem-vindo ao fascinante universo da computação!

## Uma pequena motivação (Nota do autor)
Depois de alguns semestre como estudante de física, percebi que havia algo de estranho em como o programação era apresentado para nós. Durante as disciplinas de programação, aqueles que já tinham algum conhecimento em programação conseguiam aprender a aplica-los, enquanto aqueles que não tinham ficavam cade vez mais confusos com aquilo. O que leva muitos a se sentirem incapazes ou intimidados quando o assunto é computação. Nosso objetivo aqui é mudar essa realidade! Se você chegou até aqui e não tem nenhuma experiência prévia com programação, não se preocupe, a ideia aqui é proporcionar um guia desmistificado, partindo do zero, com o básico da programação e suas aplicações à Física (nao gostei desse ultimo periodo). 

## Pra quem são essas aulas?
Para aquelas pessoas que a curiosidade é maior do que qualquer ferramenta. Não é preciso ter nenhum conhecimento prévio em programação, mas é preciso ter vontade de aprender. Como cientistas (ou futuros cientistas!) somos movidos pelo desejo inquieto de entender como as coisas funcionam, de conseguir enxergar os padrões escondidos por trás do caos.

## Quais são as competências que você vai adquirir dessas aulas?
Temos como objetivo apresentar esse universo, com base em três pilares fundamentais para se desenvolver na física (?)

1. Aulas de Programação

    em python, variaveis, listas, funcoes, algoritimos, oop, etc..

2. Aprendendo a desenvolver projetos

    IDE's, git e github, project management, etc...

3. Aulas em Análise de Dados e Aplicações na Física

    modelagem, fittin, plotting, statistcs, etc..

> Quote (vou inserir futuramente, aguarde)

# Nossa linguagem de programação: Python!

Ainda não temos uma linguagem de programação definida, mas a nossa vai ser Python! Mas por quê Python? Ela é ao mesmo tempo simples e poderosa. Fácil para Iniciantes e boa para experientes. No vasto mapa do mundo do desenvolvimento, existem muitas linguagens, mas o Python se tornou a língua da ciência moderna

- **Simplicidade e Clareza**: A escrita é limpa, muito próxima da forma como explicamos um problema a outro ser humano.
- **Poder Científico**: É a ferramenta preferida em lugares como a NASA e o CERN para processar dados de telescópios e aceleradores de partículas.

- **Ecossistema Pronto**: Ele já vem com o que chamamos de "baterias incluídas", oferecendo estruturas prontas para que você foque na física e não apenas na manutenção da máquina.


## Instalando Python

Visite o site oficial do Python: https://www.python.org/downloads/

- Windows

O site oficial do [Python](https://www.python.org) detecta automaticamente o sistema operacional e oferece a versão correta para download.

- Linux

sla

Após instalar abra o terminal do sistema operacional (No windows: <kbd>Ctrl</kbd> + <kbd>R</kbd> e digite 'cmd'. No linux <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> ) e digite python3. Se tudo der certo você verá algo parecido com isso:

```
Python 3.10.11 (main, ...)
[GCC ...] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

## Brincando um pouco com Python (REPL)

O Python possui um modo chamado REPL (Read-Eval-Print Loop), onde ele lê o que você escreve, executa e te responde na hora. Digite python no seu terminal e você verá o prompt `>>>`.

Nosso primeiro contato, digite o comando abaixo, aperte <kbd>Enter</kbd> e veja a máquina te saudar:

```python
>>> print("Olá, Mundo!")
Olá, Mundo!
```

O `print()` é uma função básica que exibe texto ou resultados na tela. Repare que a coisa que está entre parenteses está entre aspas duplas ``" "``, isso é sinal de que essa coisa tem formato de texto (Você verá que isso define um tipo chamado `string`, mas não se preocupe com os nomes agora)

> Existe uma superstição que se o seu primeiro comando não for `print("Olá, Mundo!")`, você terá má sorte na sua jornada de aprendizado e coisas terríveis aconterão! Não sou muito supersticioso, mas eu não brincaria com isso...  

Explorando Números e Lógica. Diferente da matemática pura, no computador os números têm "tipos" e precisões finitas.

- **Inteiros (int)**: Números como 1, 10 ou -5
- **Reais (float)**: Números com casas decimais, como 9.81 ou 3.14159
- **Lógicos (bool)**: O mundo binário de True (Verdadeiro) ou False (Falso)
.
Tente fazer algumas operações simples como 10 + 15, 5 ** 2 (para potências) ou 10 / 3 e observe como ele se comporta
. Se cometer um erro, não se preocupe: mensagens de erro são apenas diagnósticos para te ajudar a ajustar o rumo, algo que faz parte da vida de qualquer desenvolvedor

## Nosso primeiro programa

Um arquivo de python é apenas um arquivo de texto contendo código de python. Dito isso, vamos criar um arquivo chamado hello_world.py e colocar o seguinte código dentro dele:

```python
# Aqui vamos imprimir uma mensagem na tela
print("Meu primeito script em python :)")

# Uma conta simples
a = 2 + 3
print(a)


```