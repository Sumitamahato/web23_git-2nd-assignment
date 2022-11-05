function checkPrime(n){

  for(let i=2;i<=n**0.5;i++){

       if(n%i==0){

   return false;

}
   

    return true

}
}
console.log(checkPrime(13));
