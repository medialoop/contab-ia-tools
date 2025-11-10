# Assistente Contábil - Interface Híbrida de Chatbot e Conteúdo Contábil

Uma aplicação web em React (SPA) que fornece um painel interativo de obrigações contábeis e calculadoras com um chatbot explicativo lateral.

## 🚀 Características

- **Interface híbrida** com navegação por abas (Nacionais, Estaduais, Municipais, Trabalhistas, Calculadoras)
- **Chatbot contextual** que explica cada obrigação selecionada
- **Calculadoras interativas** para INSS, IRRF, Simples Nacional, multas e juros
- **SEO otimizado** com meta tags dinâmicas via React Helmet
- **Design responsivo** com Tailwind CSS
- **Ícones modernos** usando Heroicons

## 📋 Conteúdo

### Obrigações Nacionais
- DCTF / DCTFWeb
- ECF (Escrituração Contábil Fiscal)
- ECD (Escrituração Contábil Digital)
- EFD-Contribuições
- DIRF
- eSocial

### Obrigações Estaduais
- EFD-ICMS/IPI
- GIA
- SINTEGRA

### Obrigações Municipais
- NFS-e
- DES / DMISS / DIM
- LFE

### Obrigações Trabalhistas
- RAIS
- GFIP
- CAGED
- eSocial (aspectos trabalhistas)

### Calculadoras
- Calculadora de INSS (empregado e empresa)
- Calculadora de IRRF
- Simples Nacional estimado
- Multa por atraso
- Juros sobre tributos

## 🛠️ Tecnologias

- **React 19** - Framework principal
- **React Router 7** - Roteamento SPA
- **Tailwind CSS 3** - Estilização
- **React Helmet Async** - SEO e meta tags dinâmicas
- **Heroicons** - Ícones
- **Vite** - Build tool e dev server

## 📦 Instalação

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎨 Estrutura do Projeto

```
accounting-chatbot/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Cabeçalho e navegação
│   │   ├── ObligationCard.jsx      # Card de obrigação
│   │   ├── Chatbot.jsx             # Chatbot contextual
│   │   └── calculators/            # Calculadoras
│   │       ├── CalculatorWrapper.jsx
│   │       ├── CalculatorINSS.jsx
│   │       ├── CalculatorIRRF.jsx
│   │       ├── CalculatorSimples.jsx
│   │       ├── CalculatorMulta.jsx
│   │       └── CalculatorJuros.jsx
│   ├── pages/
│   │   ├── Home.jsx                # Página inicial
│   │   └── CategoryPage.jsx        # Página de categoria
│   ├── data/
│   │   └── obligations.js          # Dados de obrigações
│   ├── App.jsx                     # Componente principal
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globais
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🌐 Funcionalidades da Interface

### Navegação
- Abas no topo para cada categoria
- URLs limpas e SEO-friendly
- Navegação sem reload (SPA)

### Área Principal
- **Coluna Esquerda**: Grade de cards com obrigações/calculadoras
- **Coluna Direita**: Chatbot ou calculadora interativa

### Chatbot
- Respostas contextuais baseadas na obrigação selecionada
- FAQ automatizada
- Links para referências oficiais
- Interface de chat simulada

### Calculadoras
- Campos interativos para entrada de dados
- Cálculos em tempo real
- Referências às fontes oficiais (Gov.br, Receita Federal, Banco Central)
- Explicações detalhadas dos resultados

## 📚 Referências Oficiais

Todas as informações são baseadas em fontes oficiais:
- [Receita Federal](https://www.gov.br/receitafederal/)
- [Portal do eSocial](https://www.gov.br/esocial/)
- [Portal do Simples Nacional](http://www8.receita.fazenda.gov.br/SimplesNacional/)
- [Banco Central - Taxa SELIC](https://www.bcb.gov.br/controleinflacao/taxaselic)

## 🎯 SEO

- Meta tags dinâmicas por rota
- Títulos descritivos
- Descrições otimizadas
- URLs semânticas

## 📱 Responsividade

- Design mobile-friendly
- Layout adaptativo
- Navegação otimizada para touch

## ⚠️ Aviso Legal

As informações fornecidas são baseadas na legislação vigente e referências oficiais. Para orientações específicas sobre sua situação, consulte sempre um contador profissional.

## 📝 Licença

Este projeto foi criado para fins educacionais e de demonstração.
