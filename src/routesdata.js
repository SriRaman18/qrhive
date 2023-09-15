import Corporateeventstwo from "./pages/usecases/corporateeventstwo";
import Corporateevents from "./pages/usecases/corporateevents";
import Customerreview from "./pages/usecases/customerreview";
import Digitalbranding from "./pages/usecases/digitalbranding";
import Fmcgindustry from "./pages/usecases/fmcgindustry";
import Healthcare from "./pages/usecases/healthcare";
import Logisticsindustry from "./pages/usecases/logisticsindustry";
import Onlineseminars from "./pages/usecases/onlineseminars";
import Restaurantsmenu from "./pages/usecases/restaurantsmenu";
import Shopping from "./pages/usecases/shopping";
import Supplychain from "./pages/usecases/supplychain";
import Traveltourism from "./pages/usecases/traveltourism";
import { SupplyChain } from "./assets";

const routesdata = [
  {
    id: 1,
    pagename: "/shopping",
    element: <Shopping />,
  },
  {
    id:2 ,
    pagename: "/restaurants-menu",
    element: <Restaurantsmenu />,
  },
  {
    id:3 ,
    pagename: "/customer-review",
    element: <Customerreview />,
  },
  {
    id:4 ,
    pagename: "/corporate-events",
    element: <Corporateevents />,
  },
  {
    id:5 ,
    pagename: "/travel-tourism",
    element: <Traveltourism />,
  },
  {
    id:6 ,
    pagename: "/online-seminars",
    element: <Onlineseminars />,
  },
  {
    id:7 ,
    pagename: "/digital-branding",
    element: <Digitalbranding />,
  },
  {
    id:8 ,
    pagename: "/Corporate-events-two",
    element: <Corporateeventstwo />,
  },
  {
    id:9,
    pagename: "/logistics-industry",
    element: <Logisticsindustry />,
  },
  {
    id:10,
    pagename: "/fmcg-industry",
    element: <Fmcgindustry />,
  },
  {
    id:11,
    pagename: "/supply-Chain",
    element: <SupplyChain />,
  },
  {
    id:12,
    pagename: "/healthcare",
    element: <Healthcare />,
  },
  
];

export default routesdata;
