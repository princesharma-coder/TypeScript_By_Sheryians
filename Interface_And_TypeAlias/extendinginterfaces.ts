// In typescript, interfaces can be extended to create new interfaces that inherit properties from existing ones. This allows for more modular and reusable code.


interface User {
    name: string;
    age: number;
    email: string;
}

interface Admin extends User {
    role: string;
}

// now we have an Admin interface that extends the User interface