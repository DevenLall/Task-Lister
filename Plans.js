// my plan array
const Plans = [];

// adding plans
function addPlan(plan) {
    Plans.push(plan); 
    console.log(`${plan} is added to the Plans.`);
}

function viewPlans() {
    if (Plans.length === 0) { // checking if there are no plans
        console.log("No Plans.");
    } else {
        console.log("today's Plans:");
        for (let i = 0; i < Plans.length; i++) { // listing my plans
            console.log(`${i + 1}: ${Plans[i]}`);
        }
    }
}

function removePlans(index) {
    if (index >= 0 && index < Plans.length) { // checking if plan exists
        console.log(`${Plans[index]} is removed from your plans.`);
        Plans.splice(index, 1); // removing plan at given index
    } else {
        console.log("plan not found."); // showing error if plan is not found
    }
}

module.exports = { addPlan, viewPlans, removePlans, Plans }; // exporting functions and plan array
