function isLeap(year) {
    
  
    var answer = "Not leap year.";
    if (year %4 ===0){ //if divisible by 4 possible leap year
       if(year%100 ===0){//if divisible by 4 and 100 not a leap year
           if(year%400 ===0){//if divisible by 4, 100 and 400, leap year
               answer = "Leap year."
           }
           else{
           answer = "Not leap year.";//divisible by 4 and 100
           }
       }else {
           answer = "Leap year."//divisible by 4 and not 100
       }
    
    } else {
        answer = "Not leap year."//not divisible by 4
    }
    
        
    return answer;
    
    }
    
    isLeap(2100); 