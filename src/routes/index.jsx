import { createBrowserRouter } from "react-router-dom";
import Anasayfa from "../pages/anasayfa";
import Hakkimizda from "../pages/hakkimizda";
import HizmetBolgelerimiz from "../pages/hizmetBolgelerimiz";
import Iletisim from "../pages/iletisim";
import MainLayout from "../layouts/main";
const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Anasayfa/>
            },
            {
                path:'hakkimizda',
                element: <Hakkimizda/>
            },
            {
                path:'hizmet-bolgelerimiz',
                element:<HizmetBolgelerimiz/>
            },
            {
                path:'iletisim',
                element:<Iletisim/>
            }
            
        ]
    }
    
])
export default routes; // Default olarak export ediliyor
