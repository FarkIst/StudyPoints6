import React, { Component } from 'react';


export default class ImageComponent extends Component{
constructor(props){
    super(props);

    this.images = [
      new ImageHolder({image : 'images/image1.jpg'}),
      new ImageHolder({image : 'images/image2.jpg'}),
      new ImageHolder({image : 'images/image3.jpg'})
    ]
    this.state={
        currentImage: this.getRandomImage()
    };
    this.handleClick = this.handleClick.bind(this);
   }    
   handleClick(e){
       this.setState({
        currentImage: this.getRandomImage()
    });
   }
   getRandomImage(){
       var random=Math.floor(Math.random()*this.images.length);
       this.images[random];
   }
   render(){
       return(
       <div className="ImageComponent">
       <image src={this.state.currentImage.image} onClick={this.handleClick} />
       </div>
       );
   }
}
function ImageHolder(props) {
    this.image = props.image;
}