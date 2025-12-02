// heart functonality

const cardContainerHerat = document.getElementById('card-container-heart');

cardContainerHerat.addEventListener('click',function(e){
    e.preventDefault()
    if (e.target.closest('.card-heart')) {
    
    const cardContainerHerat = parseInt(1)
    
    const nevberHeart = parseInt(document.getElementById('nevber-heart').innerText);
    

    const addHeart = cardContainerHerat + nevberHeart
    document.getElementById('nevber-heart').innerText = addHeart
    } 
})

// clear button functionality
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    document.getElementById('call-history').style.display = 'none'

      
})

// copy button functionality
cardContainerHerat.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.closest('.copy-btn')){

        const cardContainerHerat = parseInt(1)
        
        const navberCopyBtn = parseInt(document.getElementById('navber-copy-btn').innerText)

        const addCopy = navberCopyBtn + cardContainerHerat
        document.getElementById('navber-copy-btn').innerText = addCopy
    }
})


// all call  1


document.getElementById('all-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling National Emergency Service 999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// police call   2

document.getElementById('police-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Police Helpline Number Service 999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Fire Service Number call   3
document.getElementById('fier-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Fire Service Number  999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})

// Ambulance Service call   4
document.getElementById('health-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Ambulance Service Number 1994-999999... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})
 
// Women & Child Helpline call  5
document.getElementById('ambulance-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Women & Child Helpline Service Number 109... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})
// Anti-Corruption Helpline  6
document.getElementById('government-call').addEventListener('click',function(e){
    e.preventDefault()
    const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

       if( nevberCoin >= 20 ){
    alert("📞Colling Anti-Corruption Helpline Service Number 106... ")
            const callButton = parseInt(20)
        const nevberCoin = parseInt(document.getElementById('navber-coin').innerText)

        const subCoin = nevberCoin - callButton

        document.getElementById('navber-coin').innerText = subCoin
        }
    else{
    alert("❌ You don't have enough coins.You need at least 20 coins to make a call ")
}

})
