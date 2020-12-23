
var remainingElement = [];
var flag = 0;

function eval(remainingElement){
    var z = [];
    var i ;
    for(i=0; i< remainingElement.length; i++){
        if(flag == 1){
            z.push(remainingElement[i])
            flag = 0;
        } else {
            flag = 1;
        }       
    }
    console.log(z);

    if(z.length != 0){
       x = eval(z)
    }
}

for(i=1; i<=1000;i++){
    remainingElement.push(i)
}
eval(remainingElement);