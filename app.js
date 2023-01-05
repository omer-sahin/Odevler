// const x=process.argv.slice(2)



// isprime=(min,max)=>{
//     for(let i=min;i<=max;i++){
//         let isnumber=true
//         for(let j=2;j<=i;j++){
//             if(i%j==0 && j!=i){
//                 isnumber=false
//             }
//         }

//         if(isnumber){
//             console.log(i)
//         }
//     }


// }



// isprime(x[0]*1,x[1]*1)

const circle=process.argv.slice(2)[0]*1;


calculate =(circle)=>{

    let area=(Math.PI)*(Math.pow(circle,2))
    console.log(`The area of ​​a circle with a radius of ${circle} is ${area}` )

}


calculate(circle)