// 5000 1000 500 200 100 50 20 10 5 3 1

let bank = maney =>{
    let banknots = [5000 , 1000 , 500 , 200 , 100 , 50 , 20 , 10 , 5 , 3 , 1]
    let maneyCounted = [];

    if (maney > 0) {
        for(let i = 0; i < banknots.length; i++){
            let banknota = banknots[i]

            while(maney - banknota >= 0){
                maney -= banknota
                maneyCounted.push(banknota)
            }
        }
    } else{
        console.log("Я не могу выдать отрицательное количество денег зато я могу задушить тебя за то что ты настолько ***** что просиш отрицательное количество деняг")
    }

    document.querySelector('#outPut').innerHTML = maneyCounted
    return maneyCounted
}

bank(333)