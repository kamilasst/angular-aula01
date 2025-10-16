import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex01.component.html',
  styleUrl: './ex01.component.css'
})
export class Ex01Component {

  titulo: string = 'Funcionários';
    funcionarios: {
      nome: string;
      cargo: string;
      status: string;
      corFundo: string;
    }[] = [
      { nome: 'Carla', cargo: 'Desenvolvedora', status: 'Ativo', corFundo: '#d1e7d4ff' },
      { nome: 'Emanoel', cargo: 'Designer', status: 'Inativo', corFundo: '#f8d7e4ff' },
      { nome: 'Bianca', cargo: 'Gerente', status: 'Ativo', corFundo: '#fff7cdff' }
    ];

    alternarTitulo() {
      this.titulo = this.titulo === 'Funcionários' ? 'Seres Místicos' : 'Funcionários';
    }
}

