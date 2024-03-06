import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";

const ImageInfoCollection = ({ collection }) => {
  const { title, subtitle, image, logo } = collection;
  console.log(collection);
  return (
    <div>
      {collection.map((section, index) => {
        return (
          <div key={index}>
            <BlockContent blocks={section.title} />
            <BlockContent blocks={section.subtitle} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageInfoCollection;
