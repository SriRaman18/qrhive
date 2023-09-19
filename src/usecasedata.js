import {
  ForShoppingUc,
  WarantyRegistrationUc,
  TravelTourismUc,
  SupplyChainUc,
  RestarentMenuUc,
  OnlineSeminarsUc,
  LogistricIndustryUc,
  HealthcareUc,
  FmcgIndustryUc,
  DigitalBrandingUc,
  CustomerReviewsUc,
  CorporateEventsUc,
} from "./assets";

const Usecasedata = [
  {
    id: 1,
    title: "For Shopping",
    content:
      "QR codes have the ability to lead customers directly to product pages or the checkout, providing an intuitive and smooth shopping journey.",
    image: <ForShoppingUc />,
    text: "Scan & Pay",
    path: "shopping",
    backgroundColor: "#ffebe5",
    color: "#d4917e",
    position: "left",
  },
  {
    id: 2,
    title: "Restaurants Menus",
    content:
      "QR menus provide an engaging dining encounter, enabling customers to explore comprehensive menu items, images, and even make orders using their smartphones.",
    image: <RestarentMenuUc />,

    text: "Scan & Order",
    path: "restaurants-menu",
    backgroundColor: "#e2fff6",
    color: "#63b392",
    position: "right",
  },
  {
    id: 3,

    title: "Corporate Events",
    content:
      "Add QR codes to runway designs or event displays for a special interactive experience. QR codes give quick access to event info and schedules, making attendees experience better.",
    image: <CorporateEventsUc />,

    text: "Scan & Join",
    path: "corporate-events",
    backgroundColor: "#ffd4cc",
    color: "#ff8979",
    position: "left",
  },
  {
    id: 4,
    title: "Customer Review",
    content:
      "Build trust with positive reviews. QR codes make them easy to access, boosting credibility. Simplify the review process, encouraging more feedback.",
    image: <CustomerReviewsUc />,

    text: "Scan & Review",
    path: "customer-review",
    backgroundColor: "#dcf1ff",
    color: "#356b8f",
    position: "left",
  },
  {
    id: 5,
    title: "Travel & Tourism",
    content:
      "Make interactive tours using QR codes. Visitors enjoy a dynamic and flexible experience. QR codes link to info about landmarks, culture, and nearby spots, making visits even better.",
    image: <TravelTourismUc />,

    text: "Scan & View",
    path: "travel-tourism",
    backgroundColor: "#60bec7",
    color: "#ebf2fe",
    position: "right",
  },

  {
    id: 6,

    title: "Online seminars & digital courses",
    content:
      "Utilize QR codes to expedite sign-ups for your seminars and digital courses. Enhance user experience by enabling easy registration through a quick scan",
    image: <OnlineSeminarsUc />,

    text: "Scan & Register",
    path: "online-seminars",
    backgroundColor: "#ffffff",
    color: "#fac91e",
    position: "left",
  },
  {
    id: 7,

    title: "Digital Branding campaigns",
    content:
      "QR codes for valuable insights into user behavior and branding effectiveness. Employ data-driven findings to optimize your branding strategies",
    image: <DigitalBrandingUc />,

    text: "Scan & Register",
    path: "digital-branding",
    backgroundColor: "#ffffff",
    color: "#5fe2de",
    position: "left",
  },
  {
    id: 8,

    title: "Warranty Registration",
    content:
      "Say goodbye to paperwork and hello to efficiency: Use our QR code for instant warranty registration and enjoy peace of mind.",
    image: <WarantyRegistrationUc />,

    text: "Warranty Registration",
    path: "warranty-registration",
    backgroundColor: "#ffffff",
    color: "#4fc978",
    position: "left",
  },
  {
    id: 9,

    title: "Logistics Industry",
    content:
      "QR codes streamline package tracking and management throughout the logistics process, from shipment to final delivery.",
    image: <LogistricIndustryUc />,
    text: "Scan & Track",
    path: "logistics-industry",
    backgroundColor: "#ffffff",
    color: "#2e7bb3",
    position: "left",
  },
  {
    id: 10,

    title: "FMCG Industry",
    content:
      "FMCG companies aim to engage consumers and foster loyalty. QR codes provide a versatile tool for interactive marketing campaigns, enhancing consumer experiences in the industry.",
    image: <FmcgIndustryUc />,

    text: "Scan & Engage",
    path: "fmcg-industry",
    backgroundColor: "#ffffff",
    color: "#89b5d4",
    position: "left",
  },
  {
    id: 11,

    title: "Supply Chain",
    content:
      "In the supply chain industry, QR codes can play a pivotal role in efficient inventory tracking and ensuring the authenticity of products as they move through various stages of the supply chain.",
    image: <SupplyChainUc />,

    text: "Scan & Tracking",
    path: "supply-chain",
    backgroundColor: "#ffffff",
    color: "#e49f8a",
    position: "left",
  },
  {
    id: 12,

    title: "Healthcare",
    content:
      "QR codes revolutionize healthcare: breaking data silos, simplifying access, minimizing errors. They optimize asset tracking, enhance equipment, combat counterfeit drugs.",
    image: <HealthcareUc />,

    text: "Scan & Tracking",
    path: "healthcare",
    backgroundColor: "#ffffff",
    color: "#ffdba1",
    position: "left",
  },
];
export default Usecasedata;
