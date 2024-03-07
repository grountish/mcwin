import MainHero from "@/components/MainHero";
import Slider from "@/components/Slider";
import ImageInfoCollection from "@/components/ImageInfoCollection";
import ImageInfoCTACollection from "@/components/ImageInfoCTACollection";
const serializers = {
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target='_blank' rel='noopener noreferer'>
        {children}
      </a>
    ),
  },
  types: {
    mainHero: (props) => <MainHero {...props.node} />,
    slider: (props) => <Slider {...props.node} />,
    imageAndInfoCollection: (props) => <ImageInfoCollection {...props.node} />,
    imageInfoCTACollection: (props) => (
      <ImageInfoCTACollection {...props.node} />
    ),
  },
};
export default serializers;
