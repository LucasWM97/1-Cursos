# Form

Este é um projeto de um site de formulário que permite que os usuários se cadastrem preenchendo campos obrigatórios. O site possui campos para nome, e-mail, ano de nascimento, cidade de prova, período da prova, cursos com maior interesse e senha para recuperação.

<img src ="https://github.com/LucasW97/Form/blob/main/fotos/1.png">

## Funcionalidades
Página de Cadastro: a página inicial do site é a página de cadastro, onde o usuário pode inserir as informações solicitadas em cada campo. Todos os campos são obrigatórios e possuem validação específica para garantir que as informações sejam inseridas corretamente.

Validação de Campos: cada campo tem sua própria validação, garantindo que as informações sejam inseridas no formato correto. Por exemplo, o campo de e-mail é validado para garantir que um endereço de e-mail válido seja inserido.

Botão de Cadastro: o botão "Salvar" só cadastra se todos os campos forem preenchidos corretamente.

Senha para Recuperação: o campo de senha para recuperação permite que o usuário defina uma senha para recuperar sua conta no futuro, caso seja necessário.

## Campos do Formulário
Nome: campo de texto para inserir o nome completo do usuário.

E-mail: campo de texto para inserir o endereço de e-mail do usuário. Validado para garantir que um endereço de e-mail válido seja inserido.

Ano de Nascimento: campo de texto para inserir o ano de nascimento do usuário. Validado para garantir que o valor inserido seja um número de 4 dígitos.

Cidade de Prova: campo de texto para inserir o nome da cidade onde o usuário fará a prova.

Período da Prova: campo de seleção para escolher o período em que o usuário fará a prova. As opções são "Manhã", "Tarde" e "Noite".

Cursos com Maior Interesse: campo de seleção múltipla para escolher os cursos de maior interesse do usuário. As opções são "Matematica", "Ciência da Computação" e "Data Science".

Senha para Recuperação: campo de texto para definir uma senha para recuperar a conta no futuro, caso seja necessário. Validado para garantir que a senha tenha pelo menos 8 caracteres.

## Validações dos Campos

Nome: campo obrigatório, com no mínimo 3 caracteres.

E-mail: campo obrigatório, validado para garantir que um endereço de e-mail válido seja inserido.

Ano de Nascimento: campo obrigatório, validado para garantir que o valor inserido seja um número de 4 dígitos.

Cidade de Prova: campo obrigatório, selecionar 1 cidade.

Período da Prova: campo obrigatório.

Cursos com Maior Interesse: campo obrigatório, deve selecionar pelo menos um curso.

Senha para Recuperação: campo obrigatório, deve ter no mínimo 8 caracteres.
