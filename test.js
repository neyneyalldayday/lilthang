let recs = [
    {
        ID: 1,
        NAME: 'John',
        EMAIL: 'john@example.com',
        SSN: '123'
    }, {
        ID: 2,
        NAME: 'Sally',
        EMAIL: 'sally@example.com',
        SSN: '456'
    }, {
        ID: 3,
        NAME: 'Angie',
        EMAIL: 'angie@example.com',
        SSN: '789'
    }
];

var object = [];

for (var i = 0; i < recs.length; i ++) {
    object.push(recs[i].ID);
    object.push(recs[i].NAME);
    object.push(recs[i].EMAIL);
    
}

console.log(object)
 


    