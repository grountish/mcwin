import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import serializers from "../utils/serializers";
import BlockContent from "@sanity/block-content-to-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewPage = ({ page, layoutData }) => {

  if (!page) {
    return <div>Page not found</div>;
  }
  return (
    <div className="w-screen bg-white">
      <Header layout={layoutData} />
        <BlockContent blocks={page.Blocks} serializers={serializers} />
      <Footer layout={layoutData} />
    </div>
  );
};

export const getStaticProps = async ({ params, preview }) => {
  const data = await getClient(preview).fetch(
    groq`{"page":*[slug.current==$slug],
    "layoutData":*[_type == 'layout']}`,
    {
      slug: params?.slug,
    }
  );

  const { page, layoutData } = data;

  if (!page.length) {
    return { notFound: true };
  }

  return {
    props: {
      page: page[0],
      layoutData: layoutData[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "pageSchema" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default NewPage;
