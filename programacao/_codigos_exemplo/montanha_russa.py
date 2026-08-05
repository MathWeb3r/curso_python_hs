idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura em metros: "))

if idade > 12:
    if altura > 1.30: 
        print("Liberado!")
    else:
        print("Você não é alto suficiente")
else:
    print("Você é novo demais")
