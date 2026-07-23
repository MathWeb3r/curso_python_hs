# Bem-vindo ao fascinante universo da computação!

## Uma pequena motivação (Nota do autor)
Depois de alguns semestres como estudante de física, percebi que havia algo de estranho em como a programação era apresentada para nós. Durante as disciplinas de programação, aqueles que já tinham algum conhecimento em programação conseguiam aprender a aplicá-los, enquanto aqueles que não tinham ficavam cada vez mais confusos com aquilo. O que leva muitos a se sentirem incapazes ou intimidados quando o assunto é computação. Nosso objetivo aqui é mudar essa realidade! Se você chegou até aqui e não tem nenhuma experiência prévia com programação, não se preocupe, a ideia aqui é proporcionar um guia desmistificado, partindo do zero, com o básico da programação e suas aplicações à Física. Espero que possam desfrutar desse percurso tanto quanto eu.

> "Não existe uma estrada real para a ciência, e
somente aqueles que não temem a fadiga de galgar suas
trilhas escarpadas têm chance de atingir seus cumes
luminosos." - Karl Marx.

> "alguma outra coisa legal" - algum autor 

## Para quem são estas aulas?
Para aquelas pessoas cuja curiosidade é maior do que qualquer ferramenta. Não é preciso ter nenhum conhecimento prévio em programação, mas é preciso ter vontade de aprender. Como cientistas (ou futuros cientistas!) somos movidos pelo desejo inquieto de entender como as coisas funcionam, de conseguir enxergar os padrões escondidos por trás do caos.

Ao mesmo tempo, espero que aqueles que já tenham algum conhecimento também possam relembrar alguns conceitos e, quem sabe, aprender algo novo.

Além de ensinar a programar, espero ensinar o aluno a aprender. Fez sentido isso? O mundo da computação tem conteúdo virtualmente infinito, é impossível unir tudo em apenas um livro, site ou curso. Ser autodidata é uma qualidade essencial para o cientista, e como qualquer outra habilidade, pode ser aprendida. Muitas vezes, ao desenvolver programas, você se verá diante de problemas ou erros que não conseguirá resolver, e terá que recorrer aos fóruns, sites, documentações, etc. Isso é completamente normal e corriqueiro na vida de todo programador. 

## Como estudar com essas aulas
Acredito que não seja possível aprender a programar apenas lendo ou assistindo aulas. A prática e a repetição são indispensáveis. Então, a minha recomendação é: Mantenha essas aulas abertas no seu navegador e vá acompanhando os exemplos, executando-os em seu computador. Depois, tente modificar os exemplos um pouco e ver o que acontece. Por fim, tente fazer os exercícios propostos (se tiver algum). E, acima de tudo, não tenha medo de errar!

Ao longo dos artigos vai haver blocos de código, como este:

```
Exemplo de bloco de código
```

Nesses blocos vão aparecer tanto trechos de código quanto comandos de terminal, ou mesmo os resultados de um comando. Estes serão nossos exemplos. Minha dica de aprendizado: **Escreva** os exemplos no seu computador, ao invés de copiar e colar. Confie em mim, isso vai ajudar bastante! ;D

# Nossa linguagem de programação: Python!

> "So it begins" - Senhor dos Anéis

A linguagem de programação que vamos utilizar neste curso é o Python. Mas por que Python? Ela é ao mesmo tempo simples e poderosa. Fácil para iniciantes e boa para experientes. No vasto mapa do mundo do desenvolvimento, existem muitas linguagens, mas o Python se tornou a língua da ciência moderna.

- **Simplicidade e Clareza**: A escrita é limpa, muito próxima da forma como explicamos um problema a outro ser humano.
- **Poder Científico**: É a ferramenta preferida em lugares como a NASA e o CERN para processar dados de telescópios e aceleradores de partículas.

- **Ecossistema Pronto**: Ele já vem com o que chamamos de "baterias incluídas", oferecendo estruturas prontas para que você foque na física e não apenas na manutenção da máquina.


## Instalando Python

Visite o site oficial do Python: https://www.python.org/downloads/

- Windows

O site oficial do [Python](https://www.python.org) detecta automaticamente o sistema operacional e oferece a versão correta para download.

- Linux

sla

Após instalar, abra o terminal do sistema operacional (No Windows: <kbd>Ctrl</kbd> + <kbd>R</kbd> e digite 'cmd'. No Linux: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>) e digite `python3` (ou `python`, dependendo da sua instalação).

```bash
$ python3 --version
```
> ℹ️ **Informação:** O símbolo `$` é apenas para indicar que o comando deve ser digitado no terminal, não precisa digitá-lo. No seu computador deve aparecer algo como: `c:\Users\computador>` ou `computador@linux:~$`.

Se a instalação der certo, você verá algo parecido com isto:

```bash
Python 3.12.3
```

> ℹ️ **Informação:** O número da versão pode ser diferente, depende de qual versão do Python você instalou. Inclusive, quando estiver lendo isso, já deve existir uma versão mais nova. Recomendo que instale a versão mais recente disponível.

> Já conhecia o terminal? Não?! Nesse caso, acredito que podemos fazer uma introdução formal! Olhando para a tela do seu computador, diga em voz alta: "Olá terminal, meu nome é ([Seu nome])!". Ele provavelmente não vai responder...


## Brincando um pouco com Python (REPL)

O Python possui um modo chamado REPL (Read-Eval-Print Loop), que é este que nós iniciamos após digitar `python3` (ou `python`) no terminal. Nele, o Python lê o que você escreve, executa e te responde na hora. Você verá o prompt `>>>`, que indica que o Python está esperando um comando.

```
$ python3
Python 3.12.3 (main, Jun 19 2026, 12:46:00) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

Nosso primeiro contato, digite o comando abaixo, aperte <kbd>Enter</kbd> e veja a máquina te saudar:

```python
>>> print("Olá, Mundo!")
Olá, Mundo!
```

O `print()` é uma função básica que exibe texto ou resultados na tela. Repare que a coisa que está entre parênteses está escrita entre aspas duplas ``" "``, isso é sinal de que essa coisa tem formato de texto (Você verá que isso define um tipo chamado `string`, mas não se preocupe com os nomes agora).

> 💡 **Dica:** Dizem por aí que existe uma superstição de que se o seu primeiro comando não for `print("Olá, Mundo!")`, você terá má sorte na sua jornada de aprendizado e coisas terríveis acontecerão! Não sou muito supersticioso, mas eu não brincaria com isso...  

Vamos fazer algumas operações matemáticas, tente fazer isso no seu terminal:

```python
>>> 2 + 2
4
```
```python
>>> 3 * 2
6
```
```python
>>> 10 / 3
3.3333333333333335
```
```python
>>> 10 / 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Aqui temos a soma (escrita com `+`), multiplicação (escrita com `*`) e divisão (escrita com `/`). Em breve veremos outras operações. 

Repare que o último comando, tentando realizar uma divisão por zero, não deu certo, ele gerou um erro. Não se preocupe, isso é normal! Mas repare que a mensagem de erro nos diz exatamente o que aconteceu: `ZeroDivisionError: division by zero`. Isso é uma das belezas do Python, ele é bem descritivo. Sempre que um erro acontecer, leia a mensagem de erro e tente entender o que aconteceu. 


Para encerrar o REPL, digite `exit()`:

```python
>>>exit()
$
```

## Nosso primeiro programa

Um arquivo Python é apenas um arquivo de texto contendo código em Python. Dito isso, vamos criar um arquivo chamado `hello_world.py` e colocar o seguinte código dentro dele. O tipo de arquivo `.py` é um tipo de arquivo de texto comum, e pode ser aberto com o Bloco de Notas (no Windows) ou qualquer editor de texto (e.g. Nano, no Linux). Escreva o texto abaixo dentro do arquivo:

```python
# Aqui vamos imprimir uma mensagem na tela
print("Meu primeiro script :)")

# Uma conta simples
a = 10 + 5
print(a)
```

Agora, abra o terminal na mesma pasta que você salvou o arquivo. Pode ser clicando com o botão direito do mouse na pasta e selecionando "Abrir terminal" (no Windows), ou pelo terminal usando o comando `cd` para navegar até a pasta onde você salvou o arquivo.

```bash
$ cd nome_da_pasta
```

Então digite o comando abaixo:

```bash
$ python3 hello_world.py
```

E você verá como resposta:

```bash
Meu primeiro script :)
15
```

Parabéns, você acabou de executar o seu primeiro programa em Python! Ao digitar `python3 nome_do_arquivo.py` você está pedindo ao interpretador do Python para ler e executar o código que está dentro do arquivo. 

## O que está acontecendo aqui?
(Mostrar o número de linhas no site)

```python
# Aqui vamos imprimir uma mensagem na tela
print("Meu primeiro script :)")

# Uma conta simples
a = 10 + 5
print(a)
```

Python é uma linguagem interpretada, o que significa que o interpretador (o programa que executa o código) lê o código linha por linha e executa cada linha. Mais amplamente, é uma linguagem imperativa, isto é, você diz ao computador o que fazer, passo a passo. Cada passo é uma instrução, ou, _statement_.

No nosso programa temos 3 statements:
- `print("Meu primeiro script :)")`
- `a = 10 + 5`
- `print(a)`

As linhas que começam com `#` são comentários, e são ignorados pelo interpretador. São muito úteis, especialmente quando estamos desenvolvendo programas mais longos, pois ajudam a explicar o que o código faz.

Na primeira linha, temos o statement `print("Meu primeiro script :)")`. Este statement usa a função `print()`. A função `print()` é uma função embutida do Python (_Built-in function_), ou seja, ela já vem instalada. No futuro nós criaremos nossas próprias funções.

```bash
Meu primeiro script :)
```

> ℹ️ **Informação:** Repare que a função `print()` cria uma nova linha no terminal toda vez que é chamada. Este é o comportamento padrão, mas pode ser alterado.

Na terceira linha temos o statement `a = 10 + 5`. Este _statement_ é o que chamamos de atribuição (_assignment_ em inglês). Basicamente estamos criando uma variável chamada `a` e atribuindo o valor `10 + 5` a ela. O Python vai calcular `10 + 5`, obter o resultado `15` e armazenar esse valor na variável `a`. Em breve vamos discutir melhor o que são variáveis e como elas funcionam. Então quando chamamos a função `print(a)` na quarta linha, o Python vai buscar o valor armazenado na variável `a` e imprimir na tela.

```bash
15
``` 

