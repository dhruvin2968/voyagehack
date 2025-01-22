import {Routes,Route} from "react-router-dom";
import { Home,PageNotFound,UserDashboard,AboutPage,FAQ} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="">
    <Routes>
    <Route path="" element={<Home />} />
   <Route path="about" element={<AboutPage/>} />
    <Route path="mydashboard" element={<UserDashboard  />} /> 
    <Route path="faqs" element={<FAQ />} /> 
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
};