const calc = (age) => {
    if (age < 0) {
        return ("อายุไม่สามารถติดลบได้");
    } else if (age > 120) {
        return ("อายุไม่สามารถเกิน 120 ปีได้");
    } else if (age >= 18) {
        return ("เข้าได้");
    } else {
        return ("เข้าไม่ได้");
    }
}

let age = -1
console.log("input Age = ", age, "output : ",calc(age));
 age = 15
console.log("input Age = ", age, "output : ",calc(age));
 age = 20
console.log("input Age = ", age, "output : ",calc(age));
 age = 121
console.log("input Age = ", age, "output : ",calc(age));


const calcEven  = (_number)=> _number%2 ? "เลขคี่" : "เลขคู่";
let _number  = 1 ; 
console.log("input Age = ", _number, "output : ",calcEven(_number));
 _number  = 2 ; 
console.log("input Age = ", _number, "output : ",calcEven(_number));