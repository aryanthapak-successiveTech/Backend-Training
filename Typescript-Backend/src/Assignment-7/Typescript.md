# TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is developed and maintained by Microsoft and adds optional static typing, classes, and interfaces to JavaScript.

## Why Use TypeScript?

Static Typing: Helps catch errors during development instead of at runtime.

Improved IDE Support: Features like autocompletion, navigation, and refactoring are enhanced.

Maintainability: Code is easier to maintain, especially in large projects.

Compatibility: TypeScript is a superset of JavaScript, meaning any valid JavaScript is valid TypeScript.

## Basic Types

1.boolean
2.number
3.string
4.array
5.tuple
6.enum
7.any
8.void
9.null and undefined

## Variables

1.let
2.var
3.const

## Conclusion

TypeScript enhances JavaScript by providing a type system and powerful tools. Understanding the basic types and how to declare variables is essential for writing robust and maintainable TypeScript code.

## Interfaces

Interfaces define the structure of an object, describing the shape it should have.

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user: User = {
  id: 1,
  name: "Alice",
  isAdmin: true,
};
```

Interfaces improve code readability, type safety, and are ideal for defining API contracts or reusable data models.

## Classes

Classes provide a structured way to create objects and manage related behavior through encapsulation.

```ts
class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
```

Use classes when encapsulating data and logic is important—such as managing services, utilities, or API layers.
