const maxFrogCapacity = 15
let numbFrogs = prompt("How many frogs are about to jump in?");
let isTooManyFrogs = numbFrogs >= maxFrogCapacity;
let isPoundOverCapacity = isTooManyFrogs ? "It's too crowded!" : "Come join us!";
print(isPoundOverCapacity);