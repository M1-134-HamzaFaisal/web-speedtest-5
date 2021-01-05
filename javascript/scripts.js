// قم بإنشاء الدالة التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {}
let Name =prompt(`whats your name?`);
console.log(Name)

function sayHello(){
    alert(`Hello,${Name}`);
}
if(Name){
    sayHello()
}else{
    alert(`Invalid Input`)
}