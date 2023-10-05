### Notes on `function(v){ return v=='flick' ? this.status=!this.status : this.status }`

This function takes a single argument `v`, which will be each item in the array one by one as the function goes through the whole list. The function's job is to check if `v` is the word "flick" and, based on that, decide what to return. 

Let's break it down:

#### The `v=='flick'` Part

The function first checks if the current item (`v`) is the word "flick". It does this using the `==` equality operator.

#### The Ternary Operator `? :`

This is a shorthand way of writing an `if-else` statement. It's like asking a question: 
- "Is `v` equal to 'flick'?" 
  - If yes, do `this.status = !this.status`.
  - If no, do nothing and just use `this.status` as it is.

#### The `this.status = !this.status` Part

If the current item is "flick", the function flips the value of `this.status`:
- If `this.status` was `true`, it becomes `false`.
- If it was `false`, it becomes `true`.

This flipping is done using the `!` operator, which reverses a boolean value.

#### The `this.status` Part

Finally, the function returns the current value of `this.status`, whether it was flipped or not.

### How Does `this` Work Here?

The `this` keyword is like a shared notebook that all function calls can read and write in. So when one function call writes `false` in `this.status`, the next function call can read that `false` and know that it needs to flip it back to `true`, or vice versa.

This shared notebook (`this`) is given to the function by the `map()` method, which passes it as the second argument.

In plain terms, `this.status` keeps track of whether we've seen the word "flick" and what to do next time we see it. Each time the function runs for a new item in the array, it checks this shared notebook to know what to do.