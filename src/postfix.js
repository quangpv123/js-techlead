
function operator(x){
    return ['+', '-', '*', '/', '%'].includes(x);
}

function precedence(x){
    if(x=='+' || x=='-'){ return 1 }
    if(x=='*' || x=='/' || x=='%'){ return 2 }
    return 0;
}

function toPostfix(infix){
    var postfix = '';
    var stack = [];
    
    for(i=0; i < infix.length; i++){
        var x = infix[i];
        if(operator(x)){
            while(
                stack.length > 0
                && operator(stack[stack.length-1])
                && precedence(x) <= precedence(stack[stack.length-1])
                ){
                postfix += " " + stack.pop();
            }
            stack.push(x);
        }  
        
        else if (x === '(') {
            stack.push(x);
        }
        
        else if(x === ')'){
            while (stack.length > 0 && stack[stack.length-1] !== '('){
                postfix += " " + stack.pop();
            }
            stack.pop();
        }
        
        else {
            postfix += x;
        }
    }
    while(i==infix.length && stack.length > 0){
        postfix += " " + stack.pop();
    }

    //Chỉ giữ lại 1 khoảng trắng giữa các phần từ
    while(postfix.includes("  ")){
        postfix = postfix.replace("  ", " ");
    }

    return postfix
}

module.exports = toPostfix