# Planejamento — Leitor de HQ

## 1. Objetivo

Desenvolver uma plataforma web que permita ao usuário criar uma biblioteca pessoal de quadrinhos e documentos, realizando o upload de seus próprios arquivos para armazenamento em nuvem.

O sistema terá como foco proporcionar uma experiência de leitura confortável, rápida e organizada, permitindo que o usuário mantenha seus arquivos sincronizados entre dispositivos sem necessidade de gerenciá-los manualmente.

Inicialmente, o desenvolvimento será realizado de maneira gradual, começando pela interface e pela leitura local dos arquivos antes da implementação de contas, banco de dados e armazenamento em nuvem.

---

# 2. Público-alvo

Pessoas que gostam de histórias em quadrinhos, mangás, HQs e documentos digitais e desejam manter uma biblioteca pessoal organizada e acessível pela web.

O foco será proporcionar uma experiência simples e confortável de leitura.

---

# 3. Formatos previstos

Inicialmente:

* CBZ
* CBR
* PDF

Possíveis formatos adicionais poderão ser avaliados futuramente.

---

# 4. Funcionalidades previstas

## Leitor

* Abrir arquivos locais;
* Ler CBZ;
* Ler CBR;
* Ler PDF;
* Navegar entre páginas;
* Página anterior e próxima página;
* Visualização contínua ou página por página;
* Zoom;
* Tela cheia;
* Ajustes de leitura;
* Marcador de página;
* Salvamento do progresso de leitura.

## Biblioteca

* Exibição dos arquivos do usuário;
* Capas ou miniaturas;
* Organização por pastas;
* Organização por coleções;
* Alteração de título;
* Busca;
* Ordenação;
* Identificação do progresso de leitura.

## Conta

* Cadastro;
* Login;
* Logout;
* Sessão do usuário;
* Recuperação de conta posteriormente.

## Arquivos

* Upload;
* Exclusão;
* Renomeação;
* Armazenamento em nuvem;
* Associação do arquivo ao proprietário da conta.

---

# 5. Stack tecnológica

## Ambiente de desenvolvimento

### GitHub

Responsável por:

* armazenar o repositório;
* histórico das alterações;
* commits;
* branches;
* documentação do projeto.

### GitHub Codespaces

Será utilizado como ambiente de desenvolvimento em nuvem.

Permitirá desenvolver o projeto pelo navegador ou pelo Visual Studio Code utilizando um ambiente associado diretamente ao repositório.

---

## Runtime

### Node.js

Node.js será a base de execução JavaScript utilizada pelo projeto.

Ele será necessário para:

* executar o Next.js;
* instalar dependências;
* executar scripts;
* futuramente executar funcionalidades de servidor.

Durante o desenvolvimento será utilizada uma versão LTS do Node.js.

---

## Frontend

### React

Responsável pela construção dos componentes da interface.

Exemplos:

* menu lateral;
* cards dos quadrinhos;
* botões;
* leitor;
* barra de navegação;
* modal de upload;
* telas da biblioteca.

### Next.js

Framework principal da aplicação React.

Será responsável inicialmente por:

* estrutura do projeto;
* páginas;
* navegação;
* componentes;
* carregamento da aplicação;
* organização entre código executado no navegador e no servidor.

Será utilizado o **App Router**.

A estrutura principal ficará dentro de:

```text
app/
```

A página inicial será:

```text
app/page.js
```

O layout compartilhado ficará em:

```text
app/layout.js
```

---

## Linguagem

Inicialmente:

```text
JavaScript
```

Não será necessário introduzir TypeScript durante as primeiras fases do projeto.

Ele poderá ser estudado e adotado futuramente caso passe a trazer vantagens para o projeto.

---

## Estilização

Inicialmente será utilizado:

```text
CSS
```

O objetivo será primeiro compreender e construir a interface sem adicionar bibliotecas de estilização desnecessárias.

---

# 6. Backend

O backend será introduzido apenas depois que o leitor local estiver funcionando.

Como Next.js já permite criar rotas de servidor, inicialmente poderemos utilizar:

```text
app/api/
```

Exemplo:

```text
app/
└── api/
    └── arquivos/
        └── route.js
```

Essas rotas poderão posteriormente cuidar de operações como:

* upload;
* leitura de informações;
* comunicação com banco de dados;
* autenticação;
* comunicação com armazenamento.

