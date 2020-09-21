let btn = document.querySelectorAll('button');
let result = document.getElementById('blank');
let re;
let output;

for(let i = 0; i< btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        let userInput = prompt('Insert Your Answer');
        switch(btn[i]){
            case btn[0]:
                re = /^[A-Za-z0-9]/;
                output= re.test(userInput);
                break;
            case btn[1]:
                re = /^(\+)?(88)?01[0-9]{9}$/;
                output= re.test(userInput);
                break;
            case btn[2]:
                re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
                output = re.test(userInput);
                break;
            case btn[3]:
                re = /^[0-9]{4}$/;
                output = re.test(userInput);
                break;
            default:
                break;
        }
        if(output===false){
            result.className = ` alert bg-danger text-center text-white`;
            result.innerHTML = 'Invalid Expression';
        }else{
            result.className = `alert bg-success text-center text-white`;
            result.innerHTML = 'Valid Expression';
        }
    });
}


