

var output = [];

var count = 1;
function fizzBuzz() {
    if(count%3===0 && count%5===0){//count divisible by 3 and 5
        count++;
        output.push("FizzBuzz");
    }else if (count%3===0){//count divisible by 3
        count++;
        output.push("Fizz");
    }else if(count%5===0){//count divisible by 5
        count++;
        output.push("Buzz");
    }else{//count not divisible by 3 or 5
    output.push(count++);
    }
    console.log(output);//print
}






fizzBuzz();
