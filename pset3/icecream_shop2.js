const conesSoldPerHour = 14;
const inventory = 200;
for (let hour = 1; hour <=12; hour++) {
print(conesSoldPerHour * hour + " Sold at hour " + hour)
print("inventory " + (inventory - (conesSoldPerHour * hour)) + " left")
}