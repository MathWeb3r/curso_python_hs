numero = int(input("Digite o número: "))
divisor = int(input("Digite o divisor: "))

# calcula o resto da divisão inteira
resto = numero % divisor

# verifica se o resto é zero 
# lembrando que 0 em Python é "Falso"
if not resto:
    print(f"{numero} é divisível por {divisor}")
else:
    print(f"{numero} não é divisível por {divisor}")
    print(f"O resto da divisão de {numero} por {divisor} é {resto}")
    

    