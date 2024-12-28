import React, { useState } from 'react';

const FinanceChart = () => {
  const [activeTab, setActiveTab] = useState('revenue');

  return (
    <div className="flex gap-6">
      {/* Main Trends Section */}
      <div className="border flex w-3/4 rounded-md p-5 flex-3">
        <div className="flex-col w-full">
          {/* Tabs Header */}
          <div className="flex w-full border-b gap-5 items-center">
            <p className="bottom-bar text-2xl">Trends</p>

            <div
              className={`flex items-center gap-1 cursor-pointer ${
                activeTab === 'revenue' ? 'text-black font-semibold border-b-2 border-black px-3 pb-1' : ''
              }`}
              onClick={() => setActiveTab('revenue')}
            >
              <img
                src="/DashboardImages/List.png"
                alt=""
                className="icon-style"
              />
              <img
                src="/DashboardImages/List-light.png"
                alt=""
                className="dark-icon-style"
              />
              <p className="bottom-bar">Revenue Trends</p>
            </div>

            <div
              className={`flex items-center gap-1 cursor-pointer ${
                activeTab === 'preorder' ? 'text-black font-semibold border-b-2 border-black px-3 pb-1' : ''
              }`}
              onClick={() => setActiveTab('preorder')}
            >
              <img
                src="/DashboardImages/List.png"
                alt=""
                className="icon-style"
              />
              <img
                src="/DashboardImages/List-light.png"
                alt=""
                className="dark-icon-style"
              />
              <p className="">Pre-order Trends</p>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="mt-4">
            {activeTab === 'revenue' && (
              <><div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <p className='text-3xl font-medium'>₹3,500,000</p>
                  <div
                    className="flex gap-1 items-center justify-center rounded-full px-2 py-1 bg-[#EEF5F0] text-[#589E67]"
                  >
                    <img src="/DashboardImages/TrendUp.png" />
                    <p className="text-xs font-medium">12%</p>
                    
                  </div>
                </div>
                <div className='flex gap-3'>
                <button className="button-oulined" type="button">
                
                  <p>January, 2023 - December, 2023</p>
                  <img src="/DashboardImages/CaretDown.png" alt="dekalo" className="icon-style"/>
                <img src="/DashboardImages/CaretDown-dark.png" alt="dekalo" className="dark-icon-style"/>
                </button>
                <button className="button-oulined" type="button">
                
                  <p>Month</p>
                  <img src="/DashboardImages/CaretDown.png" alt="dekalo" className="icon-style"/>
                <img src="/DashboardImages/CaretDown-dark.png" alt="dekalo" className="dark-icon-style"/>
                </button>
                </div>

              </div>
              <img src="/DashboardImages/Frame 63.svg" alt="Revenue Trends Chart" className='w-full' />
              <div className='bottom-style border flex items-center justify-center h-8 mt-4 rounded-[4px]'>
                <p className='text-xs'>Clear spike in revenue around July 2024 after a marketing campaign.</p>
              </div>
              </>
              
            )}
            {activeTab === 'preorder' && (
              <img src="/images/Vector 367.svg" alt="Pre-order Trends Chart" />
            )}
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="border rounded-md w-1/4 p-5 flex flex-col  justify-between">
      <p className='text-xl font-medium'>Model Popularity</p>
      <div className='flex flex-col items-center'>
      <img src='/DashboardImages/Frame 482750.svg' alt='' className='w-full'/>
      <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#589E67] rounded-full"></span>
            <p className="text-base font-medium">Altima Core (65%)</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <p className="text-base font-medium">Altima Elite (35%)</p>
          </div>
        </div>
        </div>
        <div>
          <p className='text-center font-medium'>Insight</p>
      <div className='bottom-style border flex items-center justify-center py-2 mt-1 rounded-[4px]'>
        <p className='text-xs text-center'>Altima Core is the top <br/>choice among customers.</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default FinanceChart;
