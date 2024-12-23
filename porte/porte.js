body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.door {
  position: relative;
  width: 170px;
  height:270px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(2500px);
 
}
.door-front {
  width: 170px;
  height:270px;
  overflow: hidden;
  transform-origin: left;
  box-shadow: 30px 0 50px rgba(0,0,0,0.2);
  position: absolute;
  background-color: #924500;
  z-index:1;
  transition: .5s;
}

.door-front:before, .door-front:after {
  content:"";
  position: absolute;
  background-color: #924500;
  width: 105px;
  height: 75px;
  border: 10px ridge #b05500;
  left:22.5px;
}

.door-front:before {
  top:25px;
}

.door-front:after {
  top:155px;
}
.knob {
  position: absolute;
  width: 20px;
  height:30px;
  background-color: #eeba0b;
  top:122px;
  left:145px;
  border-radius:2px;
}

.knob:before {
  content:"";
  position: absolute;
  border-radius:50%;
  background-color: #f1c83c;
  width:18px;
  height:18px;
  left:-1px;
  box-shadow: 2px 2px rgba(0,0,0,0.2);
}

.knob:after {
  content:"";
  position: absolute;
  width:4px;
  height:7px;
  background-color: #333;
  top:20px;
  left:8.5px;
}

.door-back {
  position: relative;
  background: linear-gradient(0deg, rgba(193,124,116,1) 13%, rgba(73,88,103,1) 13%, rgba(79,100,124,1) 15%, rgba(87,115,153,1) 15%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 10px solid #edf2f4;
}

.rack {
  position: absolute;
  width: 7px;
  height:150px;
  background-color: #a78a7f;
  top:90px;
  left:100px;
}

.rack:before {
  content:"";
  position: absolute;
  width:70px;
  height:10px;
  border-radius: 30px 30px 0 0;
  background-color: #8c1c13;
  top:150px;
  left:-30px;
}

.rack:after {
  position: absolute;
  content:"";
  width:30px;
  height: 30px;
  border-bottom: 5px solid #a78a7f;
  border-right: 5px solid #a78a7f;
  border-bottom-right-radius:100%;
  top:20px;
}

.hat {
  position: absolute;
  width: 60px;
  height: 15px;
  border-radius:20px 20px 0 0; 
  background-color: #bf4342;
  top:80px;
  left:75px;
}

.hat:before {
  content:"";
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius:10px 10px 0 0; 
  background-color: #bf4342;
  top:-20px;
  left:10px;
  box-shadow: inset 0 -5px #e7d7c1;
}

.hat:after {
  content:"";
  position: absolute;
  width: 40px;
  height: 100px;
  background-color: #735751;
  border-radius: 50% 60% 20% 20% / 70% 70% 20% 20%;
  top:20px;
  left:45px;
}

.jacket {
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: #e7d7c1;
  border-radius:50%;
  top:120px;
  left:137px;
  box-shadow: 0 20px #e7d7c1;
}

.jacket:before {
  content:"";
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #a78a7f;
  left:-10px;
  top:40px;
}

.jacket:after {
  content:"";
  position: absolute;
  border-top: 15px solid #8c1c13;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  width:0;
  height:0;
  top:40px;
  left:-12px;
}

.door-mat {
  position: relative;
  perspective: 200px;
}

.door-mat:before {
  content:"";
  position: absolute;
  width: 170px;
  height: 70px;
  background: repeating-linear-gradient(#a8763e, #a8763e 10px,
  #9d741a 10px, #9d741a 20px);
  top:20px;
  outline:5px solid #a8763e;
  transform: rotateX(45deg);
}

.door:hover .door-front {
  transform: rotateY(-160deg); 
}