

const circle=process.argv.slice(2)[0]*1;


calculate =(circle)=>{

    let area=(Math.PI)*(Math.pow(circle,2))
    console.log(`The area of ​​a circle with a radius of ${circle} is ${area}` )

}


calculate(circle)
