import { Routes } from '@angular/router';
import { CadastroItensMagicosComponent } from './components/personagem/cadastro-itens-magicos/cadastro-itens-magicos.component';
import { CadastroPersonagemComponent } from './components/personagem/cadastro-personagens/cadastro-personagens.component';

export const routes: Routes = [
  { path: 'itens-magicos', component: CadastroItensMagicosComponent },
  { path: 'personagens', component: CadastroPersonagemComponent },
  { path: '', redirectTo: 'itens-magicos', pathMatch: 'full' }
];
