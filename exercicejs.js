
/// exercice 1

const addnum=(n1,n2)=>n1+n2;
console.log(addnum(1,4))


/// exercice 2

const  minuteToSecond=(min)=>min*60
console.log(minuteToSecond(4))

/// exercice 3

const increment =(num) =>num+1
console.log(increment(4));


/// exercice 4

const getSurface =(b,h) =>(b*h)/2
console.log(getSurface(8,2))

/// exercice 5
const strReverse =(name) => {
   return String(name).split('').reverse().join("")
}

//// exerice 6 

const getMax=(n1,n2,n3)=> {
    if (n1>n2 && n1>n3) {
      return n1;
    } else if (n2>n1 && n2>n3) {
      return n2;
    }else{
     return n3;
    }
 }

 console.log(getMax(5,9,1))

// exercice 7

const getFirst=(n1,n2)=> {
  first =[n1,n2];
  return first[0];
  }
  console.log(getFirst(7,0))


// exercice  9 
const  restDiv=(n1,n2)=>n1%n2
console.log(restDiv(1,3))

// Partie 2

// exercice 1
const add =(a,b)=> {
  if (typeof a=== 'string' && typeof b==='string' ) {
      return parseInt(a)+parseInt(b)
  }else if (typeof a=== 'number' && typeof b==='number'){
    return a.toString()+ b.toString();
  }
  else{
      return null
  }
}
console.log(add(2,3))


// exercice 2

function prodImp(tab) {
  let produit=1
  for (let i = 0; i < tab.length; i++) {
      if (tab[i]%2  !==0) {
          produit *=tab[i]
      }
      
      
  }
  return produit
}
console.log(prodImp([1,2,3,4]))

//exerciceee 3


const repeChar=(name,n)=> {
  return (name).split("").map(char => char.repeat(n)).join("")
}
console.log(repeChar("meriem",5))