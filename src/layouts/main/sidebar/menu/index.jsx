    import { NavLink } from "react-router-dom";
    import classNames from "classnames";
    import { MainMenu } from "~/utils/consts";
    import Button from "~/components/button";
    import More from "./more";
    import New from "./new";

    export default function Menu(){
        return(
            <nav className="mt-0.5 mb-1">
                    {MainMenu.map((menu,index)=> (
                        <NavLink to={menu.path} className="py-1 block group">
                            {({isActive})=>(
                                <div 
                                className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg[#eff3f41a]",{
                                    "fond-bold":isActive
                                })}>
                                <div className="w-[26.25px] h-[26.25px] relative">
                                    {menu.notification&& (         
                                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu.notification}</span>)
                                }
                                    {!isActive&& menu.icon.passive}
                                    {isActive&& menu.icon.active}
                                    </div>
                                        <div className="pr-4 text-xl">
                                            {menu.title}
                                        </div>
                                </div>
                            )}
                        </NavLink>
                    ))}
                    <More/>
                    <New/>
            </nav>
        )
    }