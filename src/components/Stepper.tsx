import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axiosInstance from "@/utils/axiosInstance.ts";

function Stepper() {
  // const [stepData, setStepsData] = useState([
  //   {
  //     BussinessName: "",
  //     Industry: "",
  //   },
  //   {
  //     companySize: "",
  //     GeographicFocus: "",
  //   },
  //   {
  //     CustomerType: "",
  //     TargetMarketSize: "",
  //   },
  //   {
  //     PrimaryGoal: "",
  //     BrandTone: "",
  //   },
  //   {
  //     Leads: "",
  //     AverageTimeSpendPerlead: "",
  //     HourlyRate: "",
  //     HiringAnyone: false,
  //     EstimatedMonthlySpend: "",
  //     ValueOf1NewCustomer: "",
  //   },
  //   {
  //     ChannelStrategy: [],
  //   },
  // ]);
  
  
  const [stepCount, setStepCount] = useState(1);

  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [geographicFocus, setGeographicFocus] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [targetMarketSize, setTargetMarketSize] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [brandTone, setBrandTone] = useState("");
  const [leads, setLeads] = useState("");
  const [averageTimeSpendPerlead, setAverageTimeSpendPerlead] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [hiringAnyone, setHiringAnyone] = useState(false);
  const [estimatedMonthlySpend, setEstimatedMonthlySpend] = useState("");
  const [valueOf1NewCustomer, setValueOf1NewCustomer] = useState("");
  const [ChannelStrategy, setChannelStrategy] = useState([
    "Email",
    "Facebook",
    "website",
    "Instagram",
    "Social Media",
  ]);

  async function handleSubmit() {
    try {
      const response = await axiosInstance.post("/api/stepData", {
        BussinessName: businessName,
        Industry: industry,
        companySize: companySize,
        GeographicFocus: geographicFocus,
        CustomerType: customerType,
        TargetMarketSize: targetMarketSize,
        PrimaryGoal: primaryGoal,
        BrandTone: brandTone,
        Leads: leads,
        AverageTimeSpendPerlead: averageTimeSpendPerlead,
        HourlyRate: hourlyRate,
        HiringAnyone: hiringAnyone,
        EstimatedMonthlySpend: estimatedMonthlySpend,
        ValueOf1NewCustomer: valueOf1NewCustomer,
        ChannelStrategy: ChannelStrategy,
      });

      if (response.status == 200) {
        setBusinessName("");
        setIndustry("");
        setCompanySize("");
        setGeographicFocus("");
        setCustomerType("");
        setTargetMarketSize("");
        setPrimaryGoal("");
        setBrandTone("");
        setLeads("");
        setAverageTimeSpendPerlead("");
        setHourlyRate("");
        setHiringAnyone(false);
        setEstimatedMonthlySpend("");
        setValueOf1NewCustomer("");
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div>
          {stepCount == 1 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-building2 w-6 h-6 text-blue-600"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome to Sumor.ai
                  </h2>
                  <p className="text-gray-500">
                    Let's set up your AI marketing assistant to help grow your
                    business. This information helps us tailor the perfect
                    marketing strategy for you.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="Businessname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business Name
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Input
                    type="text"
                    placeholder="Enter your business name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="Industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setIndustry(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="Software & Technology">
                          Software & Technology
                        </SelectItem>
                        <SelectItem value="Professional Services">
                          Professional Services
                        </SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Retail & E-commerce">
                          Retail & E-commerce
                        </SelectItem>
                        <SelectItem value="Manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Financial Services">
                          Financial Services
                        </SelectItem>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                        <SelectItem value="Marketing & Advertising">
                          Marketing & Advertising
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  w-full"
                  onClick={() => setStepCount(() => 2)}
                >
                  Continue
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${1} of ${6}`}
              </div>
            </div>
          )}
          {/* step 2 */}
          {stepCount == 2 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase w-6 h-6 text-blue-600"
                  >
                    <rect
                      width="20"
                      height="14"
                      x="2"
                      y="7"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Business Details
                  </h2>
                  <p className="text-gray-500">
                    Understanding your company's scale helps us recommend the
                    most effective marketing approaches and automation
                    strategies.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="CompanySize"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Size
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setCompanySize(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="1-10 employees">
                          1-10 employees
                        </SelectItem>
                        <SelectItem value="11-50 employees">
                          11-50 employees
                        </SelectItem>
                        <SelectItem value="51-200 employees">
                          51-200 employees
                        </SelectItem>
                        <SelectItem value="201-500 employees">
                          201-500 employees
                        </SelectItem>
                        <SelectItem value="500+ employees">
                          500+ employees
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="GeographicFocus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Geographic Focus
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setGeographicFocus(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="Local">Local</SelectItem>
                        <SelectItem value="Regional">Regional</SelectItem>
                        <SelectItem value="National">National</SelectItem>
                        <SelectItem value="International">
                          International
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500 px-4 py-2 text-base  "
                  onClick={() => setStepCount(1)}
                >
                  Back
                </Button>
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  ml-auto  "
                  onClick={() => setStepCount(3)}
                >
                  Continue
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${2} of ${6}`}
              </div>
            </div>
          )}

          {/* step 3 */}
          {stepCount == 3 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-6 h-6 text-blue-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Target Audience
                  </h2>
                  <p className="text-gray-500">
                    Let's identify who your ideal customers are. This will help
                    our AI create more targeted and effective marketing
                    campaigns.{" "}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="CompanySize"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Type
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setCustomerType(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="B2B">
                          B2B - Business to Business
                        </SelectItem>
                        <SelectItem value="B2C">
                          B2C - Business to Consumer
                        </SelectItem>
                        <SelectItem value="Local">Local Business</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="GeographicFocus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Target Market Size
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setTargetMarketSize(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="Small businesses">
                          Small businesses
                        </SelectItem>
                        <SelectItem value="Mid-market companies">
                          Mid-market companies
                        </SelectItem>
                        <SelectItem value="Enterprise organizations">
                          Enterprise organizations
                        </SelectItem>
                        <SelectItem value="Individual consumers">
                          Individual consumers
                        </SelectItem>
                        <SelectItem value="Mixed audience">
                          Mixed audience
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500 px-4 py-2 text-base  "
                  onClick={() => setStepCount(2)}
                >
                  Back
                </Button>
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  ml-auto  "
                  onClick={() => setStepCount(4)}
                >
                  Continue
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${3} of ${6}`}
              </div>
            </div>
          )}

          {/* step 4 */}
          {stepCount == 4 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target w-6 h-6 text-blue-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Business Goals
                  </h2>
                  <p className="text-gray-500">
                    What do you want to achieve? We'll align our AI agents and
                    automation to help you reach these objectives.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="CompanySize"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Primary Goal
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setPrimaryGoal(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="Leads">Generate Leads</SelectItem>
                        <SelectItem value="Sales">Increase Sales</SelectItem>
                        <SelectItem value="Retention">
                          Customer Retention
                        </SelectItem>
                        <SelectItem value="Engagement">
                          Brand Engagement
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Label
                      htmlFor="GeographicFocus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand Tone
                    </Label>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                  </div>

                  <Select onValueChange={(value) => setBrandTone(value)}>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select a option</SelectLabel>
                        <SelectItem value="Friendly">
                          Friendly & Approachable
                        </SelectItem>
                        <SelectItem value="Professional">
                          Professional & Formal
                        </SelectItem>
                        <SelectItem value="Energetic">
                          Energetic & Bold
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500 px-4 py-2 text-base  "
                  onClick={() => setStepCount(3)}
                >
                  Back
                </Button>
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  ml-auto  "
                  onClick={() => setStepCount(5)}
                >
                  Continue
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${4} of ${6}`}
              </div>
            </div>
          )}

          {/* step 5 */}
          {stepCount == 5 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calculator w-6 h-6 text-blue-600"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <line x1="8" x2="16" y1="6" y2="6"></line>
                    <line x1="16" x2="16" y1="14" y2="18"></line>
                    <path d="M16 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M8 18h.01"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Calculate Your Savings
                  </h2>
                  <p className="text-gray-500">
                    Let's see exactly how much time and money Sumor.ai can save
                    you compared to doing marketing manually or hiring
                    freelancers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">
                      Tell us about your current situation
                    </h3>
                    <p className="text-sm text-blue-700">
                      We'll calculate your potential savings with AI automation
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        How many new leads do you want per month?
                      </Label>
                      <Input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={leads}
                        placeholder="50"
                        onChange={(e) => setLeads(e.target.value)}
                      ></Input>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Average time you spend per lead (minutes)?
                      </Label>
                      <Input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={averageTimeSpendPerlead}
                        placeholder="10"
                        onChange={(e) =>
                          setAverageTimeSpendPerlead(e.target.value)
                        }
                      ></Input>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        What's your time worth (hourly rate in $)?
                      </Label>
                      <Input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        placeholder="40"
                      ></Input>
                    </div>
                    <div>
                      <Label htmlFor="hiring" className="flex item-center">
                        <Checkbox
                          id="hiring"
                          className="rounded border-gray-300  focus:ring-blue-500 text-blue-600"
                          checked={hiringAnyone}
                          onCheckedChange={(checked) =>
                            setHiringAnyone(!!checked)
                          }
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          Are you hiring anyone to help with marketing?
                        </span>
                      </Label>

                      {hiringAnyone && (
                        <div>
                          <Label className="block text-sm font-medium text-gray-700 mt-2">
                            Estimated monthly spend on freelancers/agencies ($)
                          </Label>
                          <Input
                            type="number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={estimatedMonthlySpend}
                            onChange={(e) =>
                              setEstimatedMonthlySpend(e.target.value)
                            }
                            placeholder="800"
                          ></Input>
                        </div>
                      )}
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Value of 1 new customer (LTV in $)
                      </Label>
                      <Input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={valueOf1NewCustomer}
                        onChange={(e) => setValueOf1NewCustomer(e.target.value)}
                        placeholder="300"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">
                      Your Potential Monthly Savings
                    </h3>
                    <p className="text-sm text-green-700">
                      Here's what Sumor.ai can save you every month
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-clock w-5 h-5 text-blue-600 mr-2"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span className="font-meduim">Time Saved</span>
                        </div>
                        <span className="text-lg font-bold text-blue-600">
                          8.3 hours
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Monthly hours saved on lead management
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-dollar-sign w-5 h-5 text-green-600 mr-2"
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>

                          <span className="font-meduim">Labor Cost Saved</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">
                          $333
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Value of your time saved
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bot w-5 h-5 text-purple-600 mr-2"
                          >
                            <path d="M12 8V4H8"></path>
                            <rect
                              width="16"
                              height="12"
                              x="4"
                              y="8"
                              rx="2"
                            ></rect>
                            <path d="M2 14h2"></path>
                            <path d="M20 14h2"></path>
                            <path d="M15 13v2"></path>
                            <path d="M9 13v2"></path>
                          </svg>
                          <span className="font-meduim">Tool Replacement</span>
                        </div>
                        <span className="text-lg font-bold text-purple-600">
                          $200
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Replace multiple marketing tools
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users w-5 h-5 text-orange-600 mr-2"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>

                          <span className="font-meduim">
                            Freelancer Savings
                          </span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">
                          $800
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Reduce external marketing costs
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-lg text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg">
                          Freelancer Savings
                        </span>
                        <span className="text-2xl font-bold">$800</span>
                      </div>
                      <p className="text-green-100">
                        Money saved every month with AI automation
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex item-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trending-up w-5 h-5 text-blue-600 mr-2"
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          <span className="font-medium">Revenue Potential</span>
                        </div>
                        <span className="text-lg font-bold text-blue-600">
                          $3000
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Est. 10 new customers × $300 LTV
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calculator h-5 w-5 text-yellow-400"
                        >
                          <rect
                            width="16"
                            height="20"
                            x="4"
                            y="2"
                            rx="2"
                          ></rect>
                          <line x1="8" x2="16" y1="6" y2="6"></line>
                          <line x1="16" x2="16" y1="14" y2="18"></line>
                          <path d="M16 10h.01"></path>
                          <path d="M12 10h.01"></path>
                          <path d="M8 10h.01"></path>
                          <path d="M12 14h.01"></path>
                          <path d="M8 14h.01"></path>
                          <path d="M12 18h.01"></path>
                          <path d="M8 18h.01"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          ROI Calculation
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            With Sumor.ai at $97/month, your ROI is
                            <strong>1374%</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500 px-4 py-2 text-base  "
                  onClick={() => setStepCount(4)}
                >
                  Back
                </Button>
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  ml-auto  "
                  onClick={() => setStepCount(6)}
                >
                  Continue
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${5} of ${6}`}
              </div>
            </div>
          )}

          {/* step 6 */}
          {stepCount == 6 && (
            <div
              className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      1
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      2
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      3
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      4
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      5
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex item-center">
                    <div className="w-8 h-8 rounded-full flex item-center justify-center bg-blue-600 text-white">
                      6
                    </div>
                    <div className="w-full h-1 mx-2 bg-gray-200">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe w-6 h-6 text-blue-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Channel Strategy
                  </h2>
                  <p className="text-gray-500">
                    Select the channels where you want to engage with your
                    customers. We'll set up AI agents to manage these
                    effectively.
                  </p>
                </div>
              </div>

              <div className="space-y-6" id="channel">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail w-5 h-5 text-gray-600"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">Email</h3>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Recommended
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Newsletters, follow-ups, and promotions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin w-5 h-5 text-gray-600"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            LinkedIn
                          </h3>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Recommended
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Connection requests, posts, and messaging
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-instagram w-5 h-5 text-gray-600"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            Instagram
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Stories, posts, and direct messages
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe w-5 h-5 text-gray-600"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            Google Business
                          </h3>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Recommended
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Reviews, posts, and local search
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-message-square w-5 h-5 text-gray-600"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            Website Chat
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Real-time visitor engagement
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg border-2 transition-all cursor-pointer border-gray-200 hover:border-blue-200">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-hash w-5 h-5 text-gray-600"
                        >
                          <line x1="4" x2="20" y1="9" y2="9"></line>
                          <line x1="4" x2="20" y1="15" y2="15"></line>
                          <line x1="10" x2="8" y1="3" y2="21"></line>
                          <line x1="16" x2="14" y1="3" y2="21"></line>
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            Social Media
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Cross-platform engagement and monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bot h-5 w-5 text-yellow-400"
                      >
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        AI Agent Recommendation
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Based on your business profile, we recommend starting
                          with Email, LinkedIn, and Google Business. This
                          combination typically provides the best results for
                          your industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500 px-4 py-2 text-base  "
                  onClick={() => setStepCount(5)}
                >
                  Back
                </Button>
                <Button
                  className="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-base  ml-auto  "
                  onClick={handleSubmit}
                >
                  Submit & View Growth Plan
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500 ">
                {`Step ${6} of ${6}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Stepper;
