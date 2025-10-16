import { Component } from '@angular/core';
import { Personagem } from '../../personagens/models/personagem.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardPersonagemComponent } from '../card-personagem/card-personagem.component';

@Component({
  selector: 'app-cadastro-personagem',
  standalone: true,
  imports: [FormsModule, CommonModule, CardPersonagemComponent],
  templateUrl: './cadastro-personagens.component.html',
  styleUrl: './cadastro-personagens.component.css'
})
export class CadastroPersonagemComponent {
  novoPersonagem: Personagem = {
    id: 0,
    nome: '',
    raca: '',
    nivel: 0,
    corFundo: '#ffffff',
    imagem: ''
  };

  contador = 0;
  mostrarLista = false;
  personagens: Personagem[] = [];

  salvarPersonagem() {
    if (!this.novoPersonagem.nome || !this.novoPersonagem.raca || !this.novoPersonagem.imagem) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    this.contador++;
    this.novoPersonagem.id = this.contador;
    this.personagens.push({ ...this.novoPersonagem });

    this.novoPersonagem = {
      id: 0,
      nome: '',
      raca: '',
      nivel: 0,
      corFundo: '#ffffff',
      imagem: ''
    };

    this.mostrarLista = true;
  }
}
