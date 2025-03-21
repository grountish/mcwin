import MainHero from "@/components/MainHero";
import Slider from "@/components/Slider";
import ImageInfoCollection from "@/components/ImageInfoCollection";
import Agenda from "@/components/Agenda";
import ImageInfoCTACollection from "@/components/ImageInfoCTACollection";
import TitleSubtitleCTA from "@/components/titleSubtitleCta";
import TitleDataMapCTA from "@/components/titleDataMapCTA";
import Streaming from "@/components/Streaming";

const serializers = {
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target="_blank" rel="noopener noreferer">
        {children}
      </a>
    ),
  },
  types: {
    mainHero: (props) => <MainHero {...props.node} />,
    slider: (props) => <Slider {...props.node} />,
    imageAndInfoCollection: (props) => <ImageInfoCollection {...props.node} />,
    agenda: (props) => <Agenda {...props.node} />,
    imageInfoCTACollection: (props) => (
      <ImageInfoCTACollection {...props.node} />
    ),
    titleSubtitleCTA: (props) => <TitleSubtitleCTA {...props.node} />,
    titleDataMapCTA: (props) => <TitleDataMapCTA {...props.node} />,
    streamSchedule: (props) => <Streaming {...props.node} />,
  },
};
export default serializers;
