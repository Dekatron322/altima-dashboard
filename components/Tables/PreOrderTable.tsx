import React, { useState } from 'react';
import { RxCaretSort, RxCross2, RxDotsVertical } from "react-icons/rx";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { PiEnvelope, PiNoteBold, PiPhone, PiShieldChevronFill, PiShieldPlusFill } from "react-icons/pi";
import Image from 'next/image';
import { IoMdFunnel } from "react-icons/io";
import { IoFunnelOutline } from 'react-icons/io5';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { GoXCircle } from 'react-icons/go';
import { WiTime3 } from "react-icons/wi";
import { VscEye } from "react-icons/vsc";
import { LiaTimesSolid } from 'react-icons/lia';
import { FiXCircle } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import Dropdown from 'components/Dropdown/Dropdown';
import Link from 'next/link';


type SortOrder = "asc" | "desc" | null;
type Order = {
    orderId: string;
    customer: string;
    email: string;
    phone: string;
    doorModel: string;
    units: number;
    payment30: string;
    payment70: string;
    orderStatus: string;
    date: string;
  };
  
const PreOrderTable = () => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("")
  
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
    const [isModalReminderOpen, setIsModalReminderOpen] = useState(false)
    

    const handleCancelOrder = () => {
        setIsModalOpen(true)
      }

      const handleStatusOrder = () => {
        setIsStatusModalOpen(true)
      }

      const confirmStatusChange = () => {
        console.log("Order canceled")
        setIsStatusModalOpen(false)
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

      const closeStatusModal = () => {
        setIsStatusModalOpen(false)
      }
  
  const [orders, setOrders] = useState<Order[]>([
    { orderId: "#ORD12345", customer: "Robert Fox", email: 'robertfox@example.com', phone: '(671) 555-0110', doorModel: "Alima Core", units: 200, payment30: "Paid", payment70: "Pending", orderStatus: "Confirmed", date: "2024-12-19" },
    { orderId: "#ORD12346", customer: "Robert Lee", email: 'robertlee@example.com', phone: '(671) 855-0110', doorModel: "Alima Elite", units: 210, payment30: "Paid", payment70: "Paid", orderStatus: "Completed", date: "2024-12-20" },
    { orderId: "#ORD12347", customer: "Robert Chang", email: 'robertchang@example.com', phone: '(671) 755-0110', doorModel: "Alima Core", units: 500, payment30: "Not Paid", payment70: "Not Paid", orderStatus: "Cancelled", date: "2024-12-20" },
    { orderId: "#ORD12348", customer: "Robert Lee", email: 'fox@example.com', phone: '(671) 565-0110', doorModel: "Alima Elite", units: 1200, payment30: "Paid", payment70: "Pending", orderStatus: "Delivered", date: "2024-12-20" },
    { orderId: "#ORD12349", customer: "Robert Lee", email: 'robertfoxx@example.com', phone: '(671) 555-0111', doorModel: "Alima Core", units: 210, payment30: "Pending", payment70: "Pending", orderStatus: "Pending", date: "2024-12-20" },
    { orderId: "#ORD12345", customer: "Robert Fox", email: 'robertfox@example.com', phone: '(671) 555-0110', doorModel: "Alima Core", units: 200, payment30: "Paid", payment70: "Pending", orderStatus: "Confirmed", date: "2024-12-19" },
    { orderId: "#ORD12346", customer: "Robert Lee", email: 'robertlee@example.com', phone: '(671) 855-0110', doorModel: "Alima Elite", units: 210, payment30: "Paid", payment70: "Paid", orderStatus: "Completed", date: "2024-12-20" },
    { orderId: "#ORD12347", customer: "Robert Chang", email: 'robertchang@example.com', phone: '(671) 755-0110', doorModel: "Alima Core", units: 500, payment30: "Not Paid", payment70: "Not Paid", orderStatus: "Cancelled", date: "2024-12-20" },
    { orderId: "#ORD12348", customer: "Robert Lee", email: 'fox@example.com', phone: '(671) 565-0110', doorModel: "Alima Elite", units: 1200, payment30: "Paid", payment70: "Pending", orderStatus: "Delivered", date: "2024-12-20" },
    { orderId: "#ORD12349", customer: "Robert Lee", email: 'robertfoxx@example.com', phone: '(671) 555-0111', doorModel: "Alima Core", units: 210, payment30: "Pending", payment70: "Pending", orderStatus: "Pending", date: "2024-12-20" },
  ]);


  const doorModelIcons: Record<string, React.ReactNode> = {
    "Alima Core": <PiShieldChevronFill className='h-5 w-5'/>,
    "Alima Elite": <PiShieldPlusFill className='h-5 w-5'/>
    ,
  };

  const getPaymentStyle = (paymentStatus: string) => {
    switch (paymentStatus) {
      case "Paid":
        return { backgroundColor: "#EEF5F0", color: "#589E67" };
    case "Completed":
        return { backgroundColor: "#EEF5F0", color: "#589E67" };
      case "Pending":
        return { backgroundColor: "#FBF4EC", color: "#D28E3D" };
      case "Not Paid":
        return { backgroundColor: "#F7EDED", color: "#AF4B4B" };
    case "Confirmed":
        return { backgroundColor: "#EDF2FE", color: "#4976F4" };
    case "Delivered":
        return { backgroundColor: "#F4EDF7", color: "#954BAF" };
        case "Cancelled":
            return { backgroundColor: "#F7EDED", color: "#AF4B4B" };
      default:
        return {};
    }
  };

  const dotStyle = (paymentStatus: string) => {
    switch (paymentStatus) {
      case "Paid":
        return { backgroundColor: "#589E67" };
      case "Pending":
        return { backgroundColor: "#D28E3D" };
      case "Not Paid":
        return { backgroundColor: "#AF4B4B" };
    case "Completed":
            return { backgroundColor: "#589E67"};
    case "Confirmed":
        return { backgroundColor: "#4976F4"};
    case "Delivered":
        return { backgroundColor: "#954BAF",  };
    case "Cancelled":
            return { backgroundColor: "#AF4B4B" };
      default:
        return {};
    }
  };

  const toggleSort = (column: keyof Order) => {
    const isAscending = sortColumn === column && sortOrder === "asc";
    setSortOrder(isAscending ? "desc" : "asc");
    setSortColumn(column); // Now correctly typed to accept `string`
  
    const sortedOrders = [...orders].sort((a, b) => {
      if (a[column] < b[column]) return isAscending ? 1 : -1;
      if (a[column] > b[column]) return isAscending ? -1 : 1;
      return 0;
    });
  
    setOrders(sortedOrders); // Ensure `setOrders` is also correctly typed
  };

  const handleCancelSearch = () => {
    setSearchText("")
  }

  const filteredOrders = orders.filter(order =>
    Object.values(order)
      .some(value =>
        value
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
  );

  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredOrders.slice(indexOfFirstRow, indexOfLastRow);
  const [selectedOption, setSelectedOption] = React.useState<string>("");
const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  // Handle row selection
  const handleRowsChange = (event: { target: { value: any; }; }) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };


  return (

    <div className="border flex flex-col rounded-md p-5 flex-3 mt-5 relative">
      <div className="py-4 border-b flex justify-between items-center">
        <p className="text-2xl font-medium">Latest Pre-Orders</p>
        <div className="flex gap-4">
          <div className="flex h-[37px] w-[380px] items-center justify-between gap-3 rounded-md border px-3 py-1 text-[#707070]">
            <Image src="/DashboardImages/Search.svg" width={16} height={16} alt="Search Icon" />
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="h-[50px] w-full bg-transparent outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <RxCross2 onClick={handleCancelSearch} style={{ cursor: "pointer" }} />
            )}
          </div>
          <button className="button-oulined" type="button">
            <IoMdFunnel />
            <p>Sort By</p>
          </button>
          <button className="button-oulined" type="button">
            <IoFunnelOutline />
            <p>Filter</p>
          </button>
          <button className="button-oulined" type="button">
            <p>View All Pre-orders</p>
          </button>
        </div>
      </div>
    <div className="w-full overflow-x-auto border">

        <table className="min-w-[1000px] w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr>
              <th
                className="border-b px-4 py-4 text-sm whitespace-nowrap flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSort('orderId')}
              >
                <MdOutlineCheckBoxOutlineBlank className="text-lg" />
                Order ID <RxCaretSort />
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('customer')}
              >
                <p className="flex items-center gap-2">Customer <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('email')}
              >
                <p className="flex items-center gap-2">Email <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('phone')}
              >
                <p className="flex items-center gap-2">Phone <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('doorModel')}
              >
                <p className="flex items-center gap-2">Door Model <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('units')}
              >
                <p className="flex items-center gap-2">Unit Ordered <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('payment30')}
              >
                <p className="flex items-center gap-2">Payment (30%) <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('payment70')}
              >
                <p className="flex items-center gap-2">Payment (70%) <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('orderStatus')}
              >
                <p className="flex items-center gap-2">Order Status <RxCaretSort /></p>
              </th>
              <th
                className="border-b border-l px-4 py-4 text-sm whitespace-nowrap cursor-pointer"
                onClick={() => toggleSort('date')}
              >
                <p className="flex items-center gap-2">Date <RxCaretSort /></p>
              </th>
              <th className="border-b border-l px-4 py-4 text-sm whitespace-nowrap">
                <p className="flex items-center gap-2">Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((order, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2'>
                    <MdOutlineCheckBoxOutlineBlank className='text-lg' />
                    {order.orderId}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-2 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2 pr-4'>
                    <img src="/DashboardImages/UserCircle.png" alt="dekalo" className="icon-style" />
                    <img src="/DashboardImages/UserCircle-dark.png" alt="dekalo" className="dark-icon-style " />
                    {order.customer}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-2 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2'>
                    <PiEnvelope />
                    {order.email}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-2 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2'>
                  <PiPhone />
                    {order.phone}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-2 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {doorModelIcons[order.doorModel]}
                    {order.doorModel}

                  </div>
                </td>
                <td className="border-l border-b px-4 py-3 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2'>
                    <img src="/DashboardImages/Package.png" alt="dekalo" className="icon-style" />
                    <img src="/DashboardImages/Package-dark.png" alt="dekalo" className="dark-icon-style " />
                    {order.units}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-3 text-sm whitespace-nowrap">
                  <div className='flex'>
                    <div style={getPaymentStyle(order.payment30)} className="flex gap-1 items-center justify-center   rounded-full px-2 py-1">
                      <span className='h-2 w-2 rounded-full' style={dotStyle(order.payment30)}></span>

                      {order.payment30}
                    </div>
                  </div>
                </td>
                <td className="border-l flex border-b px-4 py-3 text-sm whitespace-nowrap">
                  <div style={getPaymentStyle(order.payment70)} className="flex gap-1 items-center justify-center   rounded-full px-2 py-1">
                    <span className='h-2 w-2 rounded-full' style={dotStyle(order.payment70)}></span>
                    {order.payment70}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-3 text-sm whitespace-nowrap">
                  <div className='flex'>
                    <div style={getPaymentStyle(order.orderStatus)} className="flex gap-1 items-center justify-center   rounded-full px-2 py-1">
                      <span className='h-2 w-2 rounded-full' style={dotStyle(order.orderStatus)}></span>
                      {order.orderStatus}
                    </div>
                  </div>
                </td>
                <td className="border-l border-b px-4 py-1 text-sm whitespace-nowrap">
                  <div className='flex items-center gap-2 pr-4'>
                    <img src="/DashboardImages/Calendar.png" alt="dekalo" />
                    {order.date}
                  </div>
                </td>
                <td className="border-l border-b px-4 py-1 text-sm whitespace-nowrap">
                  <div className='flex gap-2 items-center '>
                    <Link href="/orders/order-details" className="button-oulined" type="button">
                      <img src="/DashboardImages/Eye.png" alt="dekalo" className="icon-style" />
                      <img src="/DashboardImages/Eye-dark.png" alt="dekalo" className="dark-icon-style" />
                      <p className='text-xs'>View Details </p>
                    </Link>
                    <RxDotsVertical 
                onClick={() => toggleDropdown(index)} 
                className="cursor-pointer" 
              />
              {activeDropdown === index && (
                <div className="absolute right-5 mt-10 w-[233px] modal-style  border border-gray-300 rounded shadow-lg z-100">
                  <ul className="text-sm">
                    <li className="px-4 flex items-center gap-2 border-b py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={handleStatusOrder}>
                    <VscEye />
                    Update Status of selected
                    </li>
                    <li onClick={handleCancelReminderOrder} className="px-4 flex items-center gap-2 border-b py-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <WiTime3 /> Send Reminder to Selected
                    </li>
                    <li className="px-4 flex items-center gap-2 border-b py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={handleCancelOrder}>
                    <GoXCircle /> Cancel Order of selected
                    </li>
                    <li className="px-4 py-2 flex items-center gap-2 text-sm hover:bg-gray-100 cursor-pointer">
                    <PiNoteBold />
                    Export Selected Orders
                    </li>
                  </ul>
                </div>
              )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="flex justify-between items-center mt-4">
        <div className='flex gap-1 items-center'>
        <p>show rows</p>
        <select value={rowsPerPage} onChange={handleRowsChange} className=' p-1 bg-[#F2F2F2]'>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select></div>
       

        <div className='flex items-center gap-3'>
        <button
          className={`px-3 py-2 ${currentPage === 1 ? "cursor-not-allowed text-gray-400" : "text-[#000000]"}`}
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BiSolidLeftArrow />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`h-[27px] w-[30px] flex items-center justify-center rounded-md ${
                currentPage === index + 1 ? "bg-[#000000] text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className={`px-3 py-2 ${currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "text-[#000000]"}`}
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BiSolidRightArrow />
        </button>
        </div>
        <p>Page {currentPage} of {totalPages}</p>
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
            <button className="button__secondary w-full" onClick={confirmReminder}>
              
              <p >Cancel</p>
              </button> 
              <button className="button__black flex w-full" onClick={closeReminderModal}>
              
              <p >Send</p>
                
              </button>
              
            </div>
          </div>
        </div>
      )}

{isStatusModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="modal-style rounded-md shadow-md sm:w-[620px]">
      <div className="flex justify-between border-b px-4 pt-4">
        <h2 className="text-lg font-medium mb-4">Update Status</h2>
        <LiaTimesSolid onClick={closeStatusModal} className="cursor-pointer" />
      </div>
      <div className="p-4">
       
        <Dropdown
          label=""
          options={["Pending", "Confirmed", "Delivered" ,"Cancelled", ]} // Replace with your dynamic options if needed
          value={selectedOption} // The state for the selected dropdown value
          onSelect={setSelectedOption} // The function to update the selected value
          isOpen={isDropdownOpen} // The state controlling whether the dropdown is open
          toggleDropdown={() => setDropdownOpen(!isDropdownOpen)} // The function to toggle dropdown open/close
          disabled={false} // Adjust as needed
        />
      </div>
      <div className="flex justify-between w-full gap-3 px-4 pb-4">
        <button className="button__secondary w-full" onClick={confirmStatusChange}>
          <p>Cancel</p>
        </button>
        <button className="button__black flex w-full" onClick={closeStatusModal}>
          <p>Send</p>
        </button>
      </div>
    </div>
  </div>
)}

      </div>
  );
};

export default PreOrderTable;
