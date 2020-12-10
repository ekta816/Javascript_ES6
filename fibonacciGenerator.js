function fibonacciGenerator (n) {
    var answer = [];
    if(n===0){//first term only
        answer.push(0);
        }
    else if(n===1){//first and second terms
        answer.push(0);
        answer.push(1);
        }
    else {//more than two terms
        answer.push(0);
        answer.push(1);
        for(var i=2; i<n; i++){
            var temp = answer[i-1] + answer[i-2];
            answer.push(temp);
        }
    }
        
       return answer;
}

fibonacciGenerator(10);