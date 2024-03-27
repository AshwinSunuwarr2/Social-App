import { bottombarLinks } from "@/constants";
import { INavLink } from "@/types";

import { NavLink, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
     
      {bottombarLinks.map((link: INavLink) => {
        const isActive = pathname === link.route;
        return (
          
            
              <NavLink
              to={link.route}
              key={link.label}
              className={`bottombar-link group ${isActive && "bg-primary-500 rounded-[10px]"} flex-center flex-col gap-1 p-2 transition mb-2`}
            >
              <img
                src={link.imgURL}
                alt="link"
                width={16}
                height={16}
                className={`group-hover:invert-white ${
                  isActive && "invert-white"
                }`}
              />
             <p className="tiny-medium text-light-2"> {link.label}</p>
            </NavLink>
      
      );
    })}
    
    </section>
  );
};

export default Bottombar;
