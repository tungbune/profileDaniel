import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">H2O statsocial innovation</li>
        <li className="sidenavLi">SHAPIN</li>
        <li className="sidenavLi">Brand You and Networking </li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Utilizing SDGs in sustainability assessments of CSR implementations in entrepreneurship</li>
        <li className="sidenavLi">Aligning student activities with Sustainable Development Goals (SDGs) and Artificial Intelligence (AI) in Vietnam Questionnaire</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">0389385378</li>
        <li className="sidenavLi">hoangtungzz05158@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav
