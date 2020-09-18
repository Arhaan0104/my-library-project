function bounceOff(value1,value2){
    if (value1.x - value2.x < value2.width/2 + value1.width/2
      && value2.x - value1.x < value2.width/2 + value1.width/2) {
        value1.velocityX = value1.velocityX * (-1);
        value2.velocityX = value2.velocityX * (-1);
  }
  if (value1.y - value2.y <value2.height/2 + value1.height/2
    && value2.y - value1.y < value2.height/2 +value1.height/2){
      value1.velocityY =value1.velocityY * (-1);
      value2.velocityY =value2.velocityY * (-1);
  }
  }