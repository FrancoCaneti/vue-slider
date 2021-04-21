 const app = new Vue ({
       el:'#app',
       data:{

       
           photos:[
            "./images/180132.jpg",
            "./images/3d-wallpaper-custom-photo-mural-balcony-paris.jpg",
            "./images/japan-fuji-mountain-himeji-castle-full-cherry-blossom-h.jpg",
            "./images/Rio-de-Janeiro.jpg",
           ],
           indexPhoto:0,
       },
       methods: {
           prevPhoto() {
               this.indexPhoto -= 1;

               if(this.indexPhoto < 0) {
                   this.indexPhoto = this.photos.lenght - 1
               }
           },
           nextPhotos() {
               this.indexPhoto += 1;
               if( this.indexPhoto > ( this.photos.lenght -1) ) {
                    this.indexPhoto = 0;
               }
           }
       }
 });