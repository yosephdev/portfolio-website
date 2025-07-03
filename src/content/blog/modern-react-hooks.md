---
title: "Understanding Modern React Hooks"
date: "2023-05-12"
readingTime: "8 min read"
author: "Yoseph Berhane"
tags: ["React", "JavaScript", "Hooks"]
excerpt: "A deep dive into React's latest hooks and how they can improve your components."
relatedPosts: ["typescript-tips", "react-performance-optimization"]
---

React Hooks have revolutionized how we write React components, moving away from class components and toward a more functional approach. In this article, we'll explore some of the more advanced hooks and patterns.



## useState vs useReducer

While **useState** is perfect for simple state values, **useReducer** shines when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.



```jsx
// Using useState
const [count, setCount] = useState(0);

// Equivalent using useReducer
const [count, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}, 0);
```



## useCallback for Performance

The **useCallback** hook returns a memoized version of the callback that only changes if one of the dependencies has changed.



```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```



## useMemo for Expensive Calculations

**useMemo** is similar to useCallback but is designed to memoize computed values rather than functions.



```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```



## Custom Hooks for Reusability

One of the most powerful features of hooks is the ability to create your own for reusable logic.



```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Usage
function MyComponent() {
  const size = useWindowSize();
  return (
    <div>
      Width: {size.width}, Height: {size.height}
    </div>
  );
}
```



## Conclusion

Hooks provide a more direct API to React concepts you were already familiar with: props, state, context, refs, and lifecycle. They also offer a powerful new way to combine them.