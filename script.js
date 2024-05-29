let a = prompt("Son kiriting")
console.log(isNaN(a));
while (isNaN(a) || a / 1 === 0) {
    a = prompt("yana bir bor son kirtin")
}
if (a % 2 === 0) {
    alert('bu son juft')
} else {
    alert('bu toq son')
}

