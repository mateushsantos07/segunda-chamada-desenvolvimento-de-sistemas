
# Recuperação/Segunda Chamada Avaliativa I - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Desenvolvimento de Sistemas
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais, estruturas de repetição e estruturas de dados.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Crie um algoritmo para um calcular o valor de uma hospedagem. Você deve solicitar ao usuário a quantidade de diárias e também a idade do hospede. Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. Ao final o algoritmo deve informar o valor total da hospedagem.

    Menor ou igual a 5 dias - R$100,00 a diária
    De 6 até 10 dias - R$90,00 a diária
    A partir de 11 dias - R$80,00 a diária

---

### Questão 02
Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

Celsius para Fahrenheit = F = (C * 1.8) + 32 Fahrenheit para Celsius = C = (F - 32) * (5/9)

Celsius para Kelvin = K = C + 273.15 Kelvin para Celsius = C = K - 273.15

Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32

---

### Questão 03
Crie um algoritmo que leia uma quantidade `n` de números inteiros fornecida pelo usuário e armazene esses números em um vetor. O
algoritmo deve parar de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média
desses números, a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

---

### Questão 04
Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.

```javascript
var char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&']
```

---

### Questão 05
Escreva um algoritmo para verificar se uma roleta de cassino é viciada. A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma cor tem uma frequência maior que 40%. Se houver, o programa deve indicar que a roleta pode estar viciada.

---

### Questão 06
Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. Armazene os dados em um vetor de objetos. Ao final, o programa deve:
  - Imprimir o nome e o preço de cada produto.
  - Calcular e exibir o preço médio dos produtos.
  - Calcular e exibir o preço total

---

