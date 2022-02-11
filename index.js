const prompt = require('prompt-sync')();
console.log("pilih nomor operasi. dan masukan random jika ingin keluar")
console.log("1. Hitung jumlah kaos kaki yang dapat dijual");
console.log("2. Hitunglah jumlah kata yang tidak memiliki special karakter")
console.log("")
const actionInput = prompt('action : ');

if(actionInput == 1){

const input = prompt('input: ');
let arr = input.split(' ').map(arTemp => parseInt(arTemp, 10));
// // console.log(arr);
let total = 0;
let data = {
}
let unique = [];

//sort data qunatity into object
arr.forEach((a) => {
    if(!unique.includes(a)){
        unique.push(a);
        data[a.toString()] = 0
    }
})

//add more 
for(let i = 0; i<unique.length;i++){
    
    for(let j = 0; j<arr.length;j++){
        if(unique[i] === arr[j]){
            // data[unique[i].toString()].push(arr[j])
            let sum = data[unique[i].toString()] + 1;
            data[unique[i].toString()] = sum;
        }
    }
}
console.log(data)

//sum jumlah pasang kaos kaki
let sum = 0;
for(let i = 0; i<unique.length; i++){
    let property = parseInt(data[unique[i]]);
    if(property > 1){
        if(property%2==0){
            sum = sum + (property/2);
        }else{
            sum = sum + ((property -1)/2)
        }
    }
}
console.log("Output : "+sum)

}else if(actionInput == 2){
    console.log("masukan kalimat")
    const input = prompt('input: ');
    let arr = input.split(' ');
    
    let sum = 0;
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.*<>\/?~]/;
        return specialChars.test(str);
    }
    
    for(let i = 0; i<arr.length;i++){
        let check = containsSpecialChars(arr[i])
        console.log(check)
        if(check == false){
            arr = arr.filter(item => item != arr[i])
            
        }
    }
    console.log(arr)
    console.log("Output : "+arr.length)
    
}else{
    
    return ;
}