export const obligationsData = {
  nacionais: [
    {
      id: 'dctf',
      name: 'DCTF / DCTFWeb',
      description: 'Declaração de Débitos e Créditos Tributários Federais',
      icon: 'DocumentTextIcon',
      content: {
        title: 'DCTFWeb - Declaração de Débitos e Créditos Tributários Federais',
        summary: 'A DCTFWeb é a declaração utilizada para confissão de débitos de contribuições previdenciárias, do IRRF (Imposto sobre a Renda Retido na Fonte) e de contribuições destinadas a terceiros, substituindo a GFIP (Guia de Recolhimento do FGTS e de Informações à Previdência Social) para este fim.',
        periodicity: 'Mensal - até o dia 15 do mês seguinte ao da ocorrência dos fatos geradores',
        legalBasis: 'Instrução Normativa RFB nº 2.005/2021',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'A DCTFWeb é obrigatória para todas as empresas que possuem empregados ou que tenham efetuado retenções de IRRF',
          'Deve ser transmitida mesmo quando não houver débitos a declarar (declaração sem débitos)',
          'A declaração é vinculada aos eventos do eSocial',
          'Após a transmissão, é gerado o DARF para pagamento dos tributos',
          'A não entrega ou entrega em atraso está sujeita a multa'
        ],
        faqs: [
          {
            question: 'Qual o prazo de entrega?',
            answer: 'A DCTFWeb deve ser entregue até o dia 15 do mês seguinte ao da ocorrência dos fatos geradores. Quando não houver expediente bancário, o prazo é prorrogado para o dia útil imediatamente posterior.'
          },
          {
            question: 'Quem está obrigado a entregar?',
            answer: 'Todas as pessoas jurídicas de direito privado e equiparadas que estão obrigadas a escriturar os fatos geradores e os créditos tributários das contribuições previdenciárias e das contribuições devidas a terceiros no âmbito do eSocial.'
          },
          {
            question: 'O que acontece se não entregar?',
            answer: 'A não apresentação da DCTFWeb no prazo fixado ou a sua apresentação com incorreções ou omissões acarretará aplicação de multa de 2% ao mês-calendário ou fração, incidente sobre o montante dos tributos declarados, ainda que integralmente pago, limitada a 20%.'
          }
        ]
      }
    },
    {
      id: 'ecf',
      name: 'ECF',
      description: 'Escrituração Contábil Fiscal',
      icon: 'CalculatorIcon',
      content: {
        title: 'ECF - Escrituração Contábil Fiscal',
        summary: 'A ECF é uma obrigação acessória anual que substitui a Declaração de Informações Econômico-Fiscais da Pessoa Jurídica (DIPJ). Nela devem ser informados todos os documentos e operações que fundamentam a apuração do IRPJ e da CSLL.',
        periodicity: 'Anual - até o último dia útil do mês de julho do ano seguinte',
        legalBasis: 'Instrução Normativa RFB nº 1.422/2013',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped',
        details: [
          'Obrigatória para todas as pessoas jurídicas, inclusive imunes e isentas',
          'Empresas do Simples Nacional estão dispensadas',
          'Deve conter informações sobre a apuração do IRPJ e da CSLL',
          'A escrituração deve ser transmitida em formato digital',
          'Integra o projeto SPED (Sistema Público de Escrituração Digital)'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a ECF?',
            answer: 'Todas as pessoas jurídicas tributadas com base no Lucro Real, Lucro Presumido ou Lucro Arbitrado. Empresas optantes pelo Simples Nacional estão dispensadas da entrega.'
          },
          {
            question: 'Qual é o prazo?',
            answer: 'A ECF deve ser transmitida até o último dia útil do mês de julho do ano seguinte ao ano-calendário a que se refere a escrituração.'
          },
          {
            question: 'Qual a multa por atraso?',
            answer: 'A multa por atraso na entrega é de R$ 500,00 por mês-calendário ou fração para pessoas jurídicas inativas, e R$ 1.500,00 por mês-calendário ou fração para pessoas jurídicas ativas.'
          }
        ]
      }
    },
    {
      id: 'ecd',
      name: 'ECD',
      description: 'Escrituração Contábil Digital',
      icon: 'BookOpenIcon',
      content: {
        title: 'ECD - Escrituração Contábil Digital',
        summary: 'A ECD é a escrituração contábil de forma digital das informações contábeis das empresas. Substitui a escrituração em papel e deve conter todos os registros de fatos contábeis de forma cronológica.',
        periodicity: 'Anual - até o último dia útil do mês de maio do ano seguinte',
        legalBasis: 'Instrução Normativa RFB nº 2.003/2021',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped',
        details: [
          'Faz parte do projeto SPED (Sistema Público de Escrituração Digital)',
          'Obrigatória para empresas tributadas pelo Lucro Real',
          'Também obrigatória para empresas tributadas pelo Lucro Presumido que distribuíram lucros sem incidência de IRRF',
          'A escrituração é transmitida em arquivo digital assinado',
          'Dispensa a impressão e autenticação dos livros contábeis'
        ],
        faqs: [
          {
            question: 'Quem está obrigado a entregar?',
            answer: 'Pessoas jurídicas tributadas pelo Lucro Real e aquelas tributadas pelo Lucro Presumido que distribuíram lucros acima do valor apurado com base na escrituração, sem incidência de IRRF.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'O prazo para transmissão é até o último dia útil do mês de maio do ano seguinte ao ano-calendário a que se refere a escrituração.'
          },
          {
            question: 'A ECD substitui quais livros?',
            answer: 'A ECD substitui os livros Diário, Razão, Balancetes Diários, Balanços e fichas de lançamento comprobatórias dos assentamentos neles transcritos.'
          }
        ]
      }
    },
    {
      id: 'efd-contribuicoes',
      name: 'EFD-Contribuições',
      description: 'Escrituração Fiscal Digital das Contribuições PIS/PASEP e COFINS',
      icon: 'ClipboardDocumentListIcon',
      content: {
        title: 'EFD-Contribuições - PIS/PASEP e COFINS',
        summary: 'A EFD-Contribuições é um arquivo digital que contém informações sobre as contribuições sociais PIS/PASEP e COFINS, escrituradas pelas pessoas jurídicas de direito privado na apuração das contribuições no regime não-cumulativo.',
        periodicity: 'Mensal - até o 10º dia útil do 2º mês subsequente',
        legalBasis: 'Instrução Normativa RFB nº 1.252/2012',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped',
        details: [
          'Obrigatória para todas as pessoas jurídicas sujeitas à apuração de PIS/COFINS',
          'Deve conter informações sobre receitas, custos e créditos',
          'Integra o SPED - Sistema Público de Escrituração Digital',
          'A transmissão é feita através do programa validador e assinador (PVA)',
          'Empresas do Simples Nacional estão dispensadas'
        ],
        faqs: [
          {
            question: 'Quando devo entregar?',
            answer: 'A EFD-Contribuições deve ser transmitida até o 10º dia útil do segundo mês subsequente ao mês de referência da escrituração. Por exemplo, a escrituração de janeiro deve ser entregue até o 10º dia útil de março.'
          },
          {
            question: 'Quais empresas estão obrigadas?',
            answer: 'Todas as pessoas jurídicas de direito privado na apuração da Contribuição para o PIS/Pasep e da Cofins, nos regimes de apuração não-cumulativo e/ou cumulativo, e da Contribuição Previdenciária sobre a Receita.'
          },
          {
            question: 'Qual a multa por não entrega?',
            answer: 'A multa é de 0,25% por mês-calendário ou fração, incidente sobre a receita bruta da pessoa jurídica no período, limitada a 10%.'
          }
        ]
      }
    },
    {
      id: 'dirf',
      name: 'DIRF',
      description: 'Declaração do Imposto sobre a Renda Retido na Fonte',
      icon: 'BanknotesIcon',
      content: {
        title: 'DIRF - Declaração do Imposto sobre a Renda Retido na Fonte',
        summary: 'A DIRF é utilizada para informar à Receita Federal os valores de imposto de renda e contribuições retidos na fonte, além de informações sobre rendimentos pagos a pessoas físicas e jurídicas.',
        periodicity: 'Anual - até o último dia útil de fevereiro do ano seguinte',
        legalBasis: 'Instrução Normativa RFB nº 1.990/2020',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Obrigatória para pessoas físicas e jurídicas que efetuaram retenções de IRRF',
          'Deve conter informações de rendimentos pagos e retenções efetuadas',
          'Importante para cruzamento de informações pela Receita Federal',
          'Serve de base para a declaração de IRPF das pessoas físicas',
          'A transmissão é feita através do programa gerador da DIRF'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a DIRF?',
            answer: 'Pessoas físicas e jurídicas que pagaram ou creditaram rendimentos com retenção de imposto de renda na fonte, ainda que em um único mês do ano-calendário.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'A DIRF deve ser apresentada até o último dia útil do mês de fevereiro do ano subsequente ao ano-calendário a que se referir a declaração.'
          },
          {
            question: 'Quais rendimentos devem ser informados?',
            answer: 'Devem ser informados todos os rendimentos pagos ou creditados, inclusive aluguéis, serviços prestados, pró-labore, salários, pensões, entre outros, que tenham sofrido retenção de IRRF.'
          }
        ]
      }
    },
    {
      id: 'esocial',
      name: 'eSocial',
      description: 'Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas',
      icon: 'UsersIcon',
      content: {
        title: 'eSocial - Escrituração Digital das Obrigações Fiscais',
        summary: 'O eSocial é um projeto do governo federal que unifica o envio de informações trabalhistas, previdenciárias e fiscais por parte dos empregadores. Visa a simplificar o cumprimento de obrigações e eliminar a redundância nas informações.',
        periodicity: 'Conforme ocorrência dos eventos - prazos variáveis',
        legalBasis: 'Decreto nº 8.373/2014',
        reference: 'https://www.gov.br/esocial/pt-br',
        details: [
          'Unifica 15 obrigações acessórias em uma única declaração',
          'Organizado em eventos que devem ser transmitidos conforme ocorrência',
          'Eventos iniciais, tabelas, não periódicos e periódicos',
          'Obrigatório para todos os empregadores e contribuintes',
          'Substituiu obrigações como GFIP, CAGED, RAIS, entre outras'
        ],
        faqs: [
          {
            question: 'Quais obrigações o eSocial substitui?',
            answer: 'O eSocial substitui obrigações como GFIP, CAGED, RAIS, CAT, DIRF (parcialmente), Livro de Registro de Empregados, Folha de Pagamento, entre outras.'
          },
          {
            question: 'Quais são os prazos dos eventos?',
            answer: 'Os prazos variam conforme o tipo de evento: eventos iniciais (antes do primeiro evento periódico), eventos de tabela (antes de sua utilização), eventos não periódicos (conforme ocorrência) e eventos periódicos (mensalmente até o dia 15 do mês seguinte).'
          },
          {
            question: 'O que acontece em caso de atraso?',
            answer: 'O atraso na transmissão de eventos pode gerar multas e impedir a emissão de certidões negativas. As penalidades variam conforme a natureza do evento e podem alcançar valores significativos.'
          }
        ]
      }
    },
    {
      id: 'efd-reinf',
      name: 'EFD-Reinf',
      description: 'Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais',
      icon: 'DocumentMagnifyingGlassIcon',
      content: {
        title: 'EFD-Reinf - Retenções e Informações Fiscais',
        summary: 'A EFD-Reinf complementa o eSocial e é utilizada para escrituração de rendimentos pagos e retenções de Imposto de Renda, Contribuição Social do contribuinte excedente ao teto do RGPS, retenções na fonte (PIS, COFINS, CSLL) incidentes sobre pagamentos diversos.',
        periodicity: 'Mensal - varia conforme o grupo',
        legalBasis: 'Instrução Normativa RFB nº 2.043/2021',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped',
        details: [
          'Substituiu a DIRF a partir de 2025',
          'Deve ser transmitida por empresas que pagam ou creditam rendimentos com retenção',
          'Complementa as informações do eSocial',
          'Importante para apuração da DCTFWeb',
          'Organizada em eventos específicos'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a EFD-Reinf?',
            answer: 'Pessoas jurídicas e físicas que pagaram ou creditaram rendimentos com retenção na fonte de IR, CSLL, PIS/PASEP e COFINS, além de contribuições previdenciárias sobre receita bruta.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'O prazo varia conforme o grupo do contribuinte. Geralmente até o dia 15 do mês seguinte ao da ocorrência dos fatos geradores.'
          },
          {
            question: 'A EFD-Reinf substitui a DIRF?',
            answer: 'Sim, a partir de 2025 a DIRF foi descontinuada e suas informações passaram a ser prestadas exclusivamente através da EFD-Reinf e DCTFWeb.'
          }
        ]
      }
    },
    {
      id: 'defis',
      name: 'DEFIS',
      description: 'Declaração de Informações Socioeconômicas e Fiscais',
      icon: 'DocumentTextIcon',
      content: {
        title: 'DEFIS - Declaração Anual do Simples Nacional',
        summary: 'A DEFIS é a declaração anual obrigatória para empresas optantes pelo Simples Nacional (exceto MEI). Deve ser entregue mesmo que a empresa não tenha tido movimento no ano.',
        periodicity: 'Anual - até 31 de março do ano seguinte',
        legalBasis: 'Lei Complementar nº 123/2006',
        reference: 'http://www8.receita.fazenda.gov.br/SimplesNacional/',
        details: [
          'Obrigatória para todas as empresas do Simples Nacional',
          'MEI entrega DASN-SIMEI ao invés da DEFIS',
          'Deve ser entregue mesmo sem movimento',
          'Contém informações econômicas e fiscais do ano-calendário',
          'Permite retificar informações dos meses anteriores'
        ],
        faqs: [
          {
            question: 'Qual o prazo para entrega?',
            answer: 'A DEFIS deve ser entregue até 31 de março do ano seguinte ao ano-calendário. Por exemplo, a DEFIS de 2024 deve ser entregue até 31/03/2025.'
          },
          {
            question: 'O que acontece se não entregar?',
            answer: 'A não entrega da DEFIS no prazo pode resultar na exclusão da empresa do Simples Nacional, além de multa por atraso.'
          },
          {
            question: 'MEI precisa entregar DEFIS?',
            answer: 'Não, o Microempreendedor Individual (MEI) deve entregar a DASN-SIMEI ao invés da DEFIS.'
          }
        ]
      }
    },
    {
      id: 'dasn-simei',
      name: 'DASN-SIMEI',
      description: 'Declaração Anual do Simples Nacional para o MEI',
      icon: 'UserIcon',
      content: {
        title: 'DASN-SIMEI - Declaração Anual do MEI',
        summary: 'A DASN-SIMEI é a declaração anual obrigatória para Microempreendedores Individuais (MEI). Deve ser entregue mesmo que não tenha havido movimento ou faturamento no ano.',
        periodicity: 'Anual - até 31 de maio do ano seguinte',
        legalBasis: 'Resolução CGSN nº 140/2018',
        reference: 'http://www8.receita.fazenda.gov.br/SimplesNacional/',
        details: [
          'Obrigatória para todos os MEI',
          'Deve ser entregue mesmo sem faturamento',
          'Informa a receita bruta do ano anterior',
          'Necessária para manter o CNPJ regular',
          'Essencial para acesso a benefícios previdenciários'
        ],
        faqs: [
          {
            question: 'Qual o prazo de entrega?',
            answer: 'A DASN-SIMEI deve ser entregue até 31 de maio do ano seguinte ao ano-calendário. Por exemplo, a declaração de 2024 deve ser entregue até 31/05/2025.'
          },
          {
            question: 'O que acontece se não entregar?',
            answer: 'A não entrega pode resultar em multa, irregularidade do CNPJ e perda de benefícios previdenciários.'
          },
          {
            question: 'Preciso declarar se não tive faturamento?',
            answer: 'Sim, a DASN-SIMEI deve ser entregue mesmo sem faturamento, informando receita bruta zero.'
          }
        ]
      }
    },
    {
      id: 'pgdas-d',
      name: 'PGDAS-D',
      description: 'Programa Gerador do DAS - Declaratório',
      icon: 'CalculatorIcon',
      content: {
        title: 'PGDAS-D - Declaração e Cálculo do Simples Nacional',
        summary: 'O PGDAS-D é o sistema utilizado pelas empresas do Simples Nacional para calcular e declarar mensalmente os valores devidos e gerar o DAS (Documento de Arrecadação do Simples Nacional).',
        periodicity: 'Mensal - até o dia 20 do mês seguinte',
        legalBasis: 'Resolução CGSN nº 140/2018',
        reference: 'http://www8.receita.fazenda.gov.br/SimplesNacional/',
        details: [
          'Utilizado para calcular os tributos do Simples Nacional',
          'Gera o DAS para pagamento',
          'Deve ser transmitido mensalmente',
          'Permite informar substituição tributária',
          'Essencial para manter a regularidade no Simples'
        ],
        faqs: [
          {
            question: 'Qual o prazo para enviar o PGDAS-D?',
            answer: 'O PGDAS-D deve ser enviado até o dia 20 do mês seguinte ao da competência. O pagamento do DAS vence no mesmo dia 20.'
          },
          {
            question: 'E se não tiver faturamento no mês?',
            answer: 'Mesmo sem faturamento, é necessário acessar o PGDAS-D e informar receita bruta zero para manter a regularidade.'
          },
          {
            question: 'Posso retificar o PGDAS-D?',
            answer: 'Sim, é possível retificar a declaração através do próprio sistema, mas é necessário gerar e pagar um novo DAS com eventuais diferenças.'
          }
        ]
      }
    },
    {
      id: 'dirbi',
      name: 'DIRBI',
      description: 'Declaração de Incentivos, Renúncias, Benefícios e Imunidades',
      icon: 'ScaleIcon',
      content: {
        title: 'DIRBI - Declaração de Benefícios Fiscais',
        summary: 'A DIRBI é uma declaração que obriga as empresas a informar à Receita Federal os benefícios fiscais, incentivos, renúncias e imunidades tributárias que utilizam.',
        periodicity: 'Semestral - até 30 de setembro e 31 de março',
        legalBasis: 'Instrução Normativa RFB nº 2.198/2024',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Obrigatória para empresas que usufruem de benefícios fiscais',
          'Deve detalhar todos os incentivos utilizados',
          'Entrega semestral (janeiro a junho e julho a dezembro)',
          'Primeira entrega em 2024 referente ao 2º semestre',
          'Importante para transparência fiscal'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a DIRBI?',
            answer: 'Pessoas jurídicas que usufruírem de benefícios e incentivos de natureza tributária, inclusive sob a forma de isenção, redução de alíquota ou base de cálculo, crédito presumido, entre outros.'
          },
          {
            question: 'Quais são os prazos?',
            answer: 'Até 30 de setembro para o 1º semestre (janeiro a junho) e até 31 de março para o 2º semestre (julho a dezembro) do ano anterior.'
          },
          {
            question: 'O que acontece se não entregar?',
            answer: 'A não entrega ou entrega com incorreções pode resultar em multas e perda do direito ao benefício fiscal.'
          }
        ]
      }
    },
    {
      id: 'dme',
      name: 'DME',
      description: 'Declaração de Operações Liquidadas com Moeda em Espécie',
      icon: 'BanknotesIcon',
      content: {
        title: 'DME - Declaração de Operações em Espécie',
        summary: 'A DME é utilizada para informar à Receita Federal operações liquidadas em espécie (dinheiro) cujo valor seja igual ou superior a R$ 30.000,00 ou o equivalente em outra moeda.',
        periodicity: 'Mensal - até o último dia útil do mês seguinte',
        legalBasis: 'Instrução Normativa RFB nº 1.761/2017',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Obrigatória para operações acima de R$ 30.000,00 em espécie',
          'Visa combater lavagem de dinheiro e sonegação',
          'Deve informar dados das partes envolvidas',
          'Inclui operações de compra, venda, doação, etc.',
          'Multas podem ser aplicadas em caso de não entrega'
        ],
        faqs: [
          {
            question: 'Qual o valor mínimo para declarar?',
            answer: 'Devem ser declaradas operações em espécie de valor igual ou superior a R$ 30.000,00 ou o equivalente em outra moeda.'
          },
          {
            question: 'Quem deve entregar?',
            answer: 'Pessoas físicas e jurídicas residentes ou domiciliadas no Brasil que realizarem operações em espécie acima do limite estabelecido.'
          },
          {
            question: 'Qual o prazo?',
            answer: 'A DME deve ser apresentada até o último dia útil do mês subsequente àquele em que ocorreu a operação.'
          }
        ]
      }
    },
    {
      id: 'decred',
      name: 'DECRED',
      description: 'Declaração de Créditos e Débitos de Tributos Federais',
      icon: 'DocumentChartBarIcon',
      content: {
        title: 'DECRED - Declaração de Créditos e Débitos',
        summary: 'A DECRED é uma declaração utilizada para informar créditos e débitos de tributos federais relacionados a operações específicas, incluindo créditos de PIS/COFINS não-cumulativo.',
        periodicity: 'Semestral - conforme estabelecido pela RFB',
        legalBasis: 'Instrução Normativa RFB específica',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Utilizada para declarar créditos fiscais',
          'Importante para apuração de PIS/COFINS',
          'Entrega semestral',
          'Relacionada à EFD-Contribuições',
          'Deve ser preenchida com atenção aos detalhes'
        ],
        faqs: [
          {
            question: 'Quem deve entregar?',
            answer: 'Pessoas jurídicas que apuram créditos de tributos federais, especialmente relacionados a PIS e COFINS no regime não-cumulativo.'
          },
          {
            question: 'Qual a periodicidade?',
            answer: 'A DECRED é entregue semestralmente, conforme calendário estabelecido pela Receita Federal.'
          },
          {
            question: 'Qual a relação com a EFD-Contribuições?',
            answer: 'A DECRED complementa as informações da EFD-Contribuições, detalhando créditos apurados.'
          }
        ]
      }
    },
    {
      id: 'e-bef',
      name: 'e-BEF',
      description: 'Formulário Digital de Beneficiários Finais',
      icon: 'UserGroupIcon',
      content: {
        title: 'e-BEF - Formulário Digital de Beneficiários Finais',
        summary: 'O e-BEF é uma nova obrigação acessória criada pela Receita Federal para identificar pessoas naturais que, direta ou indiretamente, exercem controle ou influência significativa sobre entidades. Visa combater lavagem de dinheiro, ocultação de patrimônio e alinhar o Brasil às recomendações internacionais do GAFI e da OCDE.',
        periodicity: 'Anual - até o final do ano-calendário, ou quando houver alterações',
        legalBasis: 'Instrução Normativa RFB nº 2.290/2025',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Obrigação nova com vigência a partir de 1º de janeiro de 2026',
          'Identifica beneficiários finais de entidades (pessoas que exercem controle)',
          'Preenchimento via sistema e-CAC com assinatura digital',
          'Deve ser atualizado sempre que houver mudança nos beneficiários',
          'A não entrega ou entrega com erros resulta em suspensão do CNPJ',
          'Implementação gradual: 2026 (grandes empresas), 2027 (empresas com faturamento > R$ 78 milhões), 2028 (empresas > R$ 4,8 milhões)'
        ],
        faqs: [
          {
            question: 'Quem deve apresentar o e-BEF?',
            answer: 'Sociedades civis e comerciais, associações, cooperativas, fundações, entidades domiciliadas no exterior e fundos de investimento devem apresentar. A obrigatoriedade é gradual: grandes empresas já em 2026, empresas com faturamento acima de R$ 78 milhões em 2027, e empresas acima de R$ 4,8 milhões em 2028.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'O formulário deve ser apresentado anualmente até o final do ano-calendário. Além disso, deve ser atualizado sempre que houver mudança nos beneficiários finais da entidade.'
          },
          {
            question: 'O que acontece se não entregar?',
            answer: 'A não apresentação do e-BEF ou a apresentação com erros ou omissões resultará na suspensão do CNPJ, impedindo a entidade de operar com instituições financeiras e realizar diversas operações empresariais.'
          },
          {
            question: 'O que é um beneficiário final?',
            answer: 'Beneficiário final é a pessoa natural que, em última instância, direta ou indiretamente, possui, controla ou influencia significativamente a entidade. É quem efetivamente detém o poder de decisão sobre a empresa, mesmo que não apareça formalmente na estrutura societária.'
          },
          {
            question: 'Como enviar o e-BEF?',
            answer: 'O formulário deve ser preenchido através do sistema e-CAC (Centro Virtual de Atendimento) da Receita Federal, com assinatura digital dos responsáveis legais pela entidade.'
          }
        ]
      }
    }
  ],
  estaduais: [
    {
      id: 'efd-icms-ipi',
      name: 'EFD-ICMS/IPI',
      description: 'Escrituração Fiscal Digital do ICMS e IPI',
      icon: 'DocumentChartBarIcon',
      content: {
        title: 'EFD-ICMS/IPI - Escrituração Fiscal Digital',
        summary: 'A EFD-ICMS/IPI é um arquivo digital que constitui um conjunto de escriturações de documentos fiscais e de outras informações de interesse dos fiscos das unidades federadas e da Secretaria da Receita Federal do Brasil.',
        periodicity: 'Mensal - até o 15º dia do mês subsequente',
        legalBasis: 'Ajuste SINIEF 02/2009',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped',
        details: [
          'Substitui a escrituração de livros fiscais em papel',
          'Obrigatória para contribuintes do ICMS e/ou IPI',
          'Integra o projeto SPED',
          'Deve conter informações sobre entradas, saídas, apuração e inventário',
          'Cada estado possui suas particularidades e prazos específicos'
        ],
        faqs: [
          {
            question: 'Quem está obrigado?',
            answer: 'Contribuintes do ICMS e/ou IPI, conforme regulamentação de cada estado. A obrigatoriedade varia por estado e regime de apuração.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'Geralmente até o 15º dia do mês subsequente, mas pode variar por estado. Consulte a legislação específica da sua unidade federativa.'
          },
          {
            question: 'Quais informações devem constar?',
            answer: 'Dados cadastrais, documentos fiscais de entrada e saída, inventário, apuração do ICMS e IPI, controle de créditos fiscais, entre outras informações.'
          }
        ]
      }
    },
    {
      id: 'gia',
      name: 'GIA',
      description: 'Guia de Informação e Apuração do ICMS',
      icon: 'DocumentIcon',
      content: {
        title: 'GIA - Guia de Informação e Apuração do ICMS',
        summary: 'A GIA é uma declaração estadual que contém informações sobre operações e prestações realizadas pelos contribuintes do ICMS. Foi substituída pela EFD-ICMS/IPI em diversos estados, mas ainda é utilizada em alguns.',
        periodicity: 'Mensal - conforme legislação estadual',
        legalBasis: 'Legislação específica de cada estado',
        reference: 'Consulte a Secretaria da Fazenda do seu estado',
        details: [
          'Ainda utilizada em alguns estados que não adotaram a EFD-ICMS/IPI',
          'Contém informações sobre entradas, saídas e apuração do ICMS',
          'O prazo varia conforme a legislação estadual',
          'Pode ser enviada eletronicamente ou entregue em meio físico',
          'Vem sendo substituída gradualmente pela EFD-ICMS/IPI'
        ],
        faqs: [
          {
            question: 'A GIA ainda está em vigor?',
            answer: 'Depende do estado. Muitos estados já substituíram a GIA pela EFD-ICMS/IPI. Consulte a Secretaria da Fazenda do seu estado para verificar a obrigatoriedade.'
          },
          {
            question: 'Qual a diferença entre GIA e EFD-ICMS/IPI?',
            answer: 'A EFD-ICMS/IPI é mais completa e detalhada, fazendo parte do SPED. A GIA é uma declaração mais simplificada. A tendência é que todos os estados migrem para a EFD-ICMS/IPI.'
          },
          {
            question: 'Como entregar a GIA?',
            answer: 'A forma de entrega varia por estado. Pode ser através de aplicativo específico da Secretaria da Fazenda ou sistema online. Consulte o portal da SEFAZ do seu estado.'
          }
        ]
      }
    },
    {
      id: 'sintegra',
      name: 'SINTEGRA',
      description: 'Sistema Integrado de Informações sobre Operações Interestaduais com Mercadorias',
      icon: 'MapIcon',
      content: {
        title: 'SINTEGRA - Sistema Integrado de Informações',
        summary: 'O SINTEGRA é um sistema de informações interestaduais que permite o intercâmbio de informações fiscais entre as Secretarias de Fazenda dos estados. Foi amplamente substituído pela EFD-ICMS/IPI.',
        periodicity: 'Mensal - quando aplicável',
        legalBasis: 'Convênio ICMS 57/1995',
        reference: 'http://www.fazenda.gov.br/confaz',
        details: [
          'Utilizado para cruzamento de informações entre estados',
          'Praticamente substituído pela EFD-ICMS/IPI na maioria dos estados',
          'Continha informações sobre notas fiscais e movimentação de mercadorias',
          'Era gerado em arquivo de texto com layout específico',
          'Alguns estados ainda podem exigir para casos específicos'
        ],
        faqs: [
          {
            question: 'O SINTEGRA ainda é obrigatório?',
            answer: 'Na maioria dos estados, o SINTEGRA foi substituído pela EFD-ICMS/IPI. No entanto, alguns estados podem ainda exigir para situações específicas. Verifique com a SEFAZ do seu estado.'
          },
          {
            question: 'Qual a diferença para a EFD-ICMS/IPI?',
            answer: 'A EFD-ICMS/IPI é mais completa, integrada ao SPED e possui validações mais rigorosas. O SINTEGRA era um sistema mais simples de intercâmbio de informações.'
          },
          {
            question: 'Como gerar o arquivo SINTEGRA?',
            answer: 'Caso ainda seja necessário, o arquivo SINTEGRA pode ser gerado pela maioria dos sistemas de gestão (ERPs) seguindo o layout definido no Convênio ICMS 57/1995.'
          }
        ]
      }
    },
    {
      id: 'destda',
      name: 'DeSTDA',
      description: 'Declaração de Substituição Tributária, Diferencial de Alíquota e Antecipação',
      icon: 'DocumentPlusIcon',
      content: {
        title: 'DeSTDA - Declaração de Substituição Tributária',
        summary: 'A DeSTDA é uma obrigação acessória estadual que deve ser apresentada por empresas optantes pelo Simples Nacional que realizam operações com ICMS Substituição Tributária, diferencial de alíquotas e antecipação.',
        periodicity: 'Mensal - até o dia 20 do mês seguinte',
        legalBasis: 'Ajuste SINIEF 12/2015',
        reference: 'Consulte a Secretaria da Fazenda do seu estado',
        details: [
          'Obrigatória para empresas do Simples Nacional com ICMS-ST',
          'Contém informações sobre substituição tributária',
          'Diferencial de alíquota entre estados',
          'Antecipações de ICMS',
          'Cada estado possui suas especificidades'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a DeSTDA?',
            answer: 'Empresas optantes pelo Simples Nacional que efetuam operações ou prestações com ICMS retido por substituição tributária, diferencial de alíquotas ou antecipação.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'Geralmente até o dia 20 do mês seguinte ao da apuração, mas pode variar conforme o estado. Consulte a legislação estadual.'
          },
          {
            question: 'Todos os estados exigem?',
            answer: 'Não, nem todos os estados exigem a DeSTDA. Consulte a Secretaria da Fazenda do seu estado para verificar a obrigatoriedade.'
          }
        ]
      }
    },
    {
      id: 'gia-st',
      name: 'GIA-ST',
      description: 'Guia de Informação e Apuração do ICMS Substituição Tributária',
      icon: 'ClipboardDocumentCheckIcon',
      content: {
        title: 'GIA-ST - Guia de Apuração ICMS-ST',
        summary: 'A GIA-ST é uma declaração estadual específica para informações relacionadas à substituição tributária do ICMS. É utilizada em alguns estados para controle das operações com ICMS-ST.',
        periodicity: 'Mensal - conforme legislação estadual',
        legalBasis: 'Legislação específica de cada estado',
        reference: 'Consulte a Secretaria da Fazenda do seu estado',
        details: [
          'Específica para operações com ICMS-ST',
          'Utilizada em alguns estados brasileiros',
          'Complementa informações da EFD-ICMS/IPI',
          'Prazos variam conforme o estado',
          'Importante para contribuintes substitutos'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a GIA-ST?',
            answer: 'Contribuintes que realizam operações com ICMS Substituição Tributária, conforme exigência do estado. Nem todos os estados exigem esta declaração.'
          },
          {
            question: 'Qual a diferença entre GIA e GIA-ST?',
            answer: 'A GIA-ST é específica para operações com substituição tributária, enquanto a GIA regular abrange todas as operações com ICMS.'
          },
          {
            question: 'Meu estado exige GIA-ST?',
            answer: 'Consulte a Secretaria da Fazenda do seu estado. Muitos estados já migraram essas informações para a EFD-ICMS/IPI.'
          }
        ]
      }
    }
  ],
  municipais: [
    {
      id: 'dimob',
      name: 'DIMOB',
      description: 'Declaração de Informações sobre Atividades Imobiliárias',
      icon: 'HomeIcon',
      content: {
        title: 'DIMOB - Declaração de Informações sobre Atividades Imobiliárias',
        summary: 'A DIMOB é uma declaração anual que deve ser apresentada por pessoas jurídicas e físicas que intermediam transações imobiliárias, administram imóveis, realizam incorporações, loteamentos ou construções de imóveis.',
        periodicity: 'Anual - até o último dia útil de fevereiro do ano seguinte',
        legalBasis: 'Instrução Normativa RFB nº 1.115/2010',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos',
        details: [
          'Obrigatória para imobiliárias, administradoras de imóveis, construtoras e incorporadoras',
          'Deve informar operações de venda, compra e aluguel de imóveis',
          'Inclui dados sobre comissões pagas na intermediação',
          'A não entrega ou entrega em atraso está sujeita a multa',
          'Transmitida através do programa gerador da Receita Federal'
        ],
        faqs: [
          {
            question: 'Quem deve entregar a DIMOB?',
            answer: 'Pessoas jurídicas e físicas que tenham recebido valores relativos a intermediação na compra, venda ou aluguel de imóveis, administração de imóveis, incorporação, loteamento ou construção.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'A DIMOB deve ser apresentada até o último dia útil de fevereiro do ano seguinte ao ano-calendário a que se referir a declaração.'
          },
          {
            question: 'Qual a multa por atraso?',
            answer: 'A multa é de R$ 500,00 por mês ou fração de atraso para pessoa jurídica inativa, e de R$ 1.500,00 por mês ou fração para pessoa jurídica ativa, limitada a 20% do valor das transações informadas.'
          }
        ]
      }
    },
    {
      id: 'nfse',
      name: 'NFS-e',
      description: 'Nota Fiscal de Serviços Eletrônica',
      icon: 'ReceiptPercentIcon',
      content: {
        title: 'NFS-e - Nota Fiscal de Serviços Eletrônica',
        summary: 'A NFS-e é o documento fiscal eletrônico que substitui as tradicionais notas fiscais de serviços em papel. É emitida e armazenada eletronicamente, com o objetivo de registrar as operações de prestação de serviços.',
        periodicity: 'Conforme prestação de serviços',
        legalBasis: 'Lei Complementar 116/2003 e legislação municipal específica',
        reference: 'Portal da prefeitura do município (varia por cidade)',
        details: [
          'Cada município possui seu próprio sistema de emissão',
          'Substitui a nota fiscal de serviços em papel',
          'Permite o controle e fiscalização do ISS',
          'A emissão é feita através do portal da prefeitura ou por integração',
          'Alguns municípios adotaram o padrão nacional da ABRASF'
        ],
        faqs: [
          {
            question: 'Como emitir a NFS-e?',
            answer: 'A emissão varia por município. Geralmente é feita através do portal da prefeitura com certificado digital, ou através de integração via API para empresas com grande volume.'
          },
          {
            question: 'Qual o prazo para emissão?',
            answer: 'O prazo varia por município, mas geralmente a nota deve ser emitida imediatamente após a prestação do serviço ou conforme definido na legislação municipal.'
          },
          {
            question: 'A NFS-e substitui o recibo?',
            answer: 'Sim, a NFS-e é o documento fiscal que comprova a prestação de serviços e serve para fins de comprovação de despesa e recolhimento do ISS.'
          }
        ]
      }
    },
    {
      id: 'des',
      name: 'DES / DMISS / DIM',
      description: 'Declarações de Serviços Municipais',
      icon: 'BuildingOfficeIcon',
      content: {
        title: 'Declarações de Serviços Municipais (DES/DMISS/DIM)',
        summary: 'São declarações municipais relacionadas à prestação de serviços e ao ISS (Imposto Sobre Serviços). A nomenclatura e formato variam conforme o município, podendo ser chamadas de DES (Declaração Eletrônica de Serviços), DMISS (Declaração Mensal de ISS) ou DIM (Declaração de Informações Municipais).',
        periodicity: 'Mensal - geralmente até o dia 10 do mês seguinte',
        legalBasis: 'Legislação específica de cada município',
        reference: 'Portal da prefeitura do município',
        details: [
          'Cada município define sua própria declaração',
          'Contém informações sobre serviços prestados e tomados',
          'Serve de base para a apuração do ISS',
          'Pode ter diferentes nomenclaturas por município',
          'A transmissão é feita através do portal da prefeitura'
        ],
        faqs: [
          {
            question: 'Qual declaração meu município exige?',
            answer: 'Consulte o portal da prefeitura ou a Secretaria de Finanças do seu município. A nomenclatura varia: pode ser DES, DMISS, DIM, ou outra denominação específica.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'O prazo varia por município, mas geralmente é até o dia 10 do mês seguinte ao mês de referência. Verifique a legislação municipal específica.'
          },
          {
            question: 'Preciso declarar mesmo sem movimento?',
            answer: 'Na maioria dos municípios, sim. É necessário apresentar declaração mesmo sem movimento (declaração negativa). Consulte a legislação do seu município.'
          }
        ]
      }
    },
    {
      id: 'lfe',
      name: 'LFE',
      description: 'Livro Fiscal Eletrônico',
      icon: 'BookmarkIcon',
      content: {
        title: 'LFE - Livro Fiscal Eletrônico',
        summary: 'O Livro Fiscal Eletrônico é uma escrituração digital de documentos fiscais e de apuração de impostos municipais. Alguns municípios o exigem para controle e fiscalização do ISS.',
        periodicity: 'Mensal ou conforme legislação municipal',
        legalBasis: 'Legislação específica de cada município',
        reference: 'Portal da prefeitura do município',
        details: [
          'Não é uma obrigação federal, mas municipal',
          'Poucos municípios ainda exigem',
          'Contém escrituração de notas fiscais de serviços',
          'Pode ser substituído pela NFS-e em muitos municípios',
          'A escrituração e transmissão variam conforme o município'
        ],
        faqs: [
          {
            question: 'Meu município exige o LFE?',
            answer: 'Consulte a Secretaria de Finanças ou o portal da prefeitura do seu município. Muitos municípios já dispensaram o LFE após a adoção da NFS-e.'
          },
          {
            question: 'Como escriturar o LFE?',
            answer: 'A forma de escrituração varia por município. Pode ser através de sistema próprio da prefeitura ou arquivo específico. Consulte as orientações da prefeitura.'
          },
          {
            question: 'O LFE substitui alguma obrigação?',
            answer: 'O LFE pode substituir os livros fiscais em papel relacionados ao ISS. No entanto, com a NFS-e, muitos municípios dispensaram a escrituração do LFE.'
          }
        ]
      }
    }
  ],
  trabalhistas: [
    {
      id: 'rais',
      name: 'RAIS',
      description: 'Relação Anual de Informações Sociais',
      icon: 'ClipboardDocumentCheckIcon',
      content: {
        title: 'RAIS - Relação Anual de Informações Sociais',
        summary: 'A RAIS é uma declaração anual que coleta dados sobre vínculos empregatícios e serve de base para estatísticas do trabalho, controle de benefícios e fiscalização. A partir de 2023, a RAIS foi substituída pelos eventos do eSocial para a maioria das informações.',
        periodicity: 'Anual - geralmente até março do ano seguinte',
        legalBasis: 'Decreto nº 76.900/1975',
        reference: 'https://www.gov.br/trabalho-e-emprego/pt-br',
        details: [
          'A partir de 2023, foi substituída pelo eSocial para empregadores',
          'Ainda é exigida para casos específicos não contemplados no eSocial',
          'Contém informações sobre vínculos empregatícios do ano anterior',
          'Serve de base para cálculo do PIS/PASEP e FGTS',
          'Estabelecimentos sem empregados devem entregar RAIS Negativa'
        ],
        faqs: [
          {
            question: 'A RAIS ainda é obrigatória?',
            answer: 'Para a maioria dos empregadores que transmitem o eSocial, a RAIS foi substituída. No entanto, alguns casos específicos ainda podem exigir a declaração. Consulte as orientações do Ministério do Trabalho.'
          },
          {
            question: 'Qual o prazo de entrega?',
            answer: 'Quando aplicável, o prazo geralmente é até o final de março do ano seguinte ao ano-base. Verifique o calendário anual divulgado pelo governo.'
          },
          {
            question: 'E se não tive empregados?',
            answer: 'Tradicionalmente, deveria ser entregue a RAIS Negativa. Com o eSocial, essa obrigação foi modificada. Consulte as regras atuais no portal do governo.'
          }
        ]
      }
    },
    {
      id: 'gfip',
      name: 'GFIP',
      description: 'Guia de Recolhimento do FGTS e de Informações à Previdência Social',
      icon: 'DocumentDuplicateIcon',
      content: {
        title: 'GFIP - Guia de Recolhimento do FGTS',
        summary: 'A GFIP era utilizada para recolher o FGTS e informar dados à Previdência Social. Foi substituída pela DCTFWeb para a confissão de débitos previdenciários, mas ainda é utilizada para o recolhimento do FGTS em casos específicos.',
        periodicity: 'Mensal - até o dia 7 do mês seguinte',
        legalBasis: 'Lei nº 8.036/1990 (FGTS) e legislação previdenciária',
        reference: 'https://www.gov.br/trabalho-e-emprego/pt-br',
        details: [
          'Ainda utilizada para recolhimento de FGTS em situações específicas',
          'A parte previdenciária foi substituída pela DCTFWeb',
          'Deve ser transmitida através do sistema SEFIP/GRRF',
          'O recolhimento do FGTS continua sendo até o dia 7',
          'Informações trabalhistas são prestadas via eSocial'
        ],
        faqs: [
          {
            question: 'A GFIP ainda é necessária?',
            answer: 'Para confissão de débitos previdenciários, foi substituída pela DCTFWeb. Porém, ainda pode ser utilizada para casos específicos de FGTS. A maioria das informações agora é prestada via eSocial.'
          },
          {
            question: 'Qual o prazo do FGTS?',
            answer: 'O recolhimento do FGTS deve ser feito até o dia 7 do mês seguinte ao trabalhado. Quando o dia 7 não for dia útil, o prazo é prorrogado para o dia útil seguinte.'
          },
          {
            question: 'Como transmitir a GFIP?',
            answer: 'Quando aplicável, a GFIP é transmitida através do sistema SEFIP (Conectividade Social). No entanto, verifique se o seu caso não está totalmente contemplado pelo eSocial e DCTFWeb.'
          }
        ]
      }
    },
    {
      id: 'caged',
      name: 'CAGED',
      description: 'Cadastro Geral de Empregados e Desempregados',
      icon: 'IdentificationIcon',
      content: {
        title: 'CAGED - Cadastro Geral de Empregados e Desempregados',
        summary: 'O CAGED era utilizado para registrar admissões e demissões de empregados. A partir de 2020, foi substituído pelo eSocial para a maioria dos empregadores. Ainda é utilizado para alguns casos específicos.',
        periodicity: 'Mensal - até o dia 7 do mês seguinte',
        legalBasis: 'Lei nº 4.923/1965',
        reference: 'https://www.gov.br/trabalho-e-emprego/pt-br',
        details: [
          'Substituído pelo eSocial para empregadores obrigados ao eSocial',
          'Serve de base para estatísticas de emprego',
          'Utilizado para controle de seguro-desemprego',
          'Quando aplicável, deve registrar movimentações (admissões, demissões, transferências)',
          'Empregadores no eSocial não devem enviar CAGED'
        ],
        faqs: [
          {
            question: 'Ainda preciso enviar o CAGED?',
            answer: 'Se você já transmite eventos do eSocial (especialmente S-2190, S-2200, S-2299), não precisa enviar o CAGED. O eSocial substituiu essa obrigação para a maioria dos empregadores.'
          },
          {
            question: 'Qual o prazo?',
            answer: 'Quando aplicável, o prazo é até o dia 7 do mês seguinte ao da movimentação. Porém, verifique se seu caso não está contemplado pelo eSocial.'
          },
          {
            question: 'O que informar no CAGED?',
            answer: 'Quando aplicável, devem ser informadas admissões, demissões e transferências de empregados. Com o eSocial, essas informações são prestadas através dos eventos S-2200 (admissão), S-2299 (desligamento) e S-2206 (alteração contratual).'
          }
        ]
      }
    },
    {
      id: 'esocial-trabalhista',
      name: 'eSocial (Trabalhista)',
      description: 'Eventos Trabalhistas do eSocial',
      icon: 'BriefcaseIcon',
      content: {
        title: 'eSocial - Aspectos Trabalhistas',
        summary: 'O eSocial unifica informações trabalhistas, previdenciárias e fiscais. Na dimensão trabalhista, substitui obrigações como CAGED, RAIS, e diversas informações ao Ministério do Trabalho.',
        periodicity: 'Conforme ocorrência dos eventos',
        legalBasis: 'Decreto nº 8.373/2014',
        reference: 'https://www.gov.br/esocial/pt-br',
        details: [
          'Eventos de admissão (S-2200), desligamento (S-2299), alteração contratual (S-2206)',
          'Eventos de saúde e segurança do trabalho (SST)',
          'Comunicação de Acidente de Trabalho (CAT) via evento S-2210',
          'Substituiu o CAGED e a RAIS para empregadores',
          'Integrado com a folha de pagamento e DCTFWeb'
        ],
        faqs: [
          {
            question: 'Quais eventos trabalhistas devo enviar?',
            answer: 'Principais eventos: S-2200 (admissão), S-2206 (alteração contratual), S-2299 (desligamento), S-2210 (CAT), S-2220 (monitoramento de saúde), S-2240 (condições ambientais), entre outros conforme aplicável.'
          },
          {
            question: 'Qual o prazo dos eventos trabalhistas?',
            answer: 'Admissão: até o início das atividades. Desligamento: até o dia 10 do mês seguinte ou antes do pagamento das verbas rescisórias. Alterações: conforme ocorrência. CAT: até o primeiro dia útil seguinte ao acidente.'
          },
          {
            question: 'O eSocial substitui a Carteira de Trabalho?',
            answer: 'Não substitui, mas complementa. A anotação na CTPS pode ser feita fisicamente ou de forma digital. As informações do eSocial alimentam a Carteira de Trabalho Digital.'
          }
        ]
      }
    }
  ],
  impostos: [
    {
      id: 'irpj',
      name: 'IRPJ',
      description: 'Imposto de Renda Pessoa Jurídica',
      icon: 'BanknotesIcon',
      content: {
        title: 'IRPJ - Imposto de Renda Pessoa Jurídica',
        summary: 'O IRPJ é o imposto federal incidente sobre o lucro das empresas. Pode ser calculado com base no Lucro Real, Lucro Presumido ou Lucro Arbitrado, dependendo do regime tributário da empresa.',
        periodicity: 'Trimestral ou Anual (conforme opção)',
        legalBasis: 'Lei nº 9.249/1995 e Decreto nº 9.580/2018 (RIR/2018)',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpj',
        details: [
          'Alíquota padrão de 15% sobre o lucro, com adicional de 10% sobre a parcela que exceder R$ 20.000,00 por mês',
          'Três regimes de apuração: Lucro Real (obrigatório para grandes empresas), Lucro Presumido (simplificado) e Lucro Arbitrado (excepcional)',
          'Lucro Real: apuração sobre o lucro contábil ajustado, trimestral ou anual com antecipações mensais',
          'Lucro Presumido: presunção de lucro conforme percentual sobre a receita bruta (varia de 1,6% a 32% conforme atividade)',
          'Simples Nacional possui regras próprias de tributação do IRPJ',
          'Deduções permitidas: despesas operacionais, depreciação, provisões, incentivos fiscais',
          'Empresas com faturamento superior a R$ 78 milhões ou determinadas atividades são obrigadas ao Lucro Real'
        ],
        faqs: [
          {
            question: 'Qual a diferença entre Lucro Real e Lucro Presumido?',
            answer: 'No Lucro Real, o imposto incide sobre o lucro efetivo da empresa após ajustes fiscais. No Lucro Presumido, presume-se um percentual de lucro sobre a receita bruta, simplificando a apuração. O Lucro Real é obrigatório para empresas com faturamento acima de R$ 78 milhões/ano ou determinadas atividades.'
          },
          {
            question: 'Como é calculado o IRPJ?',
            answer: 'No Lucro Presumido, aplica-se um percentual sobre a receita (ex: 8% para comércio, 32% para serviços), resultando na base de cálculo. Sobre essa base, aplica-se 15%, mais adicional de 10% sobre o que exceder R$ 20.000/mês. No Lucro Real, calcula-se sobre o lucro contábil ajustado.'
          },
          {
            question: 'Quando devo optar pelo Lucro Real?',
            answer: 'É obrigatório para empresas com receita superior a R$ 78 milhões/ano, instituições financeiras, factoring, e empresas com lucros no exterior. Pode ser vantajoso quando a empresa tem prejuízo ou margem de lucro menor que a presumida, ou quando há muitos créditos fiscais.'
          },
          {
            question: 'Qual o prazo de pagamento?',
            answer: 'No regime trimestral, até o último dia útil do mês seguinte ao trimestre. No regime anual (Lucro Real), recolhimentos mensais estimados até o último dia útil do mês seguinte, com ajuste anual.'
          }
        ]
      }
    },
    {
      id: 'csll',
      name: 'CSLL',
      description: 'Contribuição Social sobre o Lucro Líquido',
      icon: 'CalculatorIcon',
      content: {
        title: 'CSLL - Contribuição Social sobre o Lucro Líquido',
        summary: 'A CSLL é uma contribuição federal que incide sobre o lucro líquido das empresas, destinada ao financiamento da seguridade social. Segue as mesmas regras de apuração do IRPJ.',
        periodicity: 'Trimestral ou Anual (conforme opção do IRPJ)',
        legalBasis: 'Lei nº 7.689/1988 e alterações',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/csll',
        details: [
          'Alíquota de 9% para a maioria das empresas (comércio, indústria, serviços)',
          'Alíquota de 15% para instituições financeiras e equiparadas (bancos, seguradoras, factoring)',
          'Base de cálculo similar ao IRPJ, seguindo o mesmo regime (Lucro Real, Presumido ou Arbitrado)',
          'No Lucro Presumido, aplica-se 12% da receita bruta para a maioria das atividades e 32% para serviços',
          'Permite dedução de despesas operacionais, depreciação e provisões (no Lucro Real)',
          'Não há adicional como no IRPJ, a alíquota é única',
          'Empresas do Simples Nacional têm CSLL incluída no DAS'
        ],
        faqs: [
          {
            question: 'Qual a diferença entre CSLL e IRPJ?',
            answer: 'Ambos incidem sobre o lucro, mas são tributos distintos. O IRPJ é um imposto federal (15% + adicional de 10%), enquanto a CSLL é uma contribuição social (9% ou 15% conforme atividade). A CSLL tem destinação específica para a seguridade social.'
          },
          {
            question: 'Como calcular a CSLL no Lucro Presumido?',
            answer: 'Aplica-se o percentual de presunção sobre a receita bruta (12% para comércio/indústria, 32% para serviços) para obter a base de cálculo. Sobre essa base, aplica-se a alíquota de 9% (ou 15% para instituições financeiras).'
          },
          {
            question: 'A CSLL pode ser deduzida do IRPJ?',
            answer: 'Sim, no regime de Lucro Real, a CSLL apurada pode ser deduzida da base de cálculo do IRPJ, pois é considerada despesa dedutível.'
          },
          {
            question: 'Empresas com prejuízo pagam CSLL?',
            answer: 'No Lucro Real, se houver prejuízo fiscal, não há CSLL a pagar. No Lucro Presumido, mesmo com prejuízo contábil, a CSLL é calculada sobre a receita bruta presumida.'
          }
        ]
      }
    },
    {
      id: 'pis',
      name: 'PIS',
      description: 'Programa de Integração Social',
      icon: 'UsersIcon',
      content: {
        title: 'PIS - Programa de Integração Social',
        summary: 'O PIS é uma contribuição federal que incide sobre a receita bruta das empresas, destinada ao financiamento do seguro-desemprego e do abono salarial. Pode ser calculado no regime cumulativo ou não-cumulativo.',
        periodicity: 'Mensal - até o 25º dia do mês subsequente',
        legalBasis: 'Leis nº 10.637/2002 e 10.833/2003',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/pis-pasep',
        details: [
          'Regime Cumulativo: alíquota de 0,65% sobre a receita bruta (Lucro Presumido, Arbitrado)',
          'Regime Não-Cumulativo: alíquota de 1,65% sobre a receita bruta com direito a créditos (Lucro Real)',
          'No regime não-cumulativo, podem ser aproveitados créditos sobre aquisições, insumos, energia, aluguéis, entre outros',
          'Simples Nacional: alíquotas progressivas conforme faixa de receita, incluídas no DAS',
          'Algumas receitas possuem alíquotas diferenciadas ou são isentas (exportações, alguns produtos da cesta básica)',
          'A apuração é feita mensalmente através da EFD-Contribuições',
          'Receitas financeiras têm alíquotas específicas (0,65% no cumulativo e 4% no não-cumulativo)'
        ],
        faqs: [
          {
            question: 'Qual a diferença entre PIS Cumulativo e Não-Cumulativo?',
            answer: 'No regime cumulativo (0,65%), não há direito a créditos, o imposto incide em cascata. No não-cumulativo (1,65%), há direito a créditos sobre compras e despesas permitidas, evitando a cumulatividade. Empresas no Lucro Real usam o não-cumulativo; no Lucro Presumido, o cumulativo.'
          },
          {
            question: 'Quais créditos posso tomar no PIS Não-Cumulativo?',
            answer: 'Principais créditos: aquisição de bens para revenda, insumos utilizados na produção, energia elétrica, aluguéis, armazenagem, frete, máquinas e equipamentos (depreciação), entre outros. Cada crédito possui regras específicas de aproveitamento.'
          },
          {
            question: 'Como funciona o PIS no Simples Nacional?',
            answer: 'No Simples Nacional, o PIS está incluído no DAS (Documento de Arrecadação do Simples). A alíquota varia conforme a faixa de receita e atividade, sendo calculada de forma progressiva. Não há direito a créditos.'
          },
          {
            question: 'Exportações pagam PIS?',
            answer: 'Não, as receitas de exportação são isentas de PIS/PASEP. Além disso, no regime não-cumulativo, é possível apropriar créditos sobre insumos utilizados na produção de bens exportados.'
          }
        ]
      }
    },
    {
      id: 'cofins',
      name: 'COFINS',
      description: 'Contribuição para o Financiamento da Seguridade Social',
      icon: 'HeartIcon',
      content: {
        title: 'COFINS - Contribuição para o Financiamento da Seguridade Social',
        summary: 'A COFINS é uma contribuição federal que incide sobre a receita bruta das empresas, destinada ao financiamento da seguridade social (saúde, previdência e assistência social). Opera de forma similar ao PIS, com regimes cumulativo e não-cumulativo.',
        periodicity: 'Mensal - até o 25º dia do mês subsequente',
        legalBasis: 'Leis nº 10.637/2002 e 10.833/2003',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/cofins',
        details: [
          'Regime Cumulativo: alíquota de 3% sobre a receita bruta (Lucro Presumido, Arbitrado)',
          'Regime Não-Cumulativo: alíquota de 7,6% sobre a receita bruta com direito a créditos (Lucro Real)',
          'Os créditos seguem as mesmas regras do PIS, podendo ser compensados com débitos de COFINS',
          'Simples Nacional: alíquotas progressivas incluídas no DAS',
          'Receitas de exportação são isentas de COFINS',
          'Algumas operações têm alíquotas reduzidas ou são isentas (produtos da cesta básica, medicamentos específicos)',
          'Declarada mensalmente através da EFD-Contribuições junto com o PIS'
        ],
        faqs: [
          {
            question: 'Qual a relação entre COFINS e PIS?',
            answer: 'São contribuições irmãs, com a mesma lógica de apuração. A COFINS tem alíquotas maiores (3% cumulativo, 7,6% não-cumulativo) contra 0,65% e 1,65% do PIS. Ambas incidem sobre receita bruta e seguem o mesmo regime (cumulativo ou não-cumulativo).'
          },
          {
            question: 'Como funciona o crédito de COFINS?',
            answer: 'No regime não-cumulativo, a empresa pode descontar créditos sobre aquisições e despesas permitidas (insumos, energia, aluguéis, etc). O crédito é calculado aplicando-se 7,6% sobre o valor da despesa. Esses créditos reduzem o valor a pagar de COFINS.'
          },
          {
            question: 'Instituições financeiras pagam COFINS diferente?',
            answer: 'Sim, instituições financeiras, seguradoras e similares têm regime específico. Não se aplica o regime não-cumulativo tradicional. As alíquotas e bases de cálculo são diferenciadas, conforme a legislação específica do setor.'
          },
          {
            question: 'Posso compensar crédito de COFINS com PIS?',
            answer: 'Não diretamente. Créditos de COFINS só podem ser compensados com débitos de COFINS. O mesmo vale para o PIS. Porém, ambos podem entrar no sistema de compensação tributária da Receita Federal (PER/DCOMP) para compensar com outros tributos federais.'
          }
        ]
      }
    },
    {
      id: 'ipi',
      name: 'IPI',
      description: 'Imposto sobre Produtos Industrializados',
      icon: 'CogIcon',
      content: {
        title: 'IPI - Imposto sobre Produtos Industrializados',
        summary: 'O IPI é um imposto federal que incide sobre produtos industrializados, sejam nacionais ou importados. É um imposto seletivo (varia por produto) e não-cumulativo (permite créditos). Segue o princípio da essencialidade.',
        periodicity: 'Mensal - apuração decendial ou mensal conforme regime',
        legalBasis: 'Decreto nº 7.212/2010 (RIPI/2010)',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/ipi',
        details: [
          'Alíquotas variam de 0% a mais de 300%, conforme a TIPI (Tabela de Incidência do IPI)',
          'Produtos essenciais têm alíquota zero ou reduzida; produtos supérfluos têm alíquotas elevadas',
          'É não-cumulativo: o IPI pago nas compras de matéria-prima/insumos gera crédito',
          'Fato gerador: saída do produto do estabelecimento industrial ou desembaraço aduaneiro',
          'Apuração pode ser decendial (três vezes por mês) ou mensal, conforme o produto',
          'Escrituração feita através da EFD-ICMS/IPI',
          'Empresas do Simples Nacional podem ter substituição ou alíquota zero de IPI'
        ],
        faqs: [
          {
            question: 'Quem deve pagar IPI?',
            answer: 'Estabelecimentos industriais (que realizam industrialização de produtos), importadores de produtos industrializados, e estabelecimentos equiparados a industrial (como atacadistas que vendem produtos tributados). Comércio varejista geralmente não paga IPI.'
          },
          {
            question: 'Como funciona o crédito de IPI?',
            answer: 'Ao adquirir matéria-prima ou insumos com IPI, a indústria pode se creditar desse valor. Na saída do produto acabado, calcula-se o IPI devido e compensa com os créditos. A diferença é o valor a recolher (ou saldo credor a ser aproveitado).'
          },
          {
            question: 'Qual a alíquota do IPI?',
            answer: 'Varia conforme o produto, seguindo a TIPI (Tabela de Incidência). Produtos essenciais (medicamentos, alimentos básicos) têm alíquota zero. Produtos como cigarros e bebidas têm alíquotas elevadas. Consulte a TIPI para o NCM específico do produto.'
          },
          {
            question: 'Simples Nacional paga IPI?',
            answer: 'Depende da atividade e produto. Muitos produtos têm alíquota zero de IPI para o Simples. Produtos sujeitos à tributação concentrada (ex: cigarros, bebidas) podem ter substituição tributária. Verifique a legislação específica para seu produto.'
          }
        ]
      }
    },
    {
      id: 'icms',
      name: 'ICMS',
      description: 'Imposto sobre Circulação de Mercadorias e Serviços',
      icon: 'TruckIcon',
      content: {
        title: 'ICMS - Imposto sobre Circulação de Mercadorias e Serviços',
        summary: 'O ICMS é um imposto estadual que incide sobre a circulação de mercadorias e prestação de serviços de transporte interestadual/intermunicipal e comunicação. É o principal tributo dos estados e possui legislação específica em cada unidade federativa.',
        periodicity: 'Mensal - conforme legislação estadual',
        legalBasis: 'Lei Complementar nº 87/1996 (Lei Kandir) e legislação estadual',
        reference: 'Consulte a Secretaria da Fazenda do seu estado',
        details: [
          'Alíquotas variam por estado: geralmente 17% ou 18% nas operações internas, podendo chegar a 20% ou 25% em alguns estados',
          'Operações interestaduais: alíquotas de 4%, 7% ou 12% conforme origem/destino',
          'É não-cumulativo: o ICMS pago nas compras gera crédito fiscal',
          'Substituição Tributária (ICMS-ST): responsabilidade de recolhimento transferida a um contribuinte da cadeia',
          'Diferencial de Alíquota (DIFAL): diferença entre alíquota interna e interestadual em operações para consumidor final',
          'Cada estado tem sua legislação, benefícios fiscais e prazos específicos',
          'Declaração via EFD-ICMS/IPI (SPED Fiscal), com prazos variando por estado'
        ],
        faqs: [
          {
            question: 'Qual a diferença entre ICMS normal e ICMS-ST?',
            answer: 'No ICMS normal, cada contribuinte recolhe seu imposto. Na Substituição Tributária (ST), um contribuinte da cadeia (geralmente fabricante/importador) recolhe antecipadamente o ICMS de toda a cadeia, até o consumidor final, facilitando a fiscalização.'
          },
          {
            question: 'Como funciona o DIFAL?',
            answer: 'O DIFAL é a diferença entre a alíquota interna do estado de destino e a alíquota interestadual. É devido em vendas para consumidor final não contribuinte em outro estado. Parte vai para o estado de origem e parte para o de destino (EC 87/2015).'
          },
          {
            question: 'Como calcular o crédito de ICMS?',
            answer: 'O crédito corresponde ao ICMS destacado nas notas fiscais de compra de mercadorias para revenda ou insumos de produção. O crédito compensa com o débito (ICMS das vendas). A diferença é o valor a recolher ou saldo credor acumulado.'
          },
          {
            question: 'Quais as alíquotas interestaduais?',
            answer: 'Sul/Sudeste (exceto ES) para Norte/Nordeste/Centro-Oeste/ES: 7%. Sul/Sudeste entre si: 12%. Produtos importados: 4%. A partir de 2023, operações com não contribuinte seguem a alíquota interna do destino, com DIFAL partilhado.'
          }
        ]
      }
    },
    {
      id: 'iss',
      name: 'ISS',
      description: 'Imposto sobre Serviços de Qualquer Natureza',
      icon: 'WrenchScrewdriverIcon',
      content: {
        title: 'ISS - Imposto sobre Serviços',
        summary: 'O ISS (ou ISSQN) é um imposto municipal que incide sobre a prestação de serviços. Cada município tem sua própria legislação, alíquotas e regras, dentro dos limites estabelecidos pela Lei Complementar 116/2003.',
        periodicity: 'Mensal - conforme legislação municipal',
        legalBasis: 'Lei Complementar nº 116/2003 e legislação municipal',
        reference: 'Portal da prefeitura do município',
        details: [
          'Alíquotas variam de 2% a 5% conforme o município e tipo de serviço',
          'Alíquota mínima nacional: 2% (exceto casos específicos de construção civil e alguns serviços)',
          'Lista de serviços tributáveis definida na LC 116/2003 (atualizada)',
          'Retenção na fonte: em muitos casos, o tomador do serviço deve reter e recolher o ISS',
          'Simples Nacional: ISS incluído no DAS, mas com possibilidades de retenção e complementação',
          'Local de recolhimento: geralmente no município do prestador, mas há exceções (construção civil, eventos, etc.)',
          'NFS-e (Nota Fiscal de Serviços Eletrônica) é obrigatória na maioria dos municípios'
        ],
        faqs: [
          {
            question: 'Qual a alíquota do ISS?',
            answer: 'Varia de 2% a 5% conforme o município e tipo de serviço. A Lei Complementar 116/2003 estabelece alíquota mínima de 2%. Consulte a legislação específica do município onde o serviço é prestado ou onde está estabelecido.'
          },
          {
            question: 'Onde devo recolher o ISS?',
            answer: 'Regra geral: município onde está estabelecido o prestador. Exceções: construção civil (local da obra), eventos (local do evento), instalação de equipamentos (local da instalação). Verifique a LC 116/2003 e legislação municipal.'
          },
          {
            question: 'O que é retenção de ISS?',
            answer: 'É quando o tomador do serviço (quem contrata) tem a responsabilidade de reter o ISS do valor do serviço e recolher diretamente à prefeitura. É comum em serviços prestados para empresas e órgãos públicos. O percentual retido varia por município.'
          },
          {
            question: 'Como funciona ISS no Simples Nacional?',
            answer: 'O ISS está incluído no DAS do Simples Nacional. Porém, pode haver retenção na fonte pelo tomador e, em alguns casos, alíquota mínima municipal superior à do Simples, exigindo complementação. Verifique a legislação municipal.'
          }
        ]
      }
    },
    {
      id: 'inss-patronal',
      name: 'INSS Patronal',
      description: 'Contribuição Previdenciária Patronal',
      icon: 'ShieldCheckIcon',
      content: {
        title: 'INSS Patronal - Contribuição Previdenciária da Empresa',
        summary: 'A Contribuição Previdenciária Patronal é a contribuição que a empresa deve recolher sobre a folha de pagamento dos empregados, destinada ao financiamento da Previdência Social. É também conhecida como CPP (Contribuição Previdenciária Patronal).',
        periodicity: 'Mensal - até o dia 20 do mês seguinte',
        legalBasis: 'Lei nº 8.212/1991 e Decreto nº 3.048/1999',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/contribuicoes-previdenciarias',
        details: [
          'Alíquota padrão: 20% sobre o total da folha de pagamento (remuneração dos empregados)',
          'Acrescido de percentuais para SAT/RAT (risco de acidente de trabalho): 1%, 2% ou 3% conforme grau de risco',
          'Mais 5,8% para terceiros (Sistema S, INCRA, Salário-Educação) para empresas não optantes pelo Simples',
          'Simples Nacional: alíquotas reduzidas incluídas no DAS (varia de 4% a 7,83% conforme faixa)',
          'Desoneração da folha: algumas atividades podem recolher CPP sobre receita bruta (1,5% a 4,5%) ao invés de folha',
          'Apuração via eSocial, com geração automática da DCTFWeb',
          'Pró-labore de sócios também sofre incidência de 20%'
        ],
        faqs: [
          {
            question: 'Como calcular a contribuição patronal?',
            answer: 'Regime geral: 20% sobre a folha de pagamento + SAT/RAT (1% a 3%) + terceiros (5,8% se aplicável). No Simples Nacional, alíquota reduzida conforme anexo e faixa de receita. Base de cálculo: total das remunerações pagas aos segurados empregados e contribuintes individuais.'
          },
          {
            question: 'O que é SAT/RAT?',
            answer: 'Seguro de Acidente de Trabalho / Risco Ambiental do Trabalho. É um adicional à contribuição previdenciária que varia de 1% (risco leve) a 3% (risco grave) conforme a atividade da empresa. Pode ter FAP (Fator Acidentário de Prevenção) aplicado, reduzindo ou aumentando a alíquota.'
          },
          {
            question: 'Qual o prazo de recolhimento?',
            answer: 'Até o dia 20 do mês seguinte ao da competência (mês trabalhado). Se o dia 20 cair em feriado ou fim de semana, prorroga-se para o próximo dia útil. O recolhimento é feito via DARF gerado pela DCTFWeb (vinculada ao eSocial).'
          },
          {
            question: 'E no Simples Nacional?',
            answer: 'Empresas do Simples têm alíquotas reduzidas de CPP incluídas no DAS (Anexo I a V, conforme atividade e faixa de receita). Porém, sobre o pró-labore e alguns contratos (serviços prestados a PJ), pode haver INSS separado a 20%.'
          }
        ]
      }
    },
    {
      id: 'fgts',
      name: 'FGTS',
      description: 'Fundo de Garantia do Tempo de Serviço',
      icon: 'BuildingLibraryIcon',
      content: {
        title: 'FGTS - Fundo de Garantia do Tempo de Serviço',
        summary: 'O FGTS é um fundo criado para proteger o trabalhador demitido sem justa causa. O empregador deposita mensalmente 8% do salário do empregado em conta vinculada na Caixa Econômica Federal.',
        periodicity: 'Mensal - até o dia 7 do mês seguinte',
        legalBasis: 'Lei nº 8.036/1990',
        reference: 'https://www.caixa.gov.br/empresa/fgts/',
        details: [
          'Alíquota padrão: 8% sobre a remuneração paga ou devida ao empregado',
          'Aprendizes: 2% ao invés de 8%',
          'Depositado em conta vinculada em nome do trabalhador na Caixa Econômica Federal',
          'Vencimento: dia 7 do mês seguinte ao trabalhado (quando não é dia útil, antecipa)',
          'Multa de 50% (empresa paga 40% ao trabalhador + 10% à União) sobre o saldo em caso de demissão sem justa causa',
          'Declarado via eSocial (eventos S-1200 e S-1210), SEFIP ainda usado em casos específicos',
          'Não depositado para autônomos, sócios e diretores sem vínculo empregatício (salvo exceções)'
        ],
        faqs: [
          {
            question: 'Como calcular o FGTS?',
            answer: 'Multiplique 8% pelo valor total da remuneração mensal do empregado (salário + horas extras + comissões + gratificações + adicionais). Para aprendizes, o percentual é 2%. O 13º salário também tem incidência de FGTS, depositado junto com o pagamento.'
          },
          {
            question: 'Qual o prazo de depósito?',
            answer: 'Até o dia 7 do mês seguinte ao mês trabalhado. Se o dia 7 cair em sábado, domingo ou feriado, antecipa-se para o dia útil imediatamente anterior. Exemplo: FGTS de janeiro deve ser depositado até 07 de fevereiro.'
          },
          {
            question: 'Quando o trabalhador pode sacar o FGTS?',
            answer: 'Principais hipóteses: demissão sem justa causa, término de contrato por prazo determinado, aposentadoria, compra de imóvel, doenças graves, falecimento, permanência 3 anos sem depósito (saque parcial anual), calamidade pública. Consulte a Caixa para todas as hipóteses.'
          },
          {
            question: 'MEI precisa recolher FGTS?',
            answer: 'Se o MEI tiver empregado, sim. O MEI pode ter um empregado contratado e deve recolher FGTS normalmente (8% sobre o salário). Se não tiver empregados, não há FGTS a recolher.'
          }
        ]
      }
    },
    {
      id: 'iof',
      name: 'IOF',
      description: 'Imposto sobre Operações Financeiras',
      icon: 'BanknotesIcon',
      content: {
        title: 'IOF - Imposto sobre Operações Financeiras',
        summary: 'O IOF é um imposto federal que incide sobre operações de crédito, câmbio, seguro e títulos/valores mobiliários. Tem caráter regulatório, sendo usado pelo governo para controlar o crédito e a economia.',
        periodicity: 'Recolhimento automático na operação',
        legalBasis: 'Lei nº 5.143/1966, Lei nº 8.894/1994 e Decreto nº 6.306/2007 (RIOF)',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/iof',
        details: [
          'IOF-Crédito: até 0,0041% ao dia + 0,38% sobre o valor total, limitado ao rendimento (empréstimos, financiamentos)',
          'IOF-Câmbio: até 0,38% para transferências internacionais e remessas; 6,38% para compra de moeda estrangeira em espécie',
          'IOF-Seguro: 0,38% a 7,38% sobre o prêmio de seguros (varia conforme tipo)',
          'IOF-Títulos: alíquota regressiva para aplicações de renda fixa (quanto menor o prazo, maior o IOF), zero após 30 dias',
          'Operações com cartão de crédito internacional: 5,38% (4,38% + 1% adicional)',
          'Isento em algumas operações: financiamento habitacional SFH, crédito rural, algumas exportações',
          'Recolhido automaticamente pela instituição financeira no momento da operação'
        ],
        faqs: [
          {
            question: 'Quando pago IOF?',
            answer: 'O IOF é recolhido automaticamente pela instituição financeira no momento da operação. Exemplos: ao fazer empréstimo (IOF sobre crédito), ao comprar dólar (IOF câmbio), ao resgatar investimento com menos de 30 dias (IOF sobre títulos), ao usar cartão no exterior (IOF 6,38%).'
          },
          {
            question: 'Qual a alíquota do IOF?',
            answer: 'Varia conforme a operação: Crédito: 0,0041% ao dia + 0,38% adicional. Câmbio: 0,38% (transferências) a 6,38% (espécie). Cartão internacional: 5,38%. Títulos: regressivo de 96% a 0% (zero após 30 dias). Seguros: 0,38% a 7,38%.'
          },
          {
            question: 'Como funciona IOF em investimentos?',
            answer: 'Em aplicações de renda fixa (CDB, LCI, Tesouro), o IOF incide se o resgate for feito em menos de 30 dias. A alíquota é regressiva: 96% no 1º dia, reduzindo 3,33% ao dia, chegando a 0% no 30º dia. Após 30 dias, não há IOF. IOF não se aplica a ações, fundos de ações e poupança.'
          },
          {
            question: 'Tem IOF em compras internacionais?',
            answer: 'Sim. Compras com cartão no exterior ou em sites internacionais têm IOF de 5,38% sobre o valor em reais. Compra de moeda estrangeira em espécie: 1,1%. Transferências internacionais (remessas): 0,38%. PayPal e carteiras digitais internacionais também sofrem IOF.'
          }
        ]
      }
    },
    {
      id: 'itr',
      name: 'ITR',
      description: 'Imposto sobre a Propriedade Territorial Rural',
      icon: 'HomeModernIcon',
      content: {
        title: 'ITR - Imposto Territorial Rural',
        summary: 'O ITR é um imposto federal que incide sobre a propriedade de imóveis rurais. Tem função extrafiscal, estimulando a produtividade da terra através de alíquotas menores para propriedades produtivas.',
        periodicity: 'Anual - declaração até último dia útil de setembro',
        legalBasis: 'Lei nº 9.393/1996 e Instrução Normativa RFB nº 1.877/2019',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/itr',
        details: [
          'Alíquotas de 0,03% a 20% conforme área total e grau de utilização (GU)',
          'Quanto maior a área e menor a utilização, maior a alíquota (função de desestímulo à terra improdutiva)',
          'Grau de Utilização (GU): percentual de área efetivamente utilizada para produção',
          'Imunidades: pequenas glebas rurais (até 30, 50 ou 100 hectares conforme região), áreas de preservação permanente',
          'Declaração via DITR (Declaração do ITR) até o último dia útil de setembro',
          'Receita pode ser destinada ao município onde se localiza o imóvel (convênio)',
          'Pagamento em até 4 quotas (mínimo R$ 50,00 por quota)'
        ],
        faqs: [
          {
            question: 'Como é calculado o ITR?',
            answer: 'Base de cálculo: Valor da Terra Nua (VTN) menos áreas de preservação, interesse ecológico e servidão. A alíquota varia de 0,03% a 20% conforme tabela progressiva que considera área total e Grau de Utilização (GU). Propriedades pequenas e produtivas pagam menos; grandes e improdutivas pagam mais.'
          },
          {
            question: 'Quem está isento de ITR?',
            answer: 'Pequenas glebas rurais: até 30 hectares (Norte/Nordeste e Polígono das Secas), 50 ha (Centro-Oeste) ou 100 ha (Sul/Sudeste), desde que o proprietário não tenha outro imóvel. Também são isentas comunidades quilombolas, terras indígenas e áreas de preservação permanente.'
          },
          {
            question: 'Qual o prazo para declarar?',
            answer: 'A DITR (Declaração do ITR) deve ser entregue até o último dia útil de setembro de cada ano. O pagamento pode ser feito em cota única (com desconto) até essa data, ou em até 4 quotas mensais (setembro a dezembro), desde que cada quota seja no mínimo R$ 50,00.'
          },
          {
            question: 'O que é Grau de Utilização?',
            answer: 'GU é o percentual da área aproveitável que está sendo efetivamente utilizada com produção agropecuária. Exemplo: propriedade de 1.000 ha com 800 ha aproveitáveis e 600 ha produzindo = GU de 75%. Quanto maior o GU, menor a alíquota do ITR.'
          }
        ]
      }
    },
    {
      id: 'ii',
      name: 'II',
      description: 'Imposto de Importação',
      icon: 'GlobeAmericasIcon',
      content: {
        title: 'II - Imposto de Importação',
        summary: 'O II é um imposto federal que incide sobre produtos estrangeiros que entram no país. Tem função regulatória, protegendo a indústria nacional e regulando o comércio exterior.',
        periodicity: 'No desembaraço aduaneiro',
        legalBasis: 'Decreto-Lei nº 37/1966 e Regulamento Aduaneiro (Decreto nº 6.759/2009)',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior',
        details: [
          'Alíquotas variam conforme a TEC (Tarifa Externa Comum do Mercosul) e NCM do produto',
          'Podem variar de 0% a 35%, com a maioria entre 10% e 20%',
          'Base de cálculo: valor aduaneiro (CIF - custo + seguro + frete)',
          'Pode ser alterado pelo Executivo sem necessidade de lei (instrumento de política econômica)',
          'Isenções: bagagem de viajante (até US$ 1.000), remessas postais (até US$ 50), alguns insumos sem similar nacional',
          'Regimes especiais: drawback, admissão temporária, entreposto aduaneiro (suspensão ou redução)',
          'Declaração via Siscomex (Sistema Integrado de Comércio Exterior)',
          'Fato gerador: desembaraço aduaneiro (liberação da mercadoria pela Receita Federal)'
        ],
        faqs: [
          {
            question: 'Como é calculado o Imposto de Importação?',
            answer: 'Base de cálculo: valor aduaneiro (CIF) = custo da mercadoria + frete internacional + seguro internacional. Alíquota: conforme NCM (classificação fiscal) do produto na TEC (varia de 0% a 35%). Além do II, incidem IPI, PIS-Importação, COFINS-Importação e ICMS no desembaraço.'
          },
          {
            question: 'Qual a alíquota do Imposto de Importação?',
            answer: 'Varia conforme o produto (NCM). Matérias-primas e bens de capital: 0% a 14%. Bens de consumo: 16% a 35%. A TEC (Tarifa Externa Comum) do Mercosul define as alíquotas padrão. O governo pode aumentar ou reduzir temporariamente para fins de política econômica.'
          },
          {
            question: 'Compras internacionais pagam imposto?',
            answer: 'Sim. Compras em sites internacionais sofrem II + ICMS no desembaraço. Remessas até US$ 50 via Remessa Conforme têm imposto de 60% simplificado. Bagagem de viajante: isenção até US$ 1.000 (aéreo/marítimo) ou US$ 500 (terrestre/fluvial). Valores superiores pagam II + outros tributos.'
          },
          {
            question: 'O que é Drawback?',
            answer: 'Regime aduaneiro especial que suspende ou elimina tributos (II, IPI, PIS, COFINS) na importação de insumos destinados à produção de bens para exportação. Objetivo: tornar produtos brasileiros competitivos no mercado externo, eliminando a carga tributária sobre insumos importados.'
          }
        ]
      }
    },
    {
      id: 'ie',
      name: 'IE',
      description: 'Imposto de Exportação',
      icon: 'ArrowUpTrayIcon',
      content: {
        title: 'IE - Imposto de Exportação',
        summary: 'O IE é um imposto federal que pode incidir sobre produtos brasileiros destinados ao exterior. Na prática, é raramente utilizado, pois o Brasil incentiva exportações. Quando aplicado, tem função regulatória para evitar desabastecimento interno.',
        periodicity: 'No desembaraço aduaneiro de exportação (quando aplicável)',
        legalBasis: 'Decreto-Lei nº 1.578/1977 e Regulamento Aduaneiro (Decreto nº 6.759/2009)',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior',
        details: [
          'Alíquota máxima: 30% (pode ser alterada pelo Executivo)',
          'Na prática, alíquota é 0% para a maioria dos produtos (política de incentivo à exportação)',
          'Pode ser ativado pontualmente para produtos primários em situação de desabastecimento interno',
          'Exemplos históricos: minério de ferro, produtos agrícolas em períodos de escassez',
          'Base de cálculo: preço normal (valor da mercadoria no mercado internacional)',
          'Isenção constitucional para produtos industrializados (regra geral)',
          'Exportações são desoneradas de PIS, COFINS, IPI e ICMS (imunidade/isenção)',
          'Pouquíssimas operações realmente pagam IE atualmente'
        ],
        faqs: [
          {
            question: 'Exportações pagam imposto no Brasil?',
            answer: 'Regra geral: NÃO. Exportações são desoneradas (PIS, COFINS, IPI, ICMS isentos/imunes). O Imposto de Exportação (IE) existe legalmente, mas a alíquota é 0% para praticamente todos os produtos. Apenas em situações excepcionais (risco de desabastecimento) pode ser ativado para produtos primários.'
          },
          {
            question: 'Quando incide o Imposto de Exportação?',
            answer: 'Raramente. O IE pode ser aplicado em situações específicas para evitar desabastecimento interno de produtos essenciais (minérios, commodities agrícolas). O governo usa essa ferramenta pontualmente como instrumento de política econômica. Para a vasta maioria dos produtos, a alíquota é zero.'
          },
          {
            question: 'Qual a alíquota do IE?',
            answer: 'Legalmente pode chegar a 30%, mas na prática é 0% para quase todos os produtos. O governo brasileiro adota política de desoneração das exportações para estimular vendas externas. Apenas em casos muito específicos e temporários, produtos primários podem ter alíquota positiva.'
          },
          {
            question: 'Quais tributos não incidem na exportação?',
            answer: 'Exportações são isentas/imunes de: IPI, PIS, COFINS (isenção total), ICMS (imunidade constitucional), IE (alíquota zero). Além disso, no regime não-cumulativo, é possível manter créditos de PIS/COFINS sobre insumos usados em produtos exportados, gerando saldo credor.'
          }
        ]
      }
    },
    {
      id: 'ipva',
      name: 'IPVA',
      description: 'Imposto sobre Propriedade de Veículos Automotores',
      icon: 'TruckIcon',
      content: {
        title: 'IPVA - Imposto sobre a Propriedade de Veículos Automotores',
        summary: 'O IPVA é um imposto estadual que incide sobre a propriedade de veículos automotores (carros, motos, caminhões, etc.). Cada estado define suas próprias alíquotas, benefícios fiscais e calendário de pagamento.',
        periodicity: 'Anual - conforme calendário estadual',
        legalBasis: 'Constituição Federal art. 155, III e legislação estadual',
        reference: 'Secretaria da Fazenda do seu estado',
        details: [
          'Alíquotas variam por estado: geralmente 1% a 4% sobre o valor venal do veículo',
          'Valor venal: baseado na Tabela FIPE ou tabela estadual',
          'Carros de passeio: tipicamente 3% a 4%',
          'Motos: geralmente 2% a 3%',
          'Caminhões e utilitários: 1% a 2%',
          'Isenções comuns: veículos com mais de 15-20 anos, táxis, pessoas com deficiência, veículos de entidades beneficentes',
          'Calendário de vencimento varia por estado, geralmente escalonado pelo final da placa',
          'Desconto para pagamento em cota única ou antecipado (varia por estado)',
          '50% da receita fica com o estado, 50% com o município onde o veículo está licenciado'
        ],
        faqs: [
          {
            question: 'Como é calculado o IPVA?',
            answer: 'Base de cálculo: valor venal do veículo (conforme Tabela FIPE ou tabela do estado). Alíquota: varia por estado e tipo de veículo (1% a 4%). Exemplo: carro no valor de R$ 50.000 com alíquota de 4% = IPVA de R$ 2.000/ano. Veículos usados têm IPVA menor devido à depreciação.'
          },
          {
            question: 'Qual a alíquota do IPVA?',
            answer: 'Varia por estado. Exemplos: SP: 4% (carros), 2% (motos), 1,5% (caminhões). RJ: 4% (carros), 2% (motos). MG: 4% (carros), 2% (motos). Veículos movidos a gás/elétricos podem ter desconto. Consulte a Secretaria da Fazenda do seu estado para alíquotas específicas.'
          },
          {
            question: 'Quem está isento de IPVA?',
            answer: 'Isenções variam por estado. Comuns: veículos com mais de 15-20 anos, táxis, pessoas com deficiência (condutor ou transportado), máquinas agrícolas, entidades filantrópicas, ônibus de transporte coletivo. Veículos elétricos têm isenção em alguns estados (ex: SP até 2025).'
          },
          {
            question: 'Qual o prazo para pagar o IPVA?',
            answer: 'Varia por estado e final da placa. Geralmente: Janeiro a Maio, escalonado. Exemplo SP: placa final 1 em janeiro, 2 em fevereiro, etc. Desconto de 3% a 10% para pagamento em cota única (varia por estado). Parcelamento: geralmente 3 a 5 vezes sem juros.'
          }
        ]
      }
    },
    {
      id: 'itcmd',
      name: 'ITCMD',
      description: 'Imposto sobre Transmissão Causa Mortis e Doação',
      icon: 'GiftIcon',
      content: {
        title: 'ITCMD - Imposto sobre Transmissão Causa Mortis e Doação',
        summary: 'O ITCMD (ou ITCD) é um imposto estadual que incide sobre a transmissão de bens e direitos por herança (causa mortis) ou doação. Cada estado tem sua própria legislação, alíquotas e isenções.',
        periodicity: 'Por evento (herança ou doação)',
        legalBasis: 'Constituição Federal art. 155, I e legislação estadual',
        reference: 'Secretaria da Fazenda do seu estado',
        details: [
          'Alíquotas variam por estado: de 2% a 8% sobre o valor do bem',
          'Progressividade: alguns estados têm alíquotas progressivas conforme o valor (SP, RJ, MG)',
          'Incide sobre: herança, legado, doação de bens móveis e imóveis, direitos',
          'Fato gerador: falecimento (causa mortis) ou ato de doação',
          'Isenções comuns: pequenas heranças (até determinado valor), doações para entidades beneficentes, alguns estados isentam imóveis de baixo valor',
          'Alíquota máxima constitucional: 8% (Senado pode definir)',
          'Base de cálculo: valor venal do imóvel (IPTU) ou valor de mercado declarado',
          'Obrigatório para abertura de inventário e lavratura de escritura de doação'
        ],
        faqs: [
          {
            question: 'Como é calculado o ITCMD?',
            answer: 'Base de cálculo: valor venal (imóveis) ou valor de mercado (bens móveis, direitos) dos bens transmitidos. Alíquota: 2% a 8% conforme estado e valor. Exemplo SP: alíquota progressiva de 4% até R$ 150.000, depois 6% e 8% (limites atualizados). É pago antes da formalização da transferência (inventário/escritura).'
          },
          {
            question: 'Qual a alíquota do ITCMD?',
            answer: 'Varia por estado. SP: 4%, 6% ou 8% (progressivo). RJ: 4%, 5%, 6%, 7% ou 8% (progressivo). MG: 5% (até determinado valor) e 8% acima. Estados menores: geralmente 4% a 6% fixo. Consulte a legislação do estado onde estão localizados os bens (imóveis) ou onde residia o falecido.'
          },
          {
            question: 'Doação de dinheiro paga ITCMD?',
            answer: 'Sim. Doação de dinheiro, veículos, imóveis, cotas sociais, ações, etc., sofre incidência de ITCMD. O doador ou donatário (conforme estado) deve declarar e recolher o imposto. Exceção: doações de pequeno valor (limite varia por estado) podem ter isenção. Sem comprovante de pagamento, não se lavra escritura.'
          },
          {
            question: 'Quando devo pagar o ITCMD?',
            answer: 'Herança: antes da finalização do inventário (judicial ou extrajudicial). Doação: antes da lavratura da escritura pública. O cartório/juiz exige comprovante de pagamento do ITCMD para prosseguir. Prazo varia por estado, geralmente 30 a 180 dias após falecimento ou doação (com multa e juros após o prazo).'
          }
        ]
      }
    },
    {
      id: 'iptu',
      name: 'IPTU',
      description: 'Imposto Predial e Territorial Urbano',
      icon: 'HomeIcon',
      content: {
        title: 'IPTU - Imposto Predial e Territorial Urbano',
        summary: 'O IPTU é um imposto municipal que incide sobre a propriedade de imóveis urbanos (casas, apartamentos, terrenos, prédios comerciais). Cada município define suas próprias alíquotas, planta de valores e calendário.',
        periodicity: 'Anual - conforme calendário municipal',
        legalBasis: 'Constituição Federal art. 156, I e legislação municipal (Código Tributário Municipal)',
        reference: 'Prefeitura do município onde o imóvel está localizado',
        details: [
          'Alíquotas variam por município e tipo de imóvel: geralmente 0,5% a 2% do valor venal',
          'Valor venal: determinado pela planta genérica de valores do município (preço de mercado estimado)',
          'Alíquotas diferenciadas: residencial (menor), comercial (média), terreno baldio (maior - função social)',
          'Progressividade: IPTU pode ser progressivo no tempo para terrenos não edificados/subutilizados',
          'Isenções: imóveis de entidades beneficentes, templos religiosos, aposentados/pensionistas (conforme lei municipal)',
          'Descontos: pagamento em cota única ou antecipado (5% a 20% conforme município)',
          'Parcelamento: geralmente 10 a 12 vezes sem juros',
          'Calendário: geralmente janeiro a dezembro, conforme número de inscrição ou bairro'
        ],
        faqs: [
          {
            question: 'Como é calculado o IPTU?',
            answer: 'Base de cálculo: valor venal do imóvel (definido pela prefeitura na planta de valores, baseado em localização, área, padrão construtivo). Alíquota: varia por município (0,5% a 2%). Exemplo: imóvel com valor venal de R$ 300.000 e alíquota de 1% = IPTU de R$ 3.000/ano.'
          },
          {
            question: 'Qual a alíquota do IPTU?',
            answer: 'Varia por município e tipo de imóvel. São Paulo (capital): 0,5% a 1,7% (residencial), até 3% (terrenos). Rio de Janeiro: 0,6% a 2,2%. Capitais tendem a ter alíquotas maiores. Municípios pequenos: 0,5% a 1,5%. Terrenos baldios costumam ter alíquota majorada para cumprir função social.'
          },
          {
            question: 'Quem tem isenção de IPTU?',
            answer: 'Isenções variam por município. Comuns: aposentados/pensionistas com renda até X salários mínimos e único imóvel até certo valor; imóveis de entidades religiosas, culturais, educacionais sem fins lucrativos; alguns municípios isentam imóveis de baixo valor ou áreas de preservação.'
          },
          {
            question: 'Posso parcelar o IPTU?',
            answer: 'Sim. Quase todos os municípios permitem parcelamento em 10 a 12 vezes sem juros. Pagamento em cota única geralmente tem desconto de 5% a 20%. O carnê é enviado pelo correio ou disponível para impressão no site da prefeitura. Débitos atrasados podem ser parcelados com juros e multa.'
          }
        ]
      }
    },
    {
      id: 'itbi',
      name: 'ITBI',
      description: 'Imposto sobre Transmissão de Bens Imóveis',
      icon: 'BuildingOfficeIcon',
      content: {
        title: 'ITBI - Imposto sobre Transmissão de Bens Imóveis',
        summary: 'O ITBI (ou ITIV) é um imposto municipal que incide sobre a transmissão onerosa de imóveis (compra e venda, permuta, etc.). É pago uma única vez na transferência da propriedade e é condição para registro no cartório.',
        periodicity: 'Por evento (na compra/venda de imóvel)',
        legalBasis: 'Constituição Federal art. 156, II e legislação municipal (Código Tributário Municipal)',
        reference: 'Prefeitura do município onde o imóvel está localizado',
        details: [
          'Alíquotas variam por município: geralmente 2% a 3% sobre o valor do imóvel',
          'Base de cálculo: valor venal (conforme avaliação da prefeitura) ou valor de transação, o que for maior',
          'Fato gerador: transmissão onerosa (compra e venda, permuta, dação em pagamento, etc.)',
          'Não incide sobre: herança ou doação (incide ITCMD estadual nesses casos)',
          'Responsável: comprador (adquirente), salvo convenção em contrário',
          'Obrigatório para registro da escritura no Cartório de Registro de Imóveis',
          'Isenções: incorporação imobiliária ao patrimônio de PJ (realização de capital), alguns municípios isentam programas habitacionais',
          'Pagamento: geralmente à vista, antes do registro da escritura'
        ],
        faqs: [
          {
            question: 'Como é calculado o ITBI?',
            answer: 'Base de cálculo: maior valor entre o declarado na transação e o valor venal de referência da prefeitura. Alíquota: geralmente 2% a 3% conforme município. Exemplo: compra de imóvel por R$ 400.000 em município com ITBI de 2,5% = R$ 10.000. É pago antes do registro em cartório.'
          },
          {
            question: 'Qual a diferença entre ITBI e ITCMD?',
            answer: 'ITBI é municipal, incide sobre transmissões onerosas (compra e venda) e alíquota geralmente 2-3%. ITCMD é estadual, incide sobre transmissões gratuitas (herança e doação) e alíquota geralmente 4-8%. Comprou o imóvel = ITBI. Recebeu por herança ou doação = ITCMD.'
          },
          {
            question: 'Quando devo pagar o ITBI?',
            answer: 'Antes do registro da escritura no Cartório de Registro de Imóveis. O fluxo: assina escritura no cartório de notas → emite guia de ITBI na prefeitura → paga ITBI → apresenta comprovante no cartório de registro → cartório registra a transferência. Sem ITBI pago, não há registro.'
          },
          {
            question: 'Financiamento imobiliário paga ITBI?',
            answer: 'Sim. O ITBI incide normalmente sobre o valor total do imóvel, independente de ser à vista ou financiado. O comprador deve pagar o ITBI com recursos próprios antes de registrar a escritura e a hipoteca. Alguns programas habitacionais (Minha Casa Minha Vida) podem ter isenção conforme município.'
          }
        ]
      }
    },
    {
      id: 'reforma-tributaria',
      name: 'Reforma Tributária',
      description: 'Nova estrutura tributária brasileira - IBS, CBS e Imposto Seletivo',
      icon: 'SparklesIcon',
      content: {
        title: 'Reforma Tributária - A Nova Era dos Tributos no Brasil',
        summary: 'A Reforma Tributária (EC 132/2023) representa a maior mudança no sistema tributário brasileiro em décadas. Simplifica a tributação sobre consumo, substituindo cinco tributos (ICMS, ISS, PIS, COFINS e IPI) por três novos: IBS (Imposto sobre Bens e Serviços), CBS (Contribuição sobre Bens e Serviços) e IS (Imposto Seletivo). A transição será gradual de 2026 a 2033.',
        periodicity: 'Implementação gradual de 2026 a 2033',
        legalBasis: 'Emenda Constitucional nº 132/2023 e Lei Complementar nº 214/2025',
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria',
        details: [
          'SUBSTITUIÇÃO DE TRIBUTOS: IBS e CBS substituirão ICMS, ISS, PIS, COFINS e IPI',
          'IBS - Imposto sobre Bens e Serviços: substitui ICMS e ISS, gerido por estados e municípios através do Comitê Gestor do IBS',
          'CBS - Contribuição sobre Bens e Serviços: substitui PIS, COFINS e IPI, tributo federal',
          'IS - Imposto Seletivo: tributo federal sobre produtos prejudiciais à saúde e meio ambiente (cigarros, bebidas alcoólicas, veículos, etc)',
          'ALÍQUOTA PADRÃO ESTIMADA: 27,5% (IBS + CBS somados), podendo chegar a 28,5% - uma das maiores do mundo',
          'MODELO IVA (Imposto sobre Valor Agregado): não-cumulativo pleno, com crédito integral na cadeia',
          'CASHBACK: devolução de tributos para famílias de baixa renda via CPF na nota',
          'SPLIT PAYMENT: recolhimento automático dos tributos no momento da transação, via sistema de pagamentos',
          'Transição: 2026 (CBS e IBS a 0,9% e 0,1% - teste), 2027-2032 (alíquotas crescentes com extinção gradual dos tributos antigos), 2033 (100% novo sistema)',
          'REGIMES ESPECÍFICOS: Simples Nacional mantido, mas adaptado. Regimes favorecidos para saúde, educação, transporte público, cultura',
          'REDUÇÃO DE 60%: medicamentos, dispositivos médicos e de acessibilidade, produtos de higiene e cuidados menstruais',
          'REDUÇÃO DE 30%: serviços de educação, serviços de saúde, produtos agropecuários, insumos agropecuários',
          'ISENÇÃO: cesta básica nacional (itens definidos em lei), serviços de educação de ensino superior (PROUNI), produtos hortifrutigranjeiros in natura'
        ],
        faqs: [
          {
            question: 'O que muda com a Reforma Tributária?',
            answer: 'A reforma substitui cinco tributos complexos (PIS, COFINS, IPI, ICMS, ISS) por três mais simples (CBS, IBS, IS). Adota o modelo IVA, com não-cumulatividade plena e crédito integral. Elimina a "guerra fiscal" entre estados. Simplifica drasticamente a apuração, mas aumenta a carga tributária média estimada para 27,5-28,5%.'
          },
          {
            question: 'Quando entra em vigor?',
            answer: 'Transição de 2026 a 2033. Em 2026-2027: período de testes (CBS e IBS com alíquotas reduzidas). 2027-2032: extinção gradual de PIS, COFINS, ICMS e ISS (redução de 1/6 ao ano), com aumento proporcional de CBS/IBS. 2033: sistema totalmente novo, tributos antigos extintos.'
          },
          {
            question: 'O que é IBS e CBS?',
            answer: 'IBS (Imposto sobre Bens e Serviços): tributo estadual/municipal que substitui ICMS e ISS, arrecadado no destino (onde o consumidor está). CBS (Contribuição sobre Bens e Serviços): tributo federal que substitui PIS, COFINS e IPI. Ambos seguem o modelo IVA com mesma base de cálculo e regras.'
          },
          {
            question: 'Qual será a alíquota final?',
            answer: 'Estimativa: 27,5% a 28,5% (IBS + CBS). A alíquota exata será definida após estudos atuariais para garantir neutralidade de receita. Setores terão alíquotas diferenciadas: redução de 60% (saúde), 30% (educação, alimentos), isenção (cesta básica). Imposto Seletivo adicional para produtos nocivos.'
          },
          {
            question: 'O que é o Imposto Seletivo?',
            answer: 'Tributo federal sobre produtos prejudiciais à saúde ou meio ambiente (princípio da seletividade e extrafiscalidade). Incidirá sobre: veículos, embarcações e aeronaves; cigarros e produtos fumígenos; bebidas alcoólicas; bebidas açucaradas; apostas; extração de minérios. Alíquotas ainda serão definidas.'
          },
          {
            question: 'Como fica o Simples Nacional?',
            answer: 'O Simples Nacional será mantido e adaptado ao novo sistema. Empresas continuarão pagando tributos de forma unificada, mas com CBS e IBS ao invés dos tributos antigos. Os anexos e faixas de tributação serão ajustados. Objetivo: preservar o tratamento diferenciado para micro e pequenas empresas.'
          },
          {
            question: 'O que é Split Payment?',
            answer: 'Sistema de recolhimento automático dos tributos no momento da transação de venda. Ao pagar uma compra, o sistema separa automaticamente o valor do imposto e transfere ao fisco, enquanto o restante vai ao vendedor. Reduz sonegação e elimina a necessidade de apuração mensal tradicional.'
          },
          {
            question: 'Haverá aumento de impostos?',
            answer: 'O governo afirma que a reforma é neutra em arrecadação (não aumenta nem diminui a carga total). Porém, haverá redistribuição: setores que pagam pouco hoje (serviços) podem pagar mais; setores com benefícios fiscais perderão vantagens. A alíquota padrão estimada de 27,5% é alta, mas compensa a ampla base de incidência.'
          }
        ]
      }
    }
  ],
  impostosResources: {
    links: [
      {
        id: 'link-receita-federal',
        name: 'Portal da Receita Federal',
        description: 'Acesse o portal oficial da Receita Federal para consultar legislação, emitir guias e acompanhar processos',
        icon: 'LinkIcon',
        url: '/impostos/links/receita-federal',
        externalUrl: 'https://www.gov.br/receitafederal',
        category: 'Portal Governamental'
      },
      {
        id: 'link-simples-nacional',
        name: 'Portal do Simples Nacional',
        description: 'Central de serviços do Simples Nacional para MEI, ME e EPP',
        icon: 'LinkIcon',
        url: '/impostos/links/simples-nacional',
        externalUrl: 'https://www8.receita.fazenda.gov.br/SimplesNacional',
        category: 'Portal Governamental'
      },
      {
        id: 'link-reforma-tributaria',
        name: 'Reforma Tributária - Informações Oficiais',
        description: 'Documentação completa sobre a Reforma Tributária (EC 132/2023)',
        icon: 'LinkIcon',
        url: '/impostos/links/reforma-tributaria',
        externalUrl: 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria',
        category: 'Legislação'
      },
      {
        id: 'link-confaz',
        name: 'Portal CONFAZ',
        description: 'Conselho Nacional de Política Fazendária - Legislação de ICMS',
        icon: 'LinkIcon',
        url: '/impostos/links/confaz',
        externalUrl: 'https://www.confaz.fazenda.gov.br',
        category: 'Portal Governamental'
      },
      {
        id: 'link-sped',
        name: 'Portal SPED',
        description: 'Sistema Público de Escrituração Digital - Legislação e manuais',
        icon: 'LinkIcon',
        url: '/impostos/links/sped',
        externalUrl: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital',
        category: 'Sistema Fiscal'
      }
    ],
    downloads: [
      {
        id: 'download-tabela-irpj',
        name: 'Tabela de Alíquotas IRPJ/CSLL',
        description: 'Tabela completa com alíquotas de IRPJ e CSLL por regime tributário (PDF)',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/tabela-irpj',
        fileType: 'PDF',
        fileSize: '245 KB',
        category: 'Tabelas e Alíquotas'
      },
      {
        id: 'download-calendarios',
        name: 'Calendário de Obrigações 2025',
        description: 'Calendário completo de vencimentos de impostos e obrigações acessórias',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/calendario-2025',
        fileType: 'PDF',
        fileSize: '1.2 MB',
        category: 'Calendários'
      },
      {
        id: 'download-guia-reforma',
        name: 'Guia Prático da Reforma Tributária',
        description: 'Manual explicativo sobre as mudanças da Reforma Tributária (EC 132/2023)',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/guia-reforma',
        fileType: 'PDF',
        fileSize: '3.5 MB',
        category: 'Guias e Manuais'
      },
      {
        id: 'download-planilha-simples',
        name: 'Planilha de Cálculo - Simples Nacional',
        description: 'Planilha Excel para cálculo de tributos do Simples Nacional',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/planilha-simples',
        fileType: 'XLSX',
        fileSize: '156 KB',
        category: 'Planilhas'
      },
      {
        id: 'download-checklist',
        name: 'Checklist Mensal de Impostos',
        description: 'Lista de verificação para não esquecer nenhuma obrigação tributária',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/checklist',
        fileType: 'PDF',
        fileSize: '180 KB',
        category: 'Checklists'
      },
      {
        id: 'download-tabela-pis-cofins',
        name: 'Tabela PIS/COFINS - Regimes Cumulativo e Não-Cumulativo',
        description: 'Comparativo de alíquotas e regras para PIS e COFINS',
        icon: 'ArrowDownTrayIcon',
        url: '/impostos/downloads/tabela-pis-cofins',
        fileType: 'PDF',
        fileSize: '320 KB',
        category: 'Tabelas e Alíquotas'
      }
    ]
  },
  calculadoras: [
    {
      id: 'calc-inss',
      name: 'Calculadora INSS',
      description: 'Cálculo de contribuição ao INSS (empregado e empresa)',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-inss'
    },
    {
      id: 'calc-irrf',
      name: 'Calculadora IRRF',
      description: 'Cálculo de Imposto de Renda Retido na Fonte',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-irrf'
    },
    {
      id: 'calc-simples',
      name: 'Simples Nacional',
      description: 'Estimativa de tributação pelo Simples Nacional',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-simples'
    },
    {
      id: 'calc-multa',
      name: 'Multa por Atraso',
      description: 'Cálculo de multa por atraso na entrega de obrigações',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-multa'
    },
    {
      id: 'calc-juros',
      name: 'Juros sobre Tributos',
      description: 'Cálculo de juros sobre tributos em atraso',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-juros'
    },
    {
      id: 'calc-dimob',
      name: 'Multa DIMOB',
      description: 'Cálculo de multa por atraso na entrega da DIMOB',
      icon: 'CalculatorIcon',
      type: 'calculator',
      path: '/calculadora-dimob'
    }
  ]
};

export const categories = [
  { id: 'nacionais', name: 'Obrigações Nacionais', path: '/obrigacoes/nacionais', description: 'Declarações e obrigações acessórias federais: DCTF, ECF, ECD, EFD-Contribuições, DIRF, eSocial e mais' },
  { id: 'estaduais', name: 'Obrigações Estaduais', path: '/obrigacoes/estaduais', description: 'Obrigações fiscais estaduais: EFD-ICMS/IPI, GIA, SINTEGRA, DeSTDA e GIA-ST' },
  { id: 'municipais', name: 'Obrigações Municipais', path: '/obrigacoes/municipais', description: 'Declarações municipais: DIMOB, NFS-e, DES/DMISS/DIM e Livro Fiscal Eletrônico' },
  { id: 'trabalhistas', name: 'Obrigações Trabalhistas', path: '/obrigacoes/trabalhistas', description: 'Obrigações relacionadas a empregados: RAIS, GFIP, CAGED e eSocial Trabalhista' },
  { id: 'impostos', name: 'Impostos', path: '/impostos', description: 'Informações sobre os principais impostos: IRPJ, CSLL, PIS, COFINS, IPI, ICMS, ISS, INSS e FGTS' },
  { id: 'calculadoras', name: 'Calculadoras', path: '/calculadoras', description: 'Ferramentas de cálculo: INSS, IRRF, Simples Nacional, Multas, Juros e DIMOB' },
  { id: 'cnae', name: 'Consulta CNAE', path: '/cnae', description: 'Busque códigos CNAE e suas descrições na base de dados oficial do IBGE' },
];