Conforme o projeto crescer, será avaliada a necessidade de separar o backend em uma aplicação própria utilizando:

```text
Node.js + NestJS
```

Portanto, NestJS deixa de ser uma obrigação imediata e passa a ser uma decisão arquitetural futura.

---

# 7. Banco de dados

Planejado:

```text
PostgreSQL
```

O banco não armazenará os arquivos CBR, CBZ ou PDF propriamente ditos.

Ele armazenará informações sobre eles.

Exemplo:

```text
Usuário
├── id
├── nome
├── email
└── senha

Arquivo
├── id
├── nome
├── formato
├── tamanho
├── capa
├── endereço do arquivo
├── usuário
└── data de upload

Progresso
├── arquivo
├── usuário
├── página atual
└── última leitura
```

---

# 8. ORM

Planejado:

```text
Prisma
```

O Prisma fará a comunicação entre a aplicação Node.js e o PostgreSQL.

Exemplo conceitual:

```text
Next.js / Node.js
        ↓
      Prisma
        ↓
   PostgreSQL
```

A implementação será feita somente quando chegarmos à fase de banco de dados.

---

# 9. Armazenamento dos arquivos

Planejado:

```text
Cloudflare R2
```

O R2 armazenará os arquivos enviados pelos usuários.

Exemplo:

```text
quadrinho.cbz
manga.cbr
documento.pdf
```

O PostgreSQL armazenará apenas as informações relacionadas ao arquivo e sua localização.

Fluxo:

```text
Usuário
   ↓
Upload
   ↓
Servidor
   ↓
Cloudflare R2
```

Enquanto isso:

```text
PostgreSQL
   ↓
guarda metadados
   ↓
nome
usuário
capa
progresso
endereço do arquivo
```

---

# 10. Autenticação

Planejada para uma fase posterior.

Possível estrutura:

```text
JWT
+
Refresh Token
```

A autenticação somente será implementada depois que:

1. a interface estiver funcionando;
2. o leitor local estiver funcionando;
3. o backend básico estiver funcionando;
4. o banco de dados estiver conectado.

---

# 11. Funcionamento dos formatos

## CBZ

Um arquivo CBZ é essencialmente um arquivo ZIP contendo imagens.

Fluxo planejado:

```text
CBZ
 ↓
descompactação
 ↓
imagens
 ↓
ordenação
 ↓
leitor
```

---

## CBR

Um arquivo CBR utiliza normalmente um contêiner RAR.

Fluxo:

```text
CBR
 ↓
descompactação
 ↓
imagens
 ↓
ordenação
 ↓
leitor
```

Será necessária uma biblioteca compatível com RAR.

---

## PDF

O PDF terá tratamento próprio.

Fluxo:

```text
PDF
 ↓
biblioteca de leitura
 ↓
páginas
 ↓
renderização
 ↓
leitor
```

---

# 12. Arquitetura geral prevista

```text
USUÁRIO
   │
   ▼
NAVEGADOR
   │
   ▼
NEXT.JS + REACT
   │
   ├──────────── Interface
   │
   ├──────────── Leitor
   │
   └──────────── API
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      PostgreSQL        Cloudflare R2
          │                   │
     metadados            arquivos
     usuários            CBR / CBZ
     progresso              PDF
```

No começo, porém, teremos apenas:

```text
USUÁRIO
   ↓
NEXT.JS + REACT
   ↓
ARQUIVO LOCAL
   ↓
LEITOR
```

Isso permite desenvolver o núcleo do projeto sem depender ainda de servidor, conta, banco ou nuvem.

---

# 13. Fases do desenvolvimento

## FASE 1 — Interface estática

Objetivo:

Construir a aparência da aplicação.

Implementar:

* página inicial;
* menu lateral;
* biblioteca;
* cards;
* botões;
* navegação;
* tela do leitor;
* tela de upload;
* identidade visual;
* responsividade básica.

Tecnologias utilizadas:

```text
Next.js
React
JavaScript
CSS
```

Nenhum backend será necessário.

---

## FASE 2 — Leitor local

Objetivo:

Fazer o leitor realmente funcionar utilizando arquivos existentes no computador do usuário.

Fluxo:

```text
Selecionar arquivo
       ↓
Identificar formato
       ↓
Processar arquivo
       ↓
Extrair páginas
       ↓
Exibir no leitor
```

Implementar gradualmente:

### 2.1

Seleção de arquivo local.

### 2.2

