"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import AltimaCoreOrders from "components/Tables/AltimaCoreOrders";
import AltimaEliteOrders from "components/Tables/AltimaEliteOrders";
import CompletedOrders from "components/Tables/CompletedOrders"
import { useState } from "react";
import { PiTableDuotone } from "react-icons/pi";


export default function Confirmed() {
    const [activeTab, setActiveTab] = useState('elite');

  
  return (
    <section className="h-full w-full">
      <div className="flex min-h-screen w-full">
        <div className="flex  w-full flex-col">
          <DashboardNav />
          <div className="flex flex-col">
            <div className="px-16 pt-3 border-b flex justify-between items-center">
              <div className="flex gap-3">
              <p className="text-2xl font-medium">Pre-Orders by Door Model</p>
                <div
              className={`flex items-center gap-1 cursor-pointer ${
                activeTab === 'core' ? ' font-semibold border-b-2 border-black px-3 pb-1' : ''
              }`}
              onClick={() => setActiveTab('core')}
            >
              <PiTableDuotone className="text-xl"/>
              <p className="bottom-bar">Altima Core</p>
            </div>

            <div
              className={`flex items-center gap-1 cursor-pointer ${
                activeTab === 'elite' ? 'font-semibold border-b-2 border-black px-3 pb-1' : ''
              }`}
              onClick={() => setActiveTab('elite')}
            >
              <PiTableDuotone className="text-xl"/>
              <p className="bottom-bar">Altima Elite</p>
            </div>
            
            </div>
              
              {/* <div className="flex gap-4">
                
                
                <button className="button-oulined" type="button">
                <img src="/DashboardImages/MailStar.png" alt="dekalo" className="icon-style"/>
                <img src="/DashboardImages/MailStar-dark.png" alt="dekalo" className="dark-icon-style"/>
                  <p>Start Email Campaign</p>
                </button>
                <div className="border-l"></div>
                
              </div> */}
            </div>
            

            <div className="flex w-full gap-6 max-md:flex-col max-md:px-0  max-sm-my-4 md:my-8 px-16 max-sm:px-3">
            {activeTab === 'core' && (
              <div className="w-full">
                <AltimaCoreOrders />
              </div>
            )}
            {activeTab === 'elite' && (
              <div className="w-full">
              <AltimaEliteOrders />
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
