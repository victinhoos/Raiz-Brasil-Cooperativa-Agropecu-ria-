import { Component } from '@angular/core';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {
  
  passos = [
    {
      numero: '1',
      titulo: 'Verifique os requisitos',
      texto: 'Ser produtor rural e atuar no Agreste de Pernambuco, cultivando grãos, hortifrúti ou trabalhando com produção leiteira.'
    },
    {
      numero: '2',
      titulo: 'Envie sua solicitação',
      texto: 'Preencha o formulário de interesse com seus dados pessoais e informações sobre sua propriedade rural.'
    },
    {
      numero: '3',
      titulo: 'Análise do cadastro',
      texto: 'Nossa equipe avaliará a documentação e entrará em contato para apresentar os benefícios e responsabilidades da cooperativa.'
    },
    {
      numero: '4',
      titulo: 'Torne-se um cooperado',
      texto: 'Após a aprovação, você passa a fazer parte da CRB e terá acesso aos serviços, benefícios e decisões da cooperativa.'
    }
  ];

}