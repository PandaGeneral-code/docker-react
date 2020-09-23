import { Table } from "antd";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { Wrapper } from "./styled";

export const Root = () => {
  const history = useHistory();
  const [title, setTitle] = useState("Hello");

  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <button onClick={() => setTitle("Fuck the police!")}>Test me</button>
      <button onClick={() => setTitle("Fuck the police! But gently")}>
        Test me again
      </button>
      <button onClick={() => history.push("/fuck")}>
        Take me away from here
      </button>
      <Table
        columns={[
          { key: 1, title: "Column 1" },
          { key: 2, title: "And this is column 2" },
        ]}
      />
    </Wrapper>
  );
};