Identificação do formato.

```text
CBZ
CBR
PDF
```

### 2.3

Leitura de CBZ.

### 2.4

Exibição das imagens.

### 2.5

Navegação entre páginas.

### 2.6

Leitura de PDF.

### 2.7

Leitura de CBR.

### 2.8

Zoom, fullscreen e modos de leitura.

Nesta fase:

```text
SEM login
SEM PostgreSQL
SEM Cloudflare R2
SEM autenticação
SEM upload para servidor
```

Tudo continuará local.

---

## FASE 3 — Backend / API

Objetivo:

Começar a comunicação entre frontend e servidor.

Inicialmente utilizando recursos do próprio Next.js.

Criar rotas para testes como:

```text
/api
/api/arquivos
/api/usuario
```

Aprender e implementar:

* requisição;
* resposta;
* GET;
* POST;
* DELETE;
* tratamento de erros;
* comunicação frontend → servidor.

---

## FASE 4 — Banco de dados

Adicionar:

```text
PostgreSQL
+
Prisma
```

Criar os primeiros modelos:

```text
User
File
Folder
ReadingProgress
```

A aplicação passa a conseguir salvar informações permanentemente.

---

## FASE 5 — Cadastro e autenticação

Implementar:

* criação de usuário;
* login;
* logout;
* proteção de rotas;
* sessão;
* identificação do proprietário dos arquivos.

Fluxo:

```text
Usuário
 ↓
Login
 ↓
Servidor
 ↓
Banco
 ↓
Sessão
 ↓
Biblioteca pessoal
```

---

## FASE 6 — Upload e Cloudflare R2

Conectar:

```text
Next.js
   ↓
API
   ↓
Cloudflare R2
```

Implementar:

* envio;
* armazenamento;
* recuperação;
* exclusão;
* validação;
* associação do arquivo ao usuário.

---

## FASE 7 — Biblioteca pessoal

Integrar tudo que foi construído.

```text
Conta
+
Banco
+
Arquivos
+
Leitor
```

Implementar:

* biblioteca do usuário;
* capas;
* pastas;
* coleções;
* progresso;
* busca;
* ordenação;
* edição.

---

## FASE 8 — Melhorias

Depois que o núcleo estiver funcionando:

* modo claro;
* modo escuro;
* opções de fundo do leitor;
* marcadores;
* histórico;
* continuar lendo;
* thumbnails automáticas;
* atalhos de teclado;
* fullscreen;
* configurações de leitura;
* otimização de desempenho;
* layout mobile.

---

# 14. Estrutura inicial do novo repositório

Durante as primeiras fases, manter a estrutura simples:

```text
LEITOR-HQ/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── public/
│
├── docs/
│   └── planejamento.md
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.js
└── README.md
```

Conforme novas partes forem necessárias:

```text
LEITOR-HQ/
│
├── app/
│   ├── api/
│   ├── biblioteca/
│   ├── leitor/
│   ├── upload/
│   ├── layout.js
│   └── page.js
│
├── components/
│
├── lib/
│
├── public/
│
├── docs/
│
├── package.json
└── README.md
```

Não é necessário criar todas essas pastas agora.

Elas deverão surgir conforme o projeto realmente precisar delas.

---

# 15. Regra de desenvolvimento

O projeto seguirá uma regra simples:

> Não implementar uma tecnologia apenas porque ela aparece na arquitetura final.

Cada ferramenta será introduzida quando existir um problema real que ela precise resolver.

Portanto:

```text
Interface
   ↓
Leitor
   ↓
Servidor
   ↓
Banco
   ↓
Conta
   ↓
Nuvem
   ↓
Biblioteca completa
```

---

# 16. Estado atual do projeto

Atualmente já temos a base de desenvolvimento preparada:

```text
GitHub
     ↓
GitHub Codespaces
     ↓
Node.js
     ↓
Next.js
     ↓
React
     ↓
JavaScript + CSS
```

A partir deste ponto, o projeto entra oficialmente na:

# FASE 1 — INTERFACE ESTÁTICA

Enquanto construímos a interface, começaremos a trabalhar diretamente dentro da arquitetura que será utilizada pelo projeto real.

Quando a interface estiver suficientemente estruturada, seguiremos para:

# FASE 2 — LEITOR LOCAL

Essa será a primeira fase em que o projeto deixará de ser apenas uma interface e começará efetivamente a funcionar como leitor.
