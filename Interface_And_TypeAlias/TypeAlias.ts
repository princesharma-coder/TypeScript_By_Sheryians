// in typescript , a type alias is a way to create a new name for an existing type. This can be useful for creating more readable code or for creating complex types that are easier to work with.

// Type aliases can be used for primitive types, union types, intersection types, and more. They are defined using the `type` keyword followed by the alias name and the type definition.

// we can create type aliases like this:

    type Xyz = string | number; // this is a union type alias that can be either a string or a number

    let value: Xyz;
    // now it's more readable and we can use `Xyz` instead of `string | number` throughout our code
    value = "Hello"; // valid
    value = 42; // also valid
    // value = true; // this would give an error because `true` is not a valid type for `Xyz`