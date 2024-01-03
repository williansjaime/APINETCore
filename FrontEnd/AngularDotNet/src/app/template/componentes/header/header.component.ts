import { Component } from '@angular/core';
import { ServiceService } from '../../../Service/service.service';
import { API_URL} from '../../../env';
import { CommonModule } from '@angular/common';

export interface PizzaList{
  idFuncionario:number;
  nomeFuncionario:string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

  pizza_lista:PizzaList[]=[];
  dados_carregados: boolean = false;

  constructor(private api_pizza_service:ServiceService) 
  {
    this.GetPizzaLista();
  } 

  async GetPizzaLista(): Promise<void> 
  {  
    try{      
        let url:string= API_URL+"/funcionario";
        const data = await this.api_pizza_service.GET(url);
        if(data!=null)
        {
          this.dados_carregados = true;
          this.pizza_lista.push(data[0]);  
          console.log(this.pizza_lista)  
        }

    } catch (error) {
      window.alert("Erro ao carregar campos!\n Verifique a conexão com internet!!!");    
    }   
  }
}
