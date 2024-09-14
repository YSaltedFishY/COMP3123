function ex1_capitalize(str){
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

var s1 = "the quick brown fox";
var a1 = ex1_capitalize(s1);
console.log("Exercise 1: ");
console.log(a1);
console.log();

function ex2_largestInt(a,b,c){
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else{
        return c;
    }
}

console.log("Exercise 2:");
console.log(ex2_largestInt(1,0,1));
console.log(ex2_largestInt(0,-10,-20));
console.log(ex2_largestInt(1000,510,440));
console.log();

function ex3_right(str){
    if(str.length >= 3){
        let right = str.slice(-3);
        let left = str.slice(0,-3);
        return right+left;
    }else{
        return str;
    }
}

console.log("Exercise 3:");
console.log(ex3_right("Python"));
console.log(ex3_right("JavaScript"));
console.log(ex3_right("Hi"));
console.log();

function ex4_angle_type(a){
    if (a < 0 || a > 180){
        return a
    }else{
        if (a < 90){
            return "Acute angle";
        }else if(a == 90){
            return "Right angle";
        }else if(a < 180){
            return "Obtuse angle";
        }else{
            return "Straight angle";
        }
    }
}

console.log("Exercise 4:");
console.log(ex4_angle_type(47));
console.log(ex4_angle_type(90));
console.log(ex4_angle_type(145));
console.log(ex4_angle_type(180));
console.log();

function ex5_array_max(arr,k){
    let maxSum = 0;
    let current = 0;
    
    for(var i = 0; i < k; i++){
        current += arr[i];
    }

    maxSum = current;

    for (var i = k; i < arr.length; i++){
        current = current - arr[i-k] + arr[i];
        if(current > maxSum){
            maxSum = current;
        }
    }
    return maxSum;
}

console.log("Execrise 5:")
console.log(ex5_array_max([1, 2, 3, 14, 5], 2));
console.log(ex5_array_max([2, 3, 5, 1, 6], 3));
console.log(ex5_array_max([9, 3, 5, 1, 7], 2));
