import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})


export class ListPage implements OnInit {

  private music_name:string;
  private artist_name:string;
  private album_name:string;
  
  constructor(private loadingController: LoadingController) {}

  ngOnInit() {
    this.consultaAlbum()
    this.consultaMusica()
    this.consultaArtista()
  }
  async consultaMusica(index?){
    //loading
    const loading = await this.loadingController.create({
      message: 'Carregando Músicas...'
    });
  }

    async consultaAlbum(index?){
      //loading
      const loading = await this.loadingController.create({
        message: 'Carregando albuns...'
      });
    }
      async consultaArtista(index?){
        //loading
        const loading = await this.loadingController.create({
          message: 'Carregando Artistas...'
        });
  
      }
    
  
}
