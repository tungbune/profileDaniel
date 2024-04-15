import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Customer Relationship Management (CRM)"
        subTitle="Administrative Assistant at MERRYLAND QUY NHƠN - KỲ QUAN MIỀN NHIỆT ĐỚI"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Leadership"
        subTitle="Content Specialist at Lumina Retreats"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Accounting"
        subTitle="Administrative Assistant at MERRYLAND QUY NHƠN - KỲ QUAN MIỀN NHIỆT ĐỚI"
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Business Development Intern"
        subTitle="FPT Information System HCM"
      />
    </div>
  );
};

export default MyServices;
