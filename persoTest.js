

const startTime = performance.now()

let k = []

for ( let i = 0; i < 100000000 ; i++){
    i**i
}


const endtTime = performance.now()

console.log(endtTime - startTime   );
