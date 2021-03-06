import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

import { TelaProdutoPage } from '../tela-produto/tela-produto';
import { DescricaoProdutoPage } from '../descricao-produto/descricao-produto'
/**
 * Generated class for the EmpresaProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-produtos',
  templateUrl: 'empresa-produtos.html',
})
export class EmpresaProdutosPage {

  public lista_produtos = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmpresaProdutosPage');
    this.produtosProvider.getImageProductsByTag().subscribe(
      data=>{
        const response = (data as any);
        this.lista_produtos = response.data;
        console.log(this.lista_produtos);
      }, error =>{
        console.log(error);
      }
    )
  }

  goToTelaProdutoPage(){
    this.navCtrl.push(TelaProdutoPage)
  }

  goToDescricaoProdutoPage(){
    this.navCtrl.push(DescricaoProdutoPage)
  }
}
