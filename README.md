# @codeproductive/styled-buttons

# Styled Button Component for React

A customizable button component for React that supports different styles and types.
![image](https://github.com/codeproductive/styled-buttons/styled-buttons.png)

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

- primary (boolean): Renders the button with a primary style.
- secondary (boolean): Renders the button with a secondary style.
- success (boolean): Renders the button with a success style.
- warning (boolean): Renders the button with a warning style.
- danger (boolean): Renders the button with a danger style.
- rounded (boolean): Makes the button corners rounded.
- outline (boolean): Renders the button with an outline style.
- style (React.CSSProperties): Additional inline styles to apply to the button.
- className (string): Additional class name(s) to apply to the button.

## Notes

Only one type flag (primary, secondary, success, warning, danger) can be specified at a time.
