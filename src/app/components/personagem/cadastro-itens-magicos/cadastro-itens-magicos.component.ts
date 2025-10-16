import { Component } from '@angular/core';
import { ItemMagico } from '../../personagens/models/item-magico.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardItemMagicoComponent } from '../card-item-magico/card-item-magico.component';

@Component({
  selector: 'app-cadastro-itens-magicos',
  standalone: true,
  imports: [FormsModule, CommonModule, CardItemMagicoComponent],
  templateUrl: './cadastro-itens-magicos.component.html',
  styleUrl: './cadastro-itens-magicos.component.css'
})
export class CadastroItensMagicosComponent {
  novoItem: ItemMagico = {
    id: 0,
    nome: '',
    tipo: '',
    poder: 0,
    imagem: ''
  };

  contador = 0;
  mostrarLista = false;
  itens: ItemMagico[] = [];

  salvarItem() {
    if (!this.novoItem.nome || !this.novoItem.tipo || !this.novoItem.imagem) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    this.contador++;
    this.novoItem.id = this.contador;
    this.itens.push({ ...this.novoItem });

    this.novoItem = {
      id: 0,
      nome: '',
      tipo: '',
      poder: 0,
      imagem: ''
    };

    this.mostrarLista = true;
  }
}