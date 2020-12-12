function bizarreStringIncrementer(str) {
  const ASCII_A = 65;
  const ASCII_Z = 90;
  const ASCII_a = 97;
  const ASCII_z = 122;
  const ASCII_0 = 48;
  const ASCII_9 = 57;
  
  if(typeof str !== "string") {
    throw 'Enter valid string!!';
  }

  let lastCharacter = str.charCodeAt(str.length - 1);
  let bizarreString = '';

  if (lastCharacter >= ASCII_A && lastCharacter <= ASCII_Z ||
    lastCharacter >= ASCII_a && lastCharacter <= ASCII_z) {
      bizarreString = str + 1;
  }

  if (lastCharacter >= ASCII_0 && lastCharacter <= (ASCII_9 -1) ) {
    bizarreString = str.slice(0, -1) + (parseInt(str.charAt(str.length - 1)) + 1);
  }


  if (Object.is(lastCharacter, ASCII_9) === true) {
    let revArray = str.slice(0, -1).split("").reverse();
    let arrNum = []
    let hasZero = false;

    for (let i = 0; i < revArray.length; i++) {
      let char = revArray[i];

      if (char.charCodeAt(0) >= (ASCII_0+1) && char.charCodeAt(0) <= ASCII_9) {
        arrNum.push(char);
      } else if (char.charCodeAt(0) == ASCII_0) {
        hasZero = true;
        break;
      }
    }

    let increNum = (parseInt(arrNum.join('') + str.charAt(str.length - 1)) + 1)
    let numLen = increNum.toString().length;
    let end;
    
    if (hasZero) {
      end = numLen
    } else {
      end = numLen - 1
    }
    
    bizarreString = str.slice(0, end * (-1)) + increNum;
  }

  return bizarreString;
}

console.log(bizarreStringIncrementer('foo'));
console.log(bizarreStringIncrementer('foo23'));
console.log(bizarreStringIncrementer('foo0041'));
console.log(bizarreStringIncrementer('foo9'));
console.log(bizarreStringIncrementer('foo099'));
console.log(bizarreStringIncrementer('f99oo'));
console.log(bizarreStringIncrementer('f99oo23'));
console.log(bizarreStringIncrementer('f99oo099'));
console.log(bizarreStringIncrementer('f99oo0099'));