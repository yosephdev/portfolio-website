---
title: "10 TypeScript Tips for Better Code"
date: "2023-04-23"
readingTime: "6 min read"
author: "Yoseph Berhane"
tags: ["TypeScript", "Best Practices"]
excerpt: "Practical TypeScript tips that will help you write more maintainable code."
relatedPosts: ["modern-react-hooks", "react-performance-optimization"]
---

TypeScript continues to grow in popularity, and for good reason. Here are some tips to help you write better TypeScript code.



## 1. Use Type Inference Where Possible

TypeScript's type inference is powerful. Don't add type annotations when they're unnecessary.



```typescript
// Unnecessarily verbose
const name: string = "TypeScript";

// Let TypeScript infer the type
const name = "TypeScript";
```



## 2. Understand the 'any' Type

The `any` type effectively opts out of type checking. Use it sparingly and consider `unknown` as a safer alternative.



## 3. Leverage Union Types

Union types are powerful for representing values that could be one of several types.



```typescript
type StringOrNumber = string | number;

function process(input: StringOrNumber) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}
```



## 4. Use Intersection Types for Object Combinations

Intersection types combine multiple types into one.



```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeRecord = Person & Employee;
```



## 5. Implement Discriminated Unions

These are useful for modeling state transitions or API responses.



```typescript
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: any;
};

type ErrorState = {
  status: "error";
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;
```



## 6. Make Good Use of 'readonly'

The `readonly` modifier prevents properties from being changed after initialization.



```typescript
interface Config {
  readonly apiUrl: string;
}
```



## 7. Use Type Guards

Type guards help narrow down the type of a value.



```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```



## 8. Leverage Generics for Reusable Code

Generics allow you to create reusable components.



```typescript
function identity<T>(arg: T): T {
  return arg;
}
```



## 9. Use Mapped Types for Transformations

Mapped types allow you to create new types from existing ones.



```typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```



## 10. Optimize for Strictness

Enable strict mode in your tsconfig.json to catch more errors.



```json
{
  "compilerOptions": {
    "strict": true
  }
}
```