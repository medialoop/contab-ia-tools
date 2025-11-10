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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/dctfweb',
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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital/escrituracao-contabil-fiscal-ecf',
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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital/escrituracao-contabil-digital-ecd',
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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital/escrituracao-fiscal-digital-da-contribuicao-para-o-pis-pasep-cofins-e-da-contribuicao-previdenciaria-sobre-a-receita-efd-contribuicoes',
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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/dirf',
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
        reference: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital/escrituracao-fiscal-digital-efd-icms-ipi',
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
        reference: 'https://www.confaz.fazenda.gov.br/',
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
    }
  ],
  municipais: [
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
        reference: 'https://www.gov.br/trabalho-e-previdencia/pt-br/assuntos/rais',
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
        reference: 'https://www.gov.br/trabalho-e-previdencia/pt-br/assuntos/previdencia-social/gfip',
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
        reference: 'https://www.gov.br/trabalho-e-previdencia/pt-br/assuntos/emprego-e-desemprego/caged',
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
  calculadoras: [
    {
      id: 'calc-inss',
      name: 'Calculadora INSS',
      description: 'Cálculo de contribuição ao INSS (empregado e empresa)',
      icon: 'CalculatorIcon',
      type: 'calculator'
    },
    {
      id: 'calc-irrf',
      name: 'Calculadora IRRF',
      description: 'Cálculo de Imposto de Renda Retido na Fonte',
      icon: 'CalculatorIcon',
      type: 'calculator'
    },
    {
      id: 'calc-simples',
      name: 'Simples Nacional',
      description: 'Estimativa de tributação pelo Simples Nacional',
      icon: 'CalculatorIcon',
      type: 'calculator'
    },
    {
      id: 'calc-multa',
      name: 'Multa por Atraso',
      description: 'Cálculo de multa por atraso na entrega de obrigações',
      icon: 'CalculatorIcon',
      type: 'calculator'
    },
    {
      id: 'calc-juros',
      name: 'Juros sobre Tributos',
      description: 'Cálculo de juros sobre tributos em atraso',
      icon: 'CalculatorIcon',
      type: 'calculator'
    }
  ]
};

export const categories = [
  { id: 'nacionais', name: 'Nacionais', path: '/nacionais' },
  { id: 'estaduais', name: 'Estaduais', path: '/estaduais' },
  { id: 'municipais', name: 'Municipais', path: '/municipais' },
  { id: 'trabalhistas', name: 'Trabalhistas', path: '/trabalhistas' },
  { id: 'calculadoras', name: 'Calculadoras', path: '/calculadoras' },
];
