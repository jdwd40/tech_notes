### Spread Operator (`...`)

The spread operator (`...`) is used to spread the elements of an iterable (like an array or string) into individual elements. It's commonly used in array and object literals, as well as in function calls.

#### Syntax:
```javascript
const newArray = [...iterable];
```

#### Example:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
```

#### Use Case: Finding Min/Max in Array
In the problem you had for finding the minimum and maximum numbers, the spread operator can be used with `Math.min()` and `Math.max()` to find the smallest and largest numbers in an array.
```javascript
const arr = [1, 2, 3, 4, 5];
const minVal = Math.min(...arr);
const maxVal = Math.max(...arr);
```

---

### Reversing a String

Strings are immutable in JavaScript, so the `reverse()` method that works on arrays cannot be directly applied to strings.

#### Example:
```javascript
// Incorrect: const reversedStr = str.reverse(); // Throws a TypeError
```

#### Solution:
To reverse a string, you can convert it into an array of characters, reverse that array, and then join it back to form a string.
```javascript
const originalString = "hello";
const reversedString = originalString.split("").reverse().join("");
```

---

### Checking for Null and Undefined

In JavaScript, `null` and `undefined` are two distinct types that indicate a lack of value or a missing object.

#### Use Case: Checking Array for Null or Undefined
In your function for finding even-length strings, you had to check if the array was null or undefined before proceeding.
```javascript
// Your incorrect code
// if (typeof items === 'undefined' || typeof items === null) {
  
// Corrected code
if (typeof items === 'undefined' || items === null) {
  return [];
}
```

#### Explanation:
- `typeof items === 'undefined'`: Checks if the array is undefined.
- `items === null`: Checks if the array is null. Note that `typeof null` returns `'object'`, so a direct comparison with `null` is necessary.

---

###  Capitalizing a String in JavaScript

To capitalize the first letter of a string in JavaScript, you can use various string methods like `charAt()`, `toUpperCase()`, and `slice()`. Below are some common techniques:

---

#### Method 1: Using `charAt()` and `slice()`

In this method, you can get the first character using `charAt(0)` and then convert it to uppercase using `toUpperCase()`. You can obtain the rest of the string using `slice(1)` and then concatenate both parts.

**Syntax:**
```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

---

#### Method 2: Using ES6 Template Literals

For a more modern and concise approach, you can use ES6 template literals to combine the capitalized first character and the rest of the string.

**Syntax:**
```javascript
function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
```

---

#### Usage Examples:

For both methods, you can use them like this:

```javascript
console.log(capitalize('hello'));  // Output: "Hello"
console.log(capitalize('world'));  // Output: "World"
```

---

## Check if a number is in a string

To check if there is a number in a string of text in JavaScript, you can use regular expressions with the `test()` method. The regular expression `/[0-9]/` will match any digit from 0 to 9.

### Using Regular Expression's `test()` Method

Here's how you can implement this:

```javascript
function containsNumber(str) {
  const regex = /[0-9]/;
  return regex.test(str);
}
```

#### Usage:

```javascript
console.log(containsNumber("hello"));  // Output: false
console.log(containsNumber("hello1")); // Output: true
console.log(containsNumber("123"));    // Output: true
```

### Explanation:

1. The `/[0-9]/` regular expression will match any single digit between 0 and 9.
2. The `test()` method returns a boolean value indicating whether or not the pattern exists in the given string.

This function will return `true` if the string contains at least one number and `false` otherwise.

Feel free to use this function to check for the presence of numbers in various strings.