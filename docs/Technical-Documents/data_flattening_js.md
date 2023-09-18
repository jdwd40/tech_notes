### What is Data Flattening?

Data flattening is the process of converting nested or hierarchical data structures into a flat, one-dimensional array or object. Essentially, you're simplifying the data by removing levels of complexity. In doing so, you're making it easier to manipulate, traverse, and analyze the data. 

In JavaScript, this is commonly done for nested arrays or objects. You might have an array of arrays, or an object containing arrays, or even more complex, multi-level structures. Flattening simplifies these structures into something that is easier to work with, usually a single-level array or object.

### Why Did We Flatten the Data?

1. **Compatibility with `.map()`:** The `.map()` function expects an array. The data structure you initially had was not an array in the format `.map()` could understand, but a complex, nested object inside an array. 

2. **Ease of Rendering:** Complex, nested structures are harder to render in components. React prefers a flatter, more straightforward data structure that can easily be looped through for rendering purposes.

3. **Readability:** A flat data structure is easier to read, both for you and for anyone else who might work on this code later. It’s immediately clear what each piece of data represents.

4. **Performance:** Nested loops and recursive functions for deeply nested structures could be performance bottlenecks. Flattening the data often results in performance gains, as you can manage it in a single loop.

5. **Flexibility:** Once you have a flat data structure, it's much easier to sort, filter, or manipulate the data in other ways.

6. **Debugging:** Errors are easier to trace and resolve in a flat structure.

Flattening the data provided a straightforward path to resolving your issue, making it easier to map your data to your React component.