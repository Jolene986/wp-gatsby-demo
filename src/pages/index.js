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
      {dataTest.allWpPost.nodes.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
};

export default IndexPage;
