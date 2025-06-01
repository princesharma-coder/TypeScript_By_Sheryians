// in typescript we can use interface to create a structure for an object.
// this is useful when we want to create an object with specific properties and types.
// in typescript if we want to make an interface we can use the following syntax

interface user{
    name: string;
    age: number;
    email: string;
}


function createUser(user: user): void {
    return console.log(`User created: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
}
createUser({
    name: "Abc",
    age: 20,
    email: "abc@example.com"
})