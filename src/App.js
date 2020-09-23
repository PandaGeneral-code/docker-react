import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Root } from "./components/Root/Root";

export const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Router>
        <div>
          <h1>This is my table</h1>
          <div>Now I don't like.</div>
          <div>Maybe now?</div>
        </div>
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route exact path="/fuck">
            <div>
              <div>Off</div>
              <button onClick={() => setVisible((visible) => !visible)}>
                Take me back
              </button>
              {visible && <div>There is no going back</div>}
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
