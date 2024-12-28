"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import Footer from "components/Footer/Footer"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"

const Page: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const router = useRouter()

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   setLoading(true)
  //   setError(null)

  //   try {
  //     const response = await fetch("https://amd-backend-1.onrender.com/custom-user/sign-in/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     })

  //     if (!response.ok) {
  //       throw new Error("Failed to sign in. Please try again.")
  //     }

  //     setShowSuccessNotification(true)
  //     await new Promise((resolve) => setTimeout(resolve, 3000))

  //     setLoading(false)

  //     router.push("/dashboard")
  //   } catch (error: any) {
  //     setError(error.message)
  //     setShowErrorNotification(true)
  //     setLoading(false)
  //   }
  // }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      setError(null)
  
      
        setShowSuccessNotification(true)
        await new Promise((resolve) => setTimeout(resolve, 3000))
  
        setLoading(false)
  
        router.push("/dashboard")
      
    }



  // UseEffect to automatically hide notifications after a timeout
  useEffect(() => {
    if (showSuccessNotification || showErrorNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false)
        setShowErrorNotification(false)
      }, 5000) // Notifications will disappear after 5 seconds

      return () => clearTimeout(timer) // Clean up the timeout if component unmounts
    }
  }, [showSuccessNotification, showErrorNotification])

  return (
    <section className="flex h-screen flex-grow justify-center bg-[#FFFFFF]">
      <div className="flex flex-col w-full items-center justify-center">
      <div className="mb-4 flex items-center justify-center">
              <img src="/AuthImages/Logo.png"  alt="profile" />
            </div>
        <div
          className=" border flex h-auto rounded-[20px]  bg-[#F9F9F9] max-sm:w-[95%] md:w-[500px] xl:max-w-[500px]"
          
        >
          <div className="w-full justify-center px-[53px] py-[60px] max-sm:px-7">
            
            <div className="mb-8 flex items-center justify-center">
              <p className="text-2xl font-semibold">Sign In</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="search-bg mb-3 h-[56px] items-center justify-between rounded-md px-3 py-2 hover:border-[#252525] focus:border-[#252525] focus:bg-[#FBFAFC] max-sm:mb-2 ">
                <p className="text-xs text-[#9D99AC]">Email</p>
                <div className="flex">
                  <input
                    type="text"
                    id="username"
                    placeholder="Shereefadamu001@gmail.com"
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>

              <div className="search-bg mb-3 h-[56px] items-center justify-between rounded-[10px] px-3 py-2 hover:border-[#252525] focus:border-[#252525] focus:bg-[#FBFAFC] max-sm:mb-2 ">
                <p className="text-xs text-[#9D99AC]">Password</p>
                <div className="flex">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button type="button" className="focus:outline-none" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <Image
                        className="icon-style"
                        src="/AuthImages/eye-close-line.svg"
                        width={24}
                        height={24}
                        alt="toggle password visibility"
                      />
                    )}
                  </button>
                </div>
              </div>

              <Link href="/forgot-password" className="flex content-center items-center justify-end gap-2">
                <p className="text-sm text-[#044982]">Forgot Password</p>
              </Link>

              <div className="mt-5 flex w-full gap-6">
                <button
                  type="submit"
                  className="button-primary h-[50px] w-full rounded-md max-sm:h-[45px]"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Continue"}
                </button>
              </div>
            </form>

           
          </div>
        </div>
        <Footer />
      </div>
      {showSuccessNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">Login Successfull</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {showErrorNotification && (
        <div className="animation-fade-in 0 absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </section>
  )
}

export default Page
