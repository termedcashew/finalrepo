function onClick(e) {
    e.preventDefault();
    // get form values
    let number = document.getElementById('number').value;

    function isBalanced(number) {

        let stack = [];
        for(let i = 0; i < number.length; i++) {
            let x = number[i];
     
            if (x == '(' || x == '[' || x == '{') {
                stack.push(x);
                continue;
            }
            if (stack.length == 0) {
                return false;
            }
            let check;
            switch (x){
            case ')':
                check = stack.pop();
                if (check == '{' || check == '['){
                    return false;
                }
                break;
     
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
     
            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
            }
        }
        return (stack.length == 0);
    }
 
 
    if (isBalanced(number)){
        document.getElementById('results').textContent = "Balanced";
    }
    else{
        document.getElementById('results').textContent = "Not Balanced";
    }
}

document.getElementById('go').addEventListener('click', onClick);