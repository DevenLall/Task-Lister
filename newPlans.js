//importing my functions from the other file
const { addPlan, viewPlans, removePlans } = require('./Plans');
//your plans
addPlan("fit a coke can in your mouth"); 
addPlan("water some electronics");
addPlan("go planking in a cementry"); 
//looking at my plans
viewPlans(); 
//choosing which plan to delete
removePlans(0); 
removePlans(1);
//updating my plans
console.log("updated Plans")
viewPlans(); 
