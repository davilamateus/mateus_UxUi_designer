const text1 = ('I’m Mateus D’avila, a Brazilian UX/UI desginer e Front- End based in Dublin, IE. I’m currently working at TheUp, focused on creating interactive experiences for  brands.').split('')
let textParagraph = '';
let textCountStart =-1;
let btnsPage0 = document.querySelectorAll('.btns-page0 button')
let btnsPage0CountStart = btnsPage0.length;
let pagePosition = 0
let pageNow = 0

//irish





function openHome(){

    document.querySelector('.page2').classList.add('displayNone') 
    document.querySelector('.page1').classList.add('displayNone')
    document.querySelector('.page3').classList.add('displayNone')
    document.querySelector('.page4').classList.add('displayNone') 
    document.querySelector('.page5').classList.add('displayNone')
    document.querySelector('.page6').classList.add('displayNone') 
    document.querySelector('.page7').classList.add('displayNone')

    for(let i = 0; i<=5;i++){
        addRigth(i)
        
    }

    function addRigth(n){
        console.log(n)
        setTimeout(() => {
            btnsPage0[n].classList.remove('right')
            
        }, 1*n);
    }

    document.querySelector('.page1').classList.add('opacity')
    document.querySelector('.page2').classList.add('opacity')


    document.querySelector('.page0').classList.remove('displayNone')

    setTimeout(() => {
        document.querySelector('.page0').classList.remove('opacity')

    }, 300);




}



function typeWrite(){

    text1.forEach(function(letra, i){   
      
    setTimeout(function(){
        document.querySelector('.text-page0 p').innerHTML += letra;
    }, 14 * i)

  });
}

typeWrite();





let positionPage = 0

document.querySelector('.page1').style.transform = "scale(0.95)" 
document.querySelector('.page2').style.transform = "scale(0.95)" 
document.querySelector('.page3').style.transform = "scale(0.95)" 
document.querySelector('.page4').style.transform = "scale(0.95)" 
document.querySelector('.page5').style.transform = "scale(0.95)" 
document.querySelector('.page6').style.transform = "scale(0.95)" 
document.querySelector('.page7').style.transform = "scale(0.95)" 

function changePage(n){




    pageNow = n
    console.log(pageNow)

  
        document.querySelector(`.page${n}`).classList.remove('displayNone')
        setTimeout(() => {
            document.querySelectorAll('.container-portifolio')[n-1].classList.remove('opacity')            
        }, 1500);
        setTimeout(() => {
            document.querySelector(`.page${n}`).classList.remove('opacity')
        }, 1000);
    
    

    window.addEventListener("wheel", event => {
        console.log(positionPage)
        positionPage = (window.scrollY)
        if(positionPage>=0 && positionPage<=100 ){
            document.querySelector(`.page${n}`).style.transform = "scale(0.95)" 

        } else{
            document.querySelector(`.page${n}`).style.transform = "scale(1)" 
        }

        if(positionPage>=300 ){
            document.querySelectorAll('.tablet')[n-1].classList.add('tablet1') 
            setInterval(() => {

                if(document.querySelectorAll('.play')[n-1] != undefined){
                    document.querySelectorAll('.play')[n-1].play();

                }
                
            },300);
        } else{
            document.querySelectorAll('.tablet')[n-1].classList.remove('tablet1') 
        }
        if(positionPage>=2000 ){
            document.querySelectorAll('.gray')[0].classList.add('orange') 
            document.querySelectorAll('.gray')[1].classList.add('pink') 
            document.querySelectorAll('.gray')[2].classList.add('blue') 
            document.querySelectorAll('.gray')[3].classList.add('gray1') 
            document.querySelectorAll('.gray')[4].classList.add('green') 
            document.querySelectorAll('.gray')[5].classList.add('blue') 
            document.querySelectorAll('.gray')[6].classList.add('gray1') 

        } else{
            document.querySelectorAll('.gray')[0].classList.remove('orange') 
            document.querySelectorAll('.gray')[1].classList.remove('pink') 
            document.querySelectorAll('.gray')[2].classList.remove('blue') 
            document.querySelectorAll('.gray')[3].classList.remove('gray1') 
            document.querySelectorAll('.gray')[4].classList.remove('green') 
            document.querySelectorAll('.gray')[5].classList.remove('blue') 
            document.querySelectorAll('.gray')[6].classList.remove('gray1')         }


        if(window.scrollY>=180  ){
            document.querySelector(`.page${n}`).classList.add('background')
        }else{       
             document.querySelector(`.page${n}`).classList.remove('background')
    }
    });


    document.querySelector('.page0').classList.add('opacity')



    
    setTimeout(() => {
        document.querySelector('.page0').classList.add('displayNone')
        document.querySelector(`.page${n}`).classList.remove('close')

        

    }, 700);
    



    for(let i = 0; i<=5;i++){
        addRigth(i)
    }

    function addRigth(n){
        console.log(n)
        setTimeout(() => {
            btnsPage0[n].classList.add('right')
            
        }, 1*n);
    }



    

}