import React from "react";
import { Helmet } from "react-helmet";
const PageHead = (props) => {
  const { title, children } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{children}</div>
    </>
  );
};

export default PageHead;
