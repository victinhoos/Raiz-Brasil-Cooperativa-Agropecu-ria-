import { Component } from '@angular/core';

import { Tumbnail } from '../../component/tumbnail/tumbnail';
import { Valores } from '../../component/valores/valores';
import { Footer } from '../../component/footer/footer';
import { Quemsomos } from '../../component/quemsomos/quemsomos';
import { Servicos } from '../../component/servicos/servicos';

import { Banner } from '../../component/banner/banner';
import { Banner1 } from '../../component/banner1/banner1';
import { Banner2 } from '../../component/banner2/banner2';
import { Inscricao } from '../../component/inscricao/inscricao';

@Component({
  selector: 'app-home',
  imports: [Tumbnail, Valores, Footer, Quemsomos, Servicos, Banner, Banner1, Banner2, Inscricao],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
