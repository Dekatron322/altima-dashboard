"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import ConfirmedOrders from "components/Tables/ConfirmedOrders"
import PreOrderTable from "components/Tables/PreOrderTable"


export default function Confirmed() {

  
  return (
    <section className="h-full w-full">
      <div className="flex min-h-screen w-full">
        <div className="flex  w-full flex-col">
          <DashboardNav />
          <div className="flex flex-col">
            <div className="px-16 py-4 border-b flex justify-between items-center">
              <p className="text-2xl font-medium">Confirmed Pre-Orders</p>
              <div className="flex gap-4">
                
                
                <button className="button-oulined" type="button">
                <img src="/DashboardImages/MailStar.png" alt="dekalo" className="icon-style"/>
                <img src="/DashboardImages/MailStar-dark.png" alt="dekalo" className="dark-icon-style"/>
                  <p>Start Email Campaign</p>
                </button>
                <div className="border-l"></div>
                
              </div>
            </div>
            

            <div className="flex w-full gap-6 max-md:flex-col max-md:px-0  max-sm-my-4 md:my-8 px-16 max-sm:px-3">
              <div className="w-full">
              
                

               
                <ConfirmedOrders />

               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
