import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// markup
const IndexPage = () => {
  const dataTest = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          title
        }
      }
    }
  `);
  return (
    <div>
      <h2 style={{ color: "magenta" }}> {"from gatsby"}</h2>
      {dataTest.allWpPost.nodes.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
};

export default IndexPage;
