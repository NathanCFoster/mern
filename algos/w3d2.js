// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

function findByIdAndUpdate(id, updatedVals, collection) {
    //iterates through the entire collection and finds the first iteration where
    //id == the provieded param id
    const obj = collection.find(e => e.id == id);   
    //converts the updated vals object into an array so that we can iterate through it easier
    const entries = Object.entries(updatedVals);
    //updates the object inside the collection
    obj[entries[0][0]] = entries[0][1];
    //returns the object
    return obj;
}


console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students))

// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null