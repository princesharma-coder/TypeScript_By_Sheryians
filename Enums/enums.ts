

// in typescript if we want to create some obj like structure with fixed values we can use enums

// in typescript if we want to make an enum we can use the following syntax

enum StatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500,
}

// now if i need to use the enum i can use it like this
console.log(StatusCode.NotFound); // 404    

