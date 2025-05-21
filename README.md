
# 🏨 Hotel Booking App

Plataforma moderna de reservas de hotéis desenvolvida com **Next.js**, **React 19**, **Node.js** e infraestrutura escalável utilizando **AWS** (EC2, RDS, S3 e Cognito). A interface sera construída com **Shadcn UI**, garantindo uma experiência  acessível e responsiva para os users.

## ✨ Features

- 🔐 Autenticação segura com **AWS Cognito**
- 🏨 Cadastro e listagem de hotéis
- 📆 Sistema de reservas com verificação de disponibilidade
- 📸 Upload de imagens de hotéis e quartos com **AWS S3**
- 💾 Banco de dados relacional escalável com **Amazon RDS (PostgreSQL)**
- ⚙️ Backend hospedado em **AWS EC2**
- 🎨 Interface moderna com **Shadcn UI**
- ⚡ SSR e ISR via **Next.js 15**

---

## 🚀 Tecnologias e Ferramentas

| Stack         | Tecnologia                |
|---------------|---------------------------|
| Frontend      | React 19, Next.js 15      |
| UI Library    | Shadcn UI (Radix + Tailwind) |
| Backend       | Node.js, Express          |
| Autenticação  | AWS Cognito               |
| Banco de Dados| Amazon RDS (PostgreSQL)   |
| Armazenamento | AWS S3                    |
| Hospedagem    | AWS EC2                   |
| ORM           | Prisma                    |
| Deploy        | AWS CLI, GitHub Actions   |

---

## 🧠 Estrutura do Projeto

```bash
.
├── src
│   ├── app                
│   ├── components        
│   ├── lib                
│   ├── prisma             
│   ├── services        
│   ├── styles            
│   └── types             
├── public                
├── .env.local            
└── README.md
```

🔧 Configuração Local

1. Clone o repositório

```bash

git clone https://github.com/seu-usuario/hotel-booking-app.git
cd hotel-booking-app

```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Configure o .env.development

Crie um .env.development  na raiz do projeto e preencha com suas credenciais:

```bash
DATABASE_URL="postgresql://user:password@host:port/dbname"
NEXT_PUBLIC_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
COGNITO_USER_POOL_ID=xxxxxxxxxxxxxxxxxxxx
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET_NAME=hotel-booking-images
```

4. Execute o projeto

```bash
npm run dev
```

☁️ Deploy na AWS
1. Crie uma instância EC2 com Node.js instalado

2. Configure variáveis de ambiente no servidor

3. Faça o build da aplicação:

```bash
npm run build
```


4. Agora é só iniciar com um gerenciador de processos como PM2:

```bash
pm2 start npm --name "hotel-booking" -- start
```

✅ Roadmap
- [x] Autenticação com AWS Cognito

- [x] Integração com AWS S3 para upload de imagens

- [x] CRUD de hotéis e quartos

- [x] Sistema de reservas com verificação de disponibilidade

- [ ] Integração com meios de pagamento

- [x] Painel administrativo completo

- [ ] Avaliações e comentários de hóspedes

✅ Funcionalidades Futuras

- [ ] Configure CZ commit
- [ ] Config Husky
- [ ] Create Jest config
- [ ] Refactor AUthComponent
- [ ] Create Translations Page and dashboard
- [ ] Integração com sistema de pagamentos (Stripe, Mercado Pago)
- [ ] Painel administrativo completo
- [ ] Avaliação de usuários
- [ ] Integração com IA para recomendações (Scrapper IA com scraperless)
- [ ] Estudo de integração do scraperless com n8n