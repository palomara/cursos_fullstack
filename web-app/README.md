This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Missão backend

Desenvolver uma **API JSON RESTful** em **Node**, que utilize todos os métodos (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).  
Faça o teste unitário da **API** (Bônus :star:)

### Especificação

Monte uma base de cursos com a seguinte estrutura:

```
title:       string
subtitle:    string
startedAt:   datetime
description: text
isActive:    bool
created:     datetime
updated:     datetime
```

Utilize **MongoDB** ou **MySQL** para armazenar os dados que a **API** irá consumir.

### API endpoints

`GET /courses`

Retorna todos os cursos

---

`GET /courses/find`

Retorna os cursos de acordo com o termo passado parâmetro `q`

---

`GET /courses/{id}`

Retorna os detalhes do curso

---

`POST /courses`

Adiciona um novo curso

---

`PUT /courses/{id}`

Atualiza os dados de um curso

---

`PATCH /courses/{id}`

Atualiza apenas alguns dados do curso

---

`DELETE /courses/{id}`

Apaga o curso


## Missão frontend

Desenvolver uma **UI (User Interface)** em **ReactJS** utilizando a sua criatividade, deve conter no minimo:

- tela de listagem/busca
- tela de edição/novo

### Especificação

- Cross browser support (IE11+)
- Consumir **API** criada acima
- Criar uma tela que tenha...
    - Listagem de cursos
    - Detalhe do curso
    - Busca
    - Formulário de novo/edição de curso
    - Deletar curso

### Dica

Utilize algum framework para auxiliar no desenvolvimento da interface, por exemplo:

- https://getmdl.io/
- https://material-ui.com/
- http://getbootstrap.com/
