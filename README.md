# react-day-view-progress
A today view progress component.
Example https://codesandbox.io/s/moqk0mqj1x .

npm install 

```
 npm install react-day-view-progress
```

or yarn 

```
 yarn add react-day-view-progress
```

Inside your app :

```JavaScript
  import React from "react";
  import ReactDOM from "react-dom";
  import DayViewProgress from "react-day-view-progress";
  import "./styles.css";

  function App() {
    return (
      <div
        className="App"
        style={{
          height: "50px",
          width: "calc(100vw - 20px)",
          margin: "10px"
        }}
      >
        <DayViewProgress />
        <br />

        <DayViewProgress>
          <div
            style={{
              width: "100%",
              backgroundColor: "#eee"
            }}
          >
            Today progress view with custom children. <br />
            😛😋🤗🤑
          </div>
        </DayViewProgress>
      </div>
    );
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

  
```
Here's an interactive sandbox :

[![Edit moqk0mqj1x](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/moqk0mqj1x)


