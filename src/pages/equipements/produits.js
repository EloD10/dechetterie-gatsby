import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
// import NavClientsType from "../../components/equipements/nav-clients-type";
import ProductCardImgLeft from "../../components/equipements/product-card-img-left";
// import NavProductsType from "../../components/equipements/navProductType/nav-products-type";

const Category = ({ data }) => {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <Layout>
      {/* <NavClientsType /> */}
      {/* <NavProductsType /> */}
      <div className="flex flex-col mx-4 md:mx-16 mt-8 justify-center">
        {products.map(({ node: product }) => {
          const { frontmatter } = product;
          return (
            <ProductCardImgLeft
                link={frontmatter.path}
                img={frontmatter.image.childImageSharp.fluid.src}
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
                fluid {
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
