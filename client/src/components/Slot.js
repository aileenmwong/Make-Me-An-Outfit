import React from 'react';
import Slider from 'react-image-slider';

class slotElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

    this.onclickStart = this.onclickStart.bind(this);
    this.onclickStop = this.onclickStop.bind(this);



  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });
    return images;
  }

  function changeImage() {
     $slotImage.each( function(i,d) {
      // console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * images.length)
      $(d).attr("src", slotElement[random]);
    })
  }


}

  onclickStart(){
    console.log("start");

  }

  onclickStop(){
    console.log("stop");
   ("click", startGame);
    });

  }


render() {
      return (
        <div className="randomizer">
            <div className="randomImg">
              {this.renderOutfits()}
             <button onClick= {this.onclickStop}>Stop</button>
             <button onClick= {this.onclickSave}>Save</button>
          </div>
        </div>
      );
    }
  }









const $els = {
  cell1: document.querySelector('.cell1'),
  cell2: document.querySelector('.cell2'),
  cell3: document.querySelector('.cell3'),
  startBtn: document.querySelector('#startbtn'),
  resetBtn: document.querySelector('#resetbtn'),
  stopBtn: document.querySelector('.stopBtn')
};

//assign images to an array
let slotElement= [
'images/art_cherry.png',
'images/art_jack.png',
'images/art_777.png',
'images/art_orange.png',
'images/art_king.png',
'images/art_lemon.png',
'images/art_straw.png',
'images/art_star.png'
];

  let imageIndex = 0;
  let $slotImage = $('.slotImage');
  let $textMsg = $('.textMsg');
  let gamebButton = true;

//function looping and randomizing the images
  function changeImage() {
     $slotImage.each( function(i,d) {
      // console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * slotElement.length)
      $(d).attr("src", slotElement[random]);
    })
  }

//click event activates the array of images
$els.startBtn.addEventListener("click", startGame);

//function start looping with a set interval and clear interval
function startGame(){
  if (!gamebButton) {
    ($textMsg).html('Test Your Luck').css({"color": "black"});
  }
  let sI = setInterval(changeImage, 100);
  $els.resetBtn.addEventListener("click", function(){
   clearInterval(sI)
  });
  gamebButton = false;
};
