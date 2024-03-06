import MainHero from "@/components/MainHero";
import Slider from "@/components/Slider";
import TitleSubtitleCTA from "@/components/TitleSubtitleCTA";
import ImageInfoCollection from "@/components/ImageInfoCollection";

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
    titleSubtitleCTA: (props) => <TitleSubtitleCTA {...props.node} />,
    imageAndInfoCollection: (props) => <ImageInfoCollection {...props.node} />,
  },
};
export default serializers;
