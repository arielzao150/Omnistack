# Sumário

 - [Requisitos](https://github.com/arielzao150/Omnistack#requisitos)
 - [Criando a base da aplicação](https://github.com/arielzao150/Omnistack#criando-a-base-da-aplica%C3%A7%C3%A3o)

# Requisitos

- Powershell Core
- Chocolatey
- NodeJS 10.16.3
- Yarn 1.19.0
- VS Code
- Insomnia (64 bits) ou Postman (32 bits)
  

Extensões do VS Code:

- Dracula Theme
- Material Icon Theme
- Rocketspeak React Native
- Rocketspeak ReactJS
- Font Fira Code

  

Example of VSCode Settings JSON
  

    {
	    "workbench.colorTheme": "Dracula",
	    "workbench.iconTheme": "material-icon-theme",
	    "editor.fontFamily": "Fira Code",
	    "editor.fontLigatures": true,    
    }

  

# Criando a base da aplicação

Rode o seguinte código na pasta do projeto:

    yarn init -y

  
Note que o arquivo package.json foi criado. Neste arquivo ficarão as dependências do projeto.

Em seguida rode:

    yarn add express

Note que foi criada a pasta node_modules, o arquivo yarn.lock, e que a seção dependecies foi criada dentro do arquivo package.json e indica o express como uma das dependências.

yarn.lock gera um cache das dependências instaladas, ou seja, não precisamos nos preocupar com este arquivo, pois ele é gerado automaticamente.

Já a pasta node_modules contém o código das dependências do projeto, e podemos achar o express, e todas as suas dependências dentro desta pasta.

Agora vamos criar uma pasta chamada "src" e dentro dela o arquivo "server.js", que será usado para inicializar o servidor.

Para executar a aplicação, execute:

    node src/server.js

Se fizermos alguma mudança no projeto, o node não irá reiniciar com as novas mudanças automaticamente. Para que isso aconteça, primeiro instale o Nodemon com

    yarn add nodemon -D

O parâmetro "-D" indica que a dependência será somente para ambientes de Desenvolvimento, ou seja, não irá para o servidor em produção.

Em seguida adicione o seguinte trecho de código ao arquivo package.json:

    "scripts": {
        "dev": "nodemon src/server.js"
    },

Então, para executar o projeto, use no terminal:

    yarn dev

parei em 23:00 aula 2
