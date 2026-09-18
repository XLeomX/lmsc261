const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];
let Index = prompt("choose an activity for the frogs to do today");
Index = Index % 4;
print(activities[Index]);

