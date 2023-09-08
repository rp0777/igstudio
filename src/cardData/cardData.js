import giftImg from "../assets/gift.png";

// Area of Practices images
import businessLawOne from "../assets/practices/businessLawOne.png";
import partnershipLaw from "../assets/practices/partnershipLaw.png";
import realEstateLaw from "../assets/practices/realEstateLaw.png";
import businessLawTwo from "../assets/practices/businessLawTwo.png";
import landlordDisputes from "../assets/practices/landloardDisputes.png";
import elderAbuse from "../assets/practices/elderAbuse.png";

// Testimonials images
import janeCooper from "../assets/testimonials/janeCooper.png";
import devonLane from "../assets/testimonials/devonLane.png";
import robertFox from "../assets/testimonials/robertFox.png";

const reasons = [
  {
    id: "0",
    img: giftImg,
    successRate: "98% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonLabel: "Read More",
  },
  {
    id: "1",
    img: giftImg,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonLabel: "Read More",
  },
  {
    id: "2",
    img: giftImg,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonLabel: "Read More",
  },
];

const practices = [
  {
    id: "0",
    title: "BUSINESS LAW",
    img: businessLawOne,
  },
  {
    id: "1",
    title: "PARTNERSHIP LAW",
    img: partnershipLaw,
  },
  {
    id: "2",
    title: "REAL ESTATE LAW",
    img: realEstateLaw,
  },
  {
    id: "3",
    title: "BUSINESS LAW",
    img: businessLawTwo,
  },
  {
    id: "4",
    title: "LANDLORD DISPUTES",
    img: landlordDisputes,
  },
  {
    id: "5",
    title: "ELDER ABUSE",
    img: elderAbuse,
  },
];

const testimonialsData = [
  {
    id: "0",
    img: janeCooper,
    name: "Jane Cooper",
    role: "Ceo of Hunt",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "1",
    img: devonLane,
    name: "Devon Lane",
    role: "Ceo of Hunt",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "2",
    img: robertFox,
    name: "Robert Fox",
    role: "Ceo of Hunt",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
];

export { reasons, practices, testimonialsData };
