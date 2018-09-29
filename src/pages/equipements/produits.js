import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import ProductCardImgLeft from "../../components/equipements/product-card-img-left";

const Category = ({ data }) => {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="flex flex-col mx-4 md:mx-16 mt-8 justify-center">
        {products.map(({ node: product }) => {
          const { frontmatter } = product;
          return (
            <ProductCardImgLeft
                link={frontmatter.path}
                img={frontmatter.image.childImageSharp.fluid.src}
                altImg={frontmatter.title}
                title={frontmatter.title}
                body={frontmatter.excerpt}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            client
            excerpt
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
