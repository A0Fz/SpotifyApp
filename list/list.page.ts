import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})


export class ListPage implements OnInit {

  musica : []
  artista: []
  album :  []

  nomeMusica;
  nomeAlbum;
  nomeArtista;
  
  constructor(private loadingController: LoadingController, private mDBservice: MusicService) {}

  ngOnInit() {
  
  }
  async consultaMusica(){
    //loading
    const loading = await this.loadingController.create(
      await this.mDBservice.getMusic(`?title=${this.nomeMusica}`).subscribe(
        
        data=>{
          
          this.musica = data;
          console.log(this.musica);
          loading.dismiss();
        },
        error=>{
          console.log(error);
          loading.dismiss();
        },
      ).add()
      ); 
      await loading.present()
  }

  async consultaAlbum(){
    //loading
    const loading = await this.loadingController.create(
      await this.mDBservice.getAlbum(`?A_name=${this.nomeAlbum}`).subscribe(

        data=>{
       
          this.album = data;
          loading.dismiss();
        },
        error=>{
          console.log(error);
          loading.dismiss();
        },
      ).add()
      ); 
      await loading.present()
  }
  async consultaArtista(){
    //loading
    const loading = await this.loadingController.create(
      await this.mDBservice.getArtist(`?name=${this.nomeArtista}`).subscribe(

        data=>{
       
          this.artista = data;
          loading.dismiss();
        },
        error=>{
          console.log(error);
          loading.dismiss();
        },
      ).add()
      ); 
      await loading.present()
  }
}
