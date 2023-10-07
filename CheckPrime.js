let num = 13;
count = 0;
for (let i = 1; i<= num; i++){
    if(n%i===0){
        count +=1
    }
}
if (count === 2){
    console.log("It is a Prime Number")
}
else{
    console.log("It is not a Prime Number")
}