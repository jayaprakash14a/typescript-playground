interface User{
    id: number,
    name : string,
    age : number,
    email : string,
    createdAt : Date
};

// function sumOfAges(user1: User, user2: User){  
//     return user1.age + user2.age;
// }

// console.log(sumOfAges({name: "jaya", age:25}, {name: "prakash", age: 26}));


//typescript APIs
//All the APIs mentioned would throw compile time errors which limits developer from type errors

///pick - as name suggests it pickups mentioned attributes
type updateProp = Pick<User, 'name' | 'age' | 'email'>

function displayProfile(user: updateProp){
    console.log(`Name: ${user.name}, email: ${user.email}`);
}

///Partial

type updatePropPartial = Partial<updateProp>;

function updateUser(updatedProps :updatePropPartial){
    ///will be able to see change in all properties to optional.
}

//ReadOnly

interface Config{
    readonly endpoint :string,
    readonly apikey : string
}

const config : Readonly<Config>={
    endpoint: 'https://api.endpoint.com',
    apikey : 'adsdsf',
}

//config.endpoint = 'https://api.example.com' Error: Cannot assign to 'endpoint' because it is a read-only property

//Record
interface user{
    id:number,
    name:string
}


type Users = {[key:string]: user};

const users: Users = {
    'abc123': { id: 1, name: 'John Doe' },
    'xyz789': { id: 2, name: 'Jane Doe' },
};

type recordUsers = Record<string, user> ;

const recordusers: recordUsers = {
    'abc123': { id: 1, name: 'John Doe' },
    'xyz789': { id: 2, name: 'Jane Doe' },
}


///map - which is a cleaner way to use key-object pair

const userMap = new Map<string, user>();

userMap.set("abc123",{ id: 1, name: 'John Doe' });

console.log(userMap.get("abc123"));


///exclude - as name says, it excludes specific types 

type event = "click" | "scroll" | "mousehouse";
type ExcludeEvent = Exclude<event, 'scroll'>;

const handleClick= (evnt: ExcludeEvent)=>{
    console.log(evnt);
}

handleClick("click");
//handleClick("scroll");   Error - Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'. 

