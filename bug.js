```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: adding 1 to the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```