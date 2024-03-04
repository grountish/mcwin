import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";

const serializers = {
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target="_blank" rel="noopener noreferer">
        {children}
      </a>
    ),
  },
  types: {
    mainHero: (props) => <SectionOne {...props.node} />,
    bestMoments: (props) => <SectionTwo {...props.node} />,
    location: (props) => <SectionThree {...props.node} />,
    partners: (props) => <SectionFour {...props.node} />,
    faqs: (props) => <SectionFive {...props.node} />,
  },
};
export default serializers;
