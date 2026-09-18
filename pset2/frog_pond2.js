const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];
let activity1 = prompt("choose an activity for the frogs to do today");
let Index = activity1 % activities.length;
print(activities[Index]);

