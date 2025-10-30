let btn = [];
for(let i = 1 ; i<= 18 ; i++ ){
    btn.push(document.querySelector(`.btn-${[i]}`));
}

let input = document.querySelector("input");

btn[0].addEventListener("click" , () =>{
    input.value = "";
});

let selectedBtns = [ 1 , 2 , 7 , 11];

selectedBtns.forEach((i) =>{
    btn[i].addEventListener("click" , () => {
    
    if(input.value == 0){
        return;
    }

    else{
        input.value += btn[i].innerText ;
    }

   });
});

// btn[2].addEventListener("click" , () => {
    
//     if(input.value == 0){
//         return;
//     }

//     else{
//         input.value += "*" ;
//     }

// });

let selectedBtns2 = [4 , 5 , 6 , 8 , 9 , 10 , 12 , 13 , 14 , 15 , 16 ];
selectedBtns2.forEach((i) => {
    btn[i].addEventListener("click" , () => {
        input.value += btn[i].innerText;
    });
});

btn[3].addEventListener("click" , () =>{
    let temp = input.value;
    temp = temp.slice(0, temp.length - 1);
    input.value = temp;
});

btn[17].addEventListener("click" , () => {
    let result = eval(input.value);
    input.value = result;
    console.log(result);
});


