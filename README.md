<div align="center">

  <img src="./assets/zaapbot.png" height=150 />

  <h1>Zaapbot</h1>

</div>

### Note

-   Zaapbot is in early development, so all APIs are subject to change.
-   This code is unaudited. Use at your own risk.
-   All contributions are welcome.

# Table of contents:

-   [Table of contents:](#table-of-contents)
    -   [Developing Locally](#developing-locally)
        -   [Prerequisites](#prerequisites)
        -   [Pull the code](#pull-the-code)
        -   [Install dependencies](#install-dependencies)
        -   [Setup local environment](#setup-local-environment)
        -   [Start required module](#start-required-module)
    -   [License](#license)

## Developing Locally

_Setup video goes here_

### Prerequisites

-   node ^18.0.0
-   yarn ^3.6.3

### Pull the code

```bash
git clone git@github.com:EpsilonProtocol/zaapbot.git
cd zaapbot
```

### Install dependencies

run `yarn install` in the monorepo root folder

### Setup local environment

Clone the `.env.example` file to `.env` and set your own environment variables

### Start required module

You can start the module using `yarn dev --filter {module_name}`.

Starting the api

```bash
yarn dev --filter api
```

Starting the web

```bash
yarn dev --filter web
```

## License

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion by you shall be licensed at the discretion of the repository maintainers without any additional terms or conditions.
