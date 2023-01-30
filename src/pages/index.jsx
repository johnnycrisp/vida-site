import React from "react";
import Layout from "../components/Layout";
import ComponentSelector from "../components/ComponentSelector";
import { graphql } from "gatsby";
import Header from "../components/Header";

const IndexPage = ({ data }) => {
  const blocks = data.homepage.blocks;

  console.log("data", blocks);

  return (
    <Layout>
      <div className="wrapper">
        <Header />
        <ComponentSelector components={blocks} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Vida Carmel | Home</title>;

export const query = graphql`
  query MyQuery {
    homepage: datoCmsPage(title: { eq: "Homepage" }) {
      title
      blocks {
        ... on DatoCmsTextSection {
          id
          title
          text
          internal {
            type
          }
        }
        ... on DatoCmsSingleImage {
          id
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
          internal {
            type
          }
        }
      }
    }
  }
`;
