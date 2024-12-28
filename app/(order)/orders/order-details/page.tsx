"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import OrderInfo from "components/OrderInfo/OrderInfo"
import { useEffect, useState } from "react"
import { FaRegCheckCircle } from "react-icons/fa"
import { FiXCircle } from "react-icons/fi"
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineStickyNote2 } from "react-icons/md"


export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalReminderOpen, setIsModalReminderOpen] = useState(false)
    

    const handleCancelOrder = () => {
        setIsModalOpen(true)
      }
    
      const confirmCancellation = () => {
        console.log("Order canceled")
        setIsModalOpen(false)
      }
    
      const closeReminderModal = () => {
        setIsModalReminderOpen(false)
      }

      const handleCancelReminderOrder = () => {
        setIsModalReminderOpen(true)
      }
    
      const confirmReminder = () => {
        console.log("Reminder Sent")
        setIsModalReminderOpen(false)
      }
    
      const closeModal = () => {
        setIsModalOpen(false)
      }

      
      

  return (
    <section className="h-full w-full">
      <div className="flex min-h-screen w-full">
        <div className="flex  w-full flex-col">
          <DashboardNav />
          <div className="flex flex-col">
            <div className="px-16 py-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
            <img src="/DashboardImages/ArrowLeft.png" alt="dekalo" className="icon-style"/>
            <img src="/DashboardImages/ArrowLeft-dark.png" alt="dekalo" className="dark-icon-style"/>
                <p className="text-2xl font-medium">#ORD12345</p>
              </div>
              <div className="flex gap-4">
                <button className="button-oulined" type="button">
                <MdOutlineStickyNote2 />
                  <p>Generate Invoice</p>
                </button>
                <button className="button__primary" type="button">
                    <FaRegCheckCircle />
                    <p className="text-white">Mark as Paid </p>
                </button>
                <button className="button__warning" type="button" onClick={handleCancelReminderOrder}>
                
                <img src="/DashboardImages/BellSimple-dark.png" alt="dekalo" />
                  <p className="text-white">Send  Reminder </p>
                </button>
                <button className="button__danger" type="button" onClick={handleCancelOrder}>
                <FiXCircle />
                  <p>Cancel Order</p>
                </button>
                
              </div>
            </div>
            

            <div className="flex w-full gap-6 max-md:flex-col max-md:px-0  max-sm-my-4 md:my-8 px-32 max-sm:px-3">
              <div className="w-full">
              <OrderInfo />
               

               
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-style p-4 rounded-md shadow-md w-80">
            
            <div className="flex justify-between">
            <h2 className="text-lg font-medium mb-4">Cancel Order</h2>
            <LiaTimesSolid onClick={closeModal} className="cursor-pointer"/>
            </div>
            <div className="flex items-center justify-center w-full my-3">
                <img src="/DashboardImages/WarningCircle.png" alt="" />
            </div>
            <p className="mb-4 text-center text-xl font-medium">Are you sure you want to cancel this Order</p>
            <div className="flex justify-between w-full gap-3">
              <button className="button__primary flex w-full" onClick={confirmCancellation}>
              <FaRegCheckCircle />
              <p className="text-sm">Yes, Cancel</p>
                
              </button>
              <button className="button__danger w-full" onClick={closeModal}>
              <FiXCircle />
              <p className="text-sm">No, Leave</p>
              </button>
            </div>
          </div>
        </div>
      )}

{isModalReminderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-style rounded-md shadow-md sm:w-[620px]">
            
            <div className="flex justify-between border-b px-4 pt-4">
            <h2 className="text-lg font-medium mb-4">Send Reminder</h2>
            <LiaTimesSolid onClick={closeReminderModal} className="cursor-pointer"/>
            </div>
            <div className="p-4">
            <p className="px-2 pb-1 pt-2 text-sm">Message</p>
            <div className="search-bg mb-3 items-center  justify-between  rounded-md focus:bg-[#FBFAFC] max-sm:mb-2 ">
          
          <textarea
            className="h-[120px] p-2 w-full rounded-md border-0  bg-transparent px-2 text-sm outline-none focus:outline-none"
            placeholder="Enter Your Message Here"
          ></textarea>
        </div>
        </div>
            
            <div className="flex justify-between w-full gap-3 px-4 pb-4">
            <button className="button__secondary w-full" onClick={closeModal}>
              
              <p >Cancel</p>
              </button> 
              <button className="button__black flex w-full" onClick={confirmCancellation}>
              
              <p >Send</p>
                
              </button>
              
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
