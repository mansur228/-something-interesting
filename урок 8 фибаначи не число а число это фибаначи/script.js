let fn = document.getElementById('fibanachiIsNotNumber')
let fna = [0 , 1]
let nfban = 0


function fibanochiIsNotNumber(n)

{

    for (let i = 0; i < n; i++)
    
    {
        nfban = ((fna[fna.length - 1]) + (fna[fna.length - 2]))
        fna.push(nfban)
    }

}

fibanochiIsNotNumber(77)

fn.textContent = fna;