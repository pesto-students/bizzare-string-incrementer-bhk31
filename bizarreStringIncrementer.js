function bizarreStringIncrementer(str) {
let lastCharacter = str.charCodeAt(str.length - 1);

  if (lastCharacter >= 65 && lastCharacter <= 90 ||
    lastCharacter >= 97 && lastCharacter <= 122) {
    console.log(str + 1);
  }

  if (lastCharacter >= 48 && lastCharacter <= 56) {
    console.log(str.slice(0, -1) + (parseInt(str.charAt(str.length - 1)) + 1));
  }


  if (lastCharacter === 57) {
    let revArray = str.slice(0, -1).split("").reverse();
    let arrNum = []
    let hasZero = false;

    for (let i = 0; i < revArray.length; i++) {
      let char = revArray[i];
      if (char.charCodeAt(0) >= 49 && char.charCodeAt(0) <= 57) {
        arrNum.push(char);
      } else if (char.charCodeAt(0) == 48) {
        hasZero = true;
        break;
      }
    }

    let increNum = (parseInt(arrNum.join('') + str.charAt(str.length - 1)) + 1)
    let numLen = increNum.toString(10).length;
    let end;
    if (hasZero) {
      end = numLen
    } else {
      end = numLen - 1
    }
    console.log(str.slice(0, end * (-1)) + increNum)
  }
}

bizarreStringIncrementer('foo');
bizarreStringIncrementer('foo23');
bizarreStringIncrementer('foo0041');
bizarreStringIncrementer('foo9');
bizarreStringIncrementer('foo099');
bizarreStringIncrementer('f99oo');
bizarreStringIncrementer('f99oo23');
bizarreStringIncrementer('f99oo099');
bizarreStringIncrementer('f99oo0099');