# @codeproductive/styled-buttons

[![npm version](https://badge.fury.io/js/%40codeproductive%2Fstyled-buttons.svg)](https://badge.fury.io/js/%40codeproductive%2Fstyled-buttons)

# Styled Button Component for React

A customizable button component for React that supports different styles and types.

# Example

![image](https://github.com/codeproductive/styled-buttons/assets/23722890/08b29a86-7caf-42d0-bbc3-47c7b63251aa)

## Installation

```bash
npm install @codeproductive/styled-buttons
yarn add @codeproductive/styled-buttons
```

## Usage

```javascript
import { Button } from "@codeproductive/styled-buttons";

function App() {
  return (
    <div>
      <Button primary onClick={() => console.log("hi")}>
        Log
      </Button>
      <Button danger outline rounded>
        Delete
      </Button>
    </div>
  );
}

export default App;
```

## API

Props

The component accepts the following props:

- rounded (boolean): Makes the button corners rounded.
- outline (boolean): Renders the button with an outline style.

One of the following for color:

- primary (boolean): Sets the color to <span style="border:1px solid rgb(59 130 246); color:rgb(59 130 246)">blue</span>
  <span style="background-color:rgb(59 130 246)">blue</span> (rgb(59 130 246), #3B82F6)
- secondary (boolean): Sets the color to <span style="background-color:rgb(255 255 255); color:rgb(17 24 39)">black</span>
  <span style="border:1px solid rgb(255 255 255); background-color:rgb(17 24 39)">black</span> (rgb(17 24 39), #111827)
- success (boolean): Sets the color to <span style="border:1px solid rgb(34 197 94); color:rgb(34 197 94)">green</span>
  <span style="background-color:rgb(34 197 94)">green</span> (rgb(34 197 94), #22C55E)
- warning (boolean): Sets the color to <span style="border:1px solid rgb(250 204 21); color:rgb(250 204 21)">yellow</span>
  <span style="background-color:rgb(250 204 21)">yellow</span> (rgb(250 204 21), #FACC15)
- danger (boolean): Sets the color to <span style="border:1px solid rgb(239 68 68); color:rgb(239 68 68)">red</span>
  <span style="background-color:rgb(239 68 68)">red</span> (rgb(239 68 68), #EF4444)

All standard element and button elements such as className, style and on onClick etc.

## Notes

Only one type flag (primary, secondary, success, warning, danger) can be specified at a time.
