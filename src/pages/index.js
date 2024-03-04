import Header from "@/components/Header";
import { getClient } from "@/lib/sanity.server";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "@/utils/serializers";
import Footer from "@/components/Footer";
import { animationLib } from "../utils/animationLib";
import { useEffect } from "react";

export const metadata = {
  title: "...",
  description: "...",
};

export default function Home({ page, layout }) {
  useEffect(() => {
    animationLib();
  }, []);

  return (
    <div className="w-screen">
      <Header layout={layout} />
      <BlockContent blocks={page.Blocks} serializers={serializers} />
      {/* <Footer layout={layout} /> */}
    </div>
  );
}
export async function getStaticProps() {
  const page = await getClient().fetch('*[_type == "home"]');
  const layout = await getClient().fetch('*[_type == "layout"]');

  return {
    props: {
      page: page[0],
      layout: layout[0],
    },
  };
}
