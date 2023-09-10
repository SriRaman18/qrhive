import {
  Seminar,
  Review,
  Restaurant,
  Shopping,
  Travel,
  Warranty,
} from './assets'

const data = [
  {
    id: 1,
    title: 'For Shopping',
    content:
      'QR codes have the ability to lead customers directly to product pages or the checkout, providing an intuitive and smooth shopping journey.',
    image: <Shopping />,
  },
  {
    id: 2,
    title: 'Restaurants Menus',
    content:
      'QR menus provide an engaging dining encounter, enabling customers to explore comprehensive menu items, images, and even make orders using their smartphones.',
    image: <Restaurant />,
  },
  {
    id: 3,
    title: 'Customer Review',
    content:
      'Build trust with positive reviews. QR codes make them easy to access, boosting credibility. Simplify the review process, encouraging more feedback.',
    image: <Review />,
  },
  {
    id: 4,
    title: 'Travel & Tourism',
    content:
      'Make interactive tours using QR codes. Visitors enjoy a dynamic and flexible experience. QR codes link to info about landmarks, culture, and nearby spots, making visits even better.',
    image: <Travel />,
  },
  {
    id: 5,

    title: 'Online seminars & digital courses',
    content:
      'Utilize QR codes to expedite sign-ups for your seminars and digital courses. Enhance user experience by enabling easy registration through a quick scan',
    image: <Seminar />,
  },

  {
    id: 6,

    title: 'Warranty Registration',
    content:
      'Say goodbye to paperwork and hello to efficiency: Use our QR code for instant warranty registration and enjoy peace of mind.',
    image: <Warranty />,
  },
]
export default data
