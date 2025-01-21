import {Routes,Route} from "react-router-dom";
import { Home,PageNotFound,UserDashboard} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="">
    <Routes>
    <Route path="" element={<Home />} />
    {/* <Route path="about" element={<AboutUs title="Popular Movies/MovieMate"/>} />*/}
    <Route path="mydashboard" element={<UserDashboard  />} /> 
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
};