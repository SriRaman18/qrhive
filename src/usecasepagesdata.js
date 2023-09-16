import React from "react";
import {
  Check,
  CorporateEvents,
  WarrantyRegistration,
  CustomerReviews,
  DigitalBranding,
  FmcgIndustry,
  HealthCare,
  LogisticsIndustry,
  OnlineSeminars,
  RestaurantsMenus,
  ShoppingPage,
  SupplyChain,
  TravelTourism,
} from "./assets";
const usecasepagesdata = [
  {
    id: 1,
    headerTitle:
      "Streamline your shopping experience using QR code redirection.",
    headerText:
      "Discover the transformative potential of QR Hive for your e-commerce venture, enriching shopping, engaging clients, and increasing sales.",
    bodyTitleOne: "Streamlined Shopping",
    bodyTextOne:
      "QR codes have the ability to lead customers directly to product pages or the checkout, providing an effortless and simplified shopping journey",
    bodyTitleTwo: "Cutting-edge Analytics",
    bodyTextTwo:
      "Valuable customer behavior insights are derived from QR codes, aiding in the refinement of your e-commerce tactics for improved sales performance.",
    bodyTitleThree: "Enhanced Customer Interaction",

    bodyTextThree:
      "Elevating the shopping journey through QR codes heightens customer involvement and the probability of recurring transactions.",
    icon: Check,
    pic: <ShoppingPage />,
  },
  {
    id: 2,
    headerTitle: "Enhance the Dining Experience with Dynamic QR Menus.",
    headerText:
      "Explore QRhive's power in revolutionizing restaurant experiences through interactive, easily updatable menus for enhanced efficiency and customer satisfaction",
    bodyTitleOne: "Engaging Culinary Journey",
    bodyTextOne:
      "With QR menus, customers can engage in an interactive dining affair, accessing comprehensive menu details, images, and even placing orders via their smartphones.",
    bodyTitleTwo: "Enhanced Service Effectiveness",
    bodyTextTwo:
      "QR menus efficiently simplify the order process, elevate service effectiveness, and minimize order inaccuracies.",
    bodyTitleThree: "Streamlined Menu Refreshes",

    bodyTextThree:
      "Swift and simple QR menu updates obviate the requirement for expensive and environmentally wasteful paper menu printing.",
    icon: Check,
    pic: <RestaurantsMenus />,
  },
  {
    id: 3,
    headerTitle: "Incorporate QR Codes into Your Corporate Functions",
    headerText:
      "Uncover innovation in your corporate events using QRhive, seamlessly integrating QR codes into runways, promotions, and interactive experiences.",
    bodyTitleOne: "Distinctive Event Encounter",
    bodyTextOne:
      "Infusing QR codes into runway designs or event displays can craft an exceptional and interactive event journey.",
    bodyTitleTwo: "Effortless Sharing of Information",
    bodyTextTwo:
      "QR codes facilitate swift access to event specifics, schedules, and more, enhancing attendee satisfaction.",
    bodyTitleThree: "Valuable Data Gathering",

    bodyTextThree:
      "Monitor engagement and amass significant attendee insights using QR codes, aiding in refining forthcoming event planning and strategies.",
    icon: Check,
    pic: <CorporateEvents />,
  },
  {
    id: 4,
    headerTitle: "Enhance Trustworthiness through QR Code-Powered Reviews",
    headerText:
      "Discover how QRhive can strengthen your credibility by enabling effortless access to customer reviews via scannable QR codes",
    bodyTitleOne: "Elevated Trustworthiness",
    bodyTextOne:
      "The significance of customer reviews in establishing trust cannot be overstated. Boost your brand's credibility by ensuring these reviews are conveniently reachable via QR codes.",
    bodyTitleTwo: "Effortless Review Retrieval",
    bodyTextTwo:
      "By simply scanning a QR code, customers can readily access reviews, fostering a user-friendly environment that nurtures trust.",
    bodyTitleThree: "Foster Feedback",

    bodyTextThree:
      "Employ QR codes to simplify the review submission process, motivating a greater number of customers to contribute their invaluable feedback.",
    icon: Check,
    pic: <CustomerReviews />,
  },

  {
    id: 5,
    headerTitle: "Elevate Experiences through QR-Guided Tours",
    headerText:
      "Explore the transformative potential of QRhive in reshaping travel and tourism encounters, offering interactive, QR-guided tours that provide immersive content and elevate visitor engagement.",
    bodyTitleOne: "Engaging Guided Journeys",
    bodyTextOne:
      "Craft dynamic, self-directed tours using QR codes, providing visitors with an immersive, captivating, and adaptable exploration.",
    bodyTitleTwo: "Effortless Information Retrieval",
    bodyTextTwo:
      "QR codes can connect to in-depth details about landmarks, cultural insights, or nearby points of interest, enhancing the visitor journey.",
    bodyTitleThree: "Support for Multiple Languages",

    bodyTextThree:
      "Extend information in various languages via QR codes, catering to global travelers and promoting greater inclusiveness.",
    icon: Check,
    pic: <TravelTourism />,
  },
  {
    id: 6,
    headerTitle: "Simplify Registrations using QR Code Sign-Up",
    headerText:
      "Explore how QRhive streamlines the webinar and online course registration process, creating a user-friendly encounter and enhancing the rate of participation.",
    bodyTitleOne: "Simplified Enrollment",
    bodyTextOne:
      "QR codes expedite and simplify the registration procedure, enabling users to swiftly enroll in your webinar or online course through a swift scan, thereby enhancing user satisfaction.",
    bodyTitleTwo: "Enhanced Engagement",
    bodyTextTwo:
      "Through the streamlined registration process, you can motivate a larger audience to partake in your webinar or online course, resulting in higher participation rates.",
    bodyTitleThree: "Streamlined Distribution",

    bodyTextThree:
      "QR codes can be effortlessly disseminated across social media, emails, and promotional content, facilitating broader outreach to a diverse audience.",
    icon: Check,
    pic: <OnlineSeminars />,
  },
  {
    id: 7,
    headerTitle: "Enhance Ads with Captivating QR Codes",
    headerText:
      "Uncover the potential of QRhive to elevate your digital advertising efforts, presenting an interactive encounter to your audience and consequently enhancing ad engagement.",
    bodyTitleOne: "Elevated Interaction",
    bodyTextOne:
      "Compelling QR codes can entice users to engage with your ads, resulting in heightened interaction and an amplified potential for conversions.",
    bodyTitleTwo: "Informative Metrics",
    bodyTextTwo:
      "Utilize QR codes for insights into user actions and ad effectiveness. Apply these insights to inform decisions and enhance advertising strategies.",
    bodyTitleThree: "Improved User Journey",

    bodyTextThree:
      "QR codes can deliver a seamless user journey by instantly connecting to landing pages, exclusive offers, or supplementary product details.",
    icon: Check,
    pic: <DigitalBranding />,
  },
  {
    id: 8,
    headerTitle: "Streamlined Warranty Registration with QRhive",
    headerText:
      "Simplify warranty management with QR Code Manager. Efficient registration, easy claim tracking, and prompt customer support",
    bodyTitleOne: "Tailorable appearance",
    bodyTextOne:
      "Ditch ordinary black and white QR Codes. Embrace creativity with colour, logos, and images. Unlike barcodes, QR Codes offer vibrant customization options.",
    bodyTitleTwo: "Traceable material",
    bodyTextTwo:
      "Track your QR Code's performance using QRhive. Get insights like scan counts, locations, timing, and device details.",
    bodyTitleThree: "Diverse content categories",

    bodyTextThree:
      "Choose from diverse content options with QR Codes. For text, use Text QR Code; for web links, opt for Website URL QR Code; and for images, create an Image QR Code.",
    icon: Check,
    pic:  <WarrantyRegistration/>,
  },
  {
    id: 9,
    headerTitle: "QR codes streamline tracking and management process",
    headerText:
      "This use case encompasses the complete journey of a package, starting from its initial shipment to its final delivery.",
    bodyTitleOne: "Real-Time Tracking",
    bodyTextOne:
      "QR codes facilitate real-time tracking, allowing both logistics providers and customers to monitor the progress of shipments.",
    bodyTitleTwo: "Improved Customer Experience",
    bodyTextTwo:
      "Recipients can easily track their packages and have more control over delivery options, enhancing customer satisfaction.",
    bodyTitleThree: "Cost Savings",

    bodyTextThree:
      "By minimizing errors, optimizing routing, and reducing manual labor, QR codes can lead to cost savings for logistics companies.",
    icon: Check,
    pic: <LogisticsIndustry />,
  },
  {
    id: 10,
    headerTitle: "Engaging Consumers and Building Brand Loyalty in FMCG’s",
    headerText:
      "QRhive provide a versatile tool for crafting interactive marketing campaigns and enriching consumer experiences within the FMCG industry",
    bodyTitleOne: "Promotions and Offers",
    bodyTextOne:
      "The company launches a new line of nutritious snacks. They create QR code-enabled promotions, linking to digital coupons, discounts, or buy-one-get-one offers.",
    bodyTitleTwo: "Social Media Integration",
    bodyTextTwo:
      "QR codes lead consumers to the company's social media platforms, encouraging them to follow, share, and engage with the brand online.",
    bodyTitleThree: "Brand Loyalty",

    bodyTextThree:
      "By offering exclusive content and rewards, QR codes foster a sense of loyalty and community among consumers.",
    icon: Check,
    pic: <FmcgIndustry />,
  },
  {
    id: 11,
    headerTitle: "Global firm manages goods movement between suppliers",
    headerText:
      "QR codes are essential in the supply chain for efficient inventory tracking and product authentication across its stages.",
    bodyTitleOne: "Supplier Tracking",
    bodyTextOne:
      "Suppliers affix QR codes to raw materials or components they provide. These codes contain information about the origin, batch number and manufacturing date.",
    bodyTitleTwo: "Product Authentication",
    bodyTextTwo:
      "Consumers verify product authenticity by scanning QR codes with their smartphones. The code connects to a secure online database detailing the product's journey",
    bodyTitleThree: "Manufacturing and Assembly",

    bodyTextThree:
      "QR codes are placed on products during the manufacturing process. These codes include details about the assembly line, quality checks performed & production timestamps.",
    icon: Check,
    pic: <SupplyChain />,
  },
  {
    id: 12,
    headerTitle: "Simplify hospital management using QRhive",
    headerText:
      "QR codes can facilitate easy access to patient information and enhance medication management, improving patient safety and care coordination.",
    bodyTitleOne: "Patient Engagement",
    bodyTextOne:
      "Patients can take a more active role in their healthcare, access their own records, and understand their treatment plans better.",
    bodyTitleTwo: "Data Accuracy",
    bodyTextTwo:
      "QR codes reduce the risk of manual data entry errors, ensuring that the right information is associated with the right patient.",
    bodyTitleThree: "Efficiency",

    bodyTextThree:
      "Healthcare providers save time by quickly accessing patient information through QR codes, leading to more efficient care delivery.",
    icon: Check,
    pic: <HealthCare />,
  },
];

export default usecasepagesdata;
