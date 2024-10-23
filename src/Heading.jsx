// JavaScript Ternary Operator in JSX:

// JSX allows you to write JavaScript expressions directly within it. You are using the ternary operator (locked ? ... : ...), which is a valid JavaScript expression.
// The ternary operator returns one of two JSX elements based on the value of the locked prop:
// If locked is true, the first <h1> tag is rendered.
// If locked is false, the second <h1> tag is rendered.
// Since this is an expression, no curly braces {} are required.

// When Curly Braces {} Are Needed:

// You need curly braces {} in JSX when you're embedding a JavaScript expression like a variable, function call, or inline calculation.

export default function Heading({locked}) {
  return (
    locked ? <h1 className="title">Limit!Buy <b>Pro</b> for &gt;5</h1> : <h1 className="title">Fancy Counter</h1> 
    
  );
}
