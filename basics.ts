let studname: string = "kk";
let age: number = 25;
let isLearning: boolean = true;
let randomValue: any = "Hello TypeScript";
let unknownValue: unknown = 100;

// Print all
console.log("Name:", studname);
console.log("Age:", age);
console.log("Learning:", isLearning);
console.log("Random (any):", randomValue);
console.log("Unknown:", unknownValue);

// Example usage
randomValue = { topic: "TypeScript", difficulty: "Easy" };
console.log("Random object:", randomValue);

if (typeof unknownValue === "number") {
  console.log("Double unknown value:", unknownValue * 2);
}

