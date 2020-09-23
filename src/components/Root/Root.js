import { Table } from "antd";
import React from "react";

import { Wrapper } from "./styled";

export const Root = () => {
  return (
    <Wrapper>
      <Table
        columns={[
          { key: 1, title: "Column 1" },
          { key: 2, title: "And this is column 2" },
        ]}
      />
    </Wrapper>
  );
};
