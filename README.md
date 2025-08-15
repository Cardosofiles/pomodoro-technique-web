# Pomodoro Technique Web

Aplicação web para gerenciamento de tempo baseada na Técnica Pomodoro, permitindo ao usuário organizar tarefas, controlar ciclos de foco e descanso e acompanhar o histórico de produtividade.

---

## Principais funcionalidades e casos de uso

- Temporizador personalizável para ciclos de foco (Pomodoro) e descanso
- Cadastro, edição e exclusão de tarefas
- Histórico de ciclos concluídos e produtividade
- Notificações sonoras ou visuais ao final de cada ciclo (se habilitado)
- Pausa e reinício dos ciclos a qualquer momento
- Interface intuitiva e responsiva para desktop e mobile

---

## Stack e tecnologias utilizadas

- **Frontend:** ReactJS
- **Linguagem:** TypeScript
- **Gerenciamento de rotas:** React Router
- **Estilização:** Styled-components ou CSS Modules
- **Gerenciamento de estado:** Context API ou Redux (conforme implementação)
- **Outros:** dotenv para variáveis de ambiente, localStorage para persistência local

---

## Estrutura de pastas

```
pomodoro-technique-web/
├── public/                # Arquivos estáticos (index.html, favicon, etc)
├── src/
│   ├── assets/            # Imagens, ícones e recursos visuais
│   ├── components/        # Botões, temporizador, listas, modais, etc
│   ├── contexts/          # Contextos globais (tarefas, ciclos, etc)
│   ├── hooks/             # Hooks personalizados
│   ├── pages/             # Páginas e rotas principais (Home, Histórico)
│   ├── routes/            # Definição e configuração das rotas
│   ├── services/          # Serviços auxiliares (ex: notificações)
│   ├── styles/            # Estilos globais e temas
│   ├── utils/             # Funções utilitárias
│   ├── App.tsx            # Componente principal da aplicação
│   └── main.tsx           # Ponto de entrada da aplicação React
├── .env.example           # Exemplo de variáveis de ambiente
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

### Explicação das principais partes

- **public/**: Arquivos acessíveis diretamente pelo navegador.
- **src/assets/**: Imagens e ícones usados na interface.
- **src/components/**: Componentes reutilizáveis como botões, temporizador, listas de tarefas, etc.
- **src/contexts/**: Gerenciamento global dos estados, como tarefas e ciclos.
- **src/hooks/**: Hooks customizados para lógica reutilizável.
- **src/pages/**: Páginas principais como o painel Pomodoro e histórico.
- **src/routes/**: Configuração das rotas de navegação.
- **src/services/**: Serviços auxiliares, como integração com notificações do navegador.
- **src/styles/**: Estilos globais e temas.
- **src/utils/**: Funções utilitárias para manipulação de tempo e dados.

---

## Instalação e execução local

### Pré-requisitos

- Node.js (18.x+ recomendado)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Cardosofiles/pomodoro-technique-web.git
   cd pomodoro-technique-web
   ```

2. **Configure as variáveis de ambiente**
   - Copie o arquivo `.env.example` para `.env` e ajuste conforme necessário.

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Acesse a aplicação**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## Como executar testes

```bash
npm test
# ou
yarn test
```

---

## Exemplos de uso das funcionalidades

- **Iniciar um ciclo Pomodoro:**  
  Selecione uma tarefa ou crie uma nova, defina o tempo e clique em "Iniciar".
- **Pausar ou resetar o ciclo:**  
  Use os botões de pausa ou reset durante o ciclo ativo.
- **Visualizar histórico:**  
  Acesse a página de histórico para ver os ciclos concluídos e o tempo total produtivo.

---

## Boas práticas e recomendações

- Utilize variáveis de ambiente para dados sensíveis e configurações.
- Prefira componentes reutilizáveis para manter a aplicação organizada.
- Escreva testes para componentes críticos e lógica de negócio.
- Realize revisões de código e mantenha dependências atualizadas.
- Siga os padrões de contribuição do repositório para issues e pull requests.

---

*Contribuições são bem-vindas! Em caso de dúvidas, abra uma issue ou envie um pull request.*

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>

