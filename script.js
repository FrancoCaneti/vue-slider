const app = new Vue ({
    el:'#app',
    data: {
        photos: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
        ],
        indexPhoto:0,
    },
    methods: {
        prevPhoto(){
            this.indexPhoto -=1;
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.lenght -1
            }
        },
        nextPhoto(){
            this.indexPhoto += 1;
            if( this.indexPhoto >  (this.photos.lenght -1)) {
                this.index = 0;
            }
        }
       
    }
});