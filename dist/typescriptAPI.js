"use strict";
;
function displayProfile(user) {
    console.log(`Name: ${user.name}, email: ${user.email}`);
}
function updateUser(updatedProps) {
    ///will be able to see change in all properties to optional.
}
const config = {
    endpoint: 'https://api.endpoint.com',
    apikey: 'adsdsf',
};
const users = {
    'abc123': { id: 1, name: 'John Doe' },
    'xyz789': { id: 2, name: 'Jane Doe' },
};
const recordusers = {
    'abc123': { id: 1, name: 'John Doe' },
    'xyz789': { id: 2, name: 'Jane Doe' },
};
///map - which is a cleaner way to use key-object pair
const userMap = new Map();
userMap.set("abc123", { id: 1, name: 'John Doe' });
console.log(userMap.get("abc123"));
const handleClick = (evnt) => {
    console.log(evnt);
};
handleClick("click");
//handleClick("scroll");   Error - Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'. 
