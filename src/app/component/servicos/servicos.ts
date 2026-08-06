import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {
  
  listaServicos = [
    {
      icone: '🌱',
      titulo: 'Compra Coletiva de Insumos',
      texto: 'Reduzimos os custos de produção por meio da compra conjunta de sementes, fertilizantes, rações e outros insumos agrícolas.'
    },
    {
      icone: '🚜',
      titulo: 'Assistência Técnica',
      texto: 'Oferecemos acompanhamento especializado para aumentar a produtividade, melhorar a gestão da propriedade e incentivar práticas sustentáveis.'
    },
    {
      icone: '🏦',
      titulo: 'Apoio ao Crédito Rural',
      texto: 'Auxiliamos os cooperados na busca por linhas de financiamento e programas de crédito para fortalecer seus investimentos.'
    },
    {
      icone: '🚛',
      titulo: 'Comercialização Conjunta',
      texto: 'Unimos a produção dos cooperados para ampliar o poder de negociação e conquistar melhores oportunidades de mercado.'
    },
    {
      icone: '🌾',
      titulo: 'Armazenamento da Produção',
      texto: 'Disponibilizamos estrutura adequada para armazenar grãos e outros produtos, preservando a qualidade até a comercialização.'
    },
    {
      icone: '🤝',
      titulo: 'Gestão Democrática',
      texto: 'Todos os cooperados participam das decisões da cooperativa, garantindo transparência e igualdade em cada votação.'
    },
    {
      icone: '📚',
      titulo: 'Educação e Capacitação',
      texto: 'Promovemos treinamentos, palestras e ações educativas para impulsionar o desenvolvimento dos produtores rurais.'
    },
    {
      icone: '🌎',
      titulo: 'Desenvolvimento Sustentável',
      texto: 'Incentivamos práticas responsáveis que preservam o meio ambiente e contribuem para o crescimento das futuras gerações.'
    }
  ];

}