"use client";
import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import { MapPin, Mail, ShieldCheck } from "lucide-react";

import "animate.css";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddFacilityPage = () => {

  const router = useRouter();

  const { data: session } = authClient.useSession();
    const user = session?.user;
      // console.log(user)

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = {
      ...Object.fromEntries(formData.entries()),
      timeSlots: formData.getAll("timeSlots"),
    };

    // console.log(facility);

    const {data:tokenData} = await authClient.token()
                console.log(tokenData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },

      body: JSON.stringify(facility),
    });

    const data = await res.json();
    console.log(data);


     if (res.ok) {
    toast.success("Facility created successfully!");
    router.push("/manage-facilities");
  } else {
    toast.error(data?.message || "Something went wrong.");
  }

    

  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/*  Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004BE8]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left sidebar  */}
        <div className="space-y-6 animate__animated animate__fadeInLeft">
          <div>
            <h1 className="text-[#0B2545] font-extrabold text-2xl sm:text-3xl tracking-tight mb-3 leading-tight">
              List Your Facility
            </h1>

            <p className="text-[#64748B] text-[14px] leading-relaxed">
              Join the SportNest network and reach thousands of athletes looking
              for high-performance spaces. Fill out the details to get your
              facility live within minutes.
            </p>
          </div>

          {/* Facility Tip Card */}
          <div
            className="
            bg-white/40
            backdrop-blur-xl
            border border-[#DBEAFE]
            rounded-2xl
            p-6
            shadow-[0_10px_30px_rgba(0,75,232,0.06)]
            transition-all duration-300
            hover:shadow-[0_15px_40px_rgba(0,75,232,0.12)]
          "
          >
            <h3 className="text-[#004BE8] font-bold text-[15px] mb-2">
              Facility Tip
            </h3>

            <p className="text-[#526484] text-[13px] leading-relaxed mb-4">
              High-quality images of your court or pitch can increase bookings
              by up to 40%. Ensure your lighting is bright!
            </p>

            <button className="text-[#004BE8] font-semibold text-[12px] uppercase tracking-wider hover:underline">
              Review Photo Guidelines
            </button>
          </div>

          {/* Verified Status Badge */}
          <div
            className="
            bg-white/30
            backdrop-blur-xl
            border border-[#DBEAFE]
            rounded-2xl
            p-4
            flex items-center gap-3
            shadow-sm
          "
          >
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div>
              <p className="text-[#0B2545] font-bold text-[13px]">
                Verified Account
              </p>

              <p className="text-[#64748B] text-[11px] uppercase tracking-wider">
                Owner Access Granted
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN FORM BLOCK  */}
        <div
          className="
            lg:col-span-2

            bg-white/50
            backdrop-blur-2xl

            border border-white/60
            rounded-[32px]

            p-6 sm:p-10

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]

            animate__animated animate__fadeInUp
          "
        >
          <form className="space-y-10" onSubmit={onSubmit}>
            {/* 1. GENERAL INFORMATION */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="w-1 h-5 bg-[#004BE8] rounded-full" />

                <h2 className="text-[#0B2545] font-bold text-lg">
                  General Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Facility Name */}
                <TextField name="facilityName" isRequired className="w-full">
                  <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                    Facility Name
                  </Label>

                  <Input
                    placeholder="e.g. Apex Tennis Center"
                    className="w-full"
                  />

                  <FieldError />
                </TextField>

                {/* Facility Type */}
                <div className="w-full">
                  <Select
                    name="facilityType"
                    isRequired
                    placeholder="Select facility type"
                    className="w-full"
                  >
                    <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                      Facility Type
                    </Label>

                    <Select.Trigger className="w-full min-h-[44px] rounded-xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Tennis" textValue="Tennis Court">
                          Tennis Court
                        </ListBox.Item>

                        <ListBox.Item id="Football" textValue="Football Pitch">
                          Football Pitch
                        </ListBox.Item>

                        <ListBox.Item id="Cricket" textValue="Cricket Nets">
                          Cricket Nets
                        </ListBox.Item>
                        <ListBox.Item
                          id="Basketball"
                          textValue="Basketball Court"
                        >
                          Basketball Court
                        </ListBox.Item>
                        <ListBox.Item id="Swimming" textValue="Swimming Pool">
                          Swimming Pool
                        </ListBox.Item>

                        <ListBox.Item
                          id="Badminton"
                          textValue="Badminton Court"
                        >
                          Badminton Court
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                {/* Owner Email */}
                <div className="md:col-span-2">
                  <TextField name="ownerEmail" isReadOnly className="w-full">
                    <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                      Owner Email (Read-Only)
                    </Label>

                    <div className="relative flex items-center">
                      <Mail className="absolute left-4 w-4 h-4 text-gray-400 z-10" />

                      <Input
                        value={user?.email}
                        className="
                          w-full pl-10
                          bg-slate-50/80
                          border-slate-200
                          text-slate-500
                          cursor-not-allowed
                        "
                      />
                    </div>
                  </TextField>
                </div>
              </div>
            </div>

            {/* 2. VISUAL IDENTITY */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="w-1 h-5 bg-[#004BE8] rounded-full" />

                <h2 className="text-[#0B2545] font-bold text-lg">
                  Visual Identity
                </h2>
              </div>

              <TextField name="imageUrl" isRequired className="w-full">
                <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                  Image Content URL
                </Label>

                <Input
                  type="url"
                  placeholder="https://example.com/your-facility-image.jpg"
                  className="w-full"
                />

                <FieldError />
              </TextField>
            </div>

            {/* 3. LOGISTICS & PRICING */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="w-1 h-5 bg-[#004BE8] rounded-full" />

                <h2 className="text-[#0B2545] font-bold text-lg">
                  Logistics & Pricing
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <TextField name="location" isRequired className="w-full">
                  <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                    Location
                  </Label>

                  <div className="relative flex items-center">
                    <MapPin className="absolute left-4 w-4 h-4 text-gray-400 z-10" />

                    <Input
                      placeholder="Enter full address"
                      className="w-full pl-10"
                    />
                  </div>

                  <FieldError />
                </TextField>

                {/* Capacity */}
                <TextField
                  name="capacity"
                  type="number"
                  isRequired
                  className="w-full"
                >
                  <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                    Capacity (Persons)
                  </Label>

                  <Input placeholder="e.g. 4" className="w-full" />

                  <FieldError />
                </TextField>

                {/* Price */}
                <TextField
                  name="price"
                  type="number"
                  isRequired
                  className="w-full"
                >
                  <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                    Price Per Hour ($)
                  </Label>

                  <Input type="number" placeholder="0.00" className="w-full" />

                  <FieldError />
                </TextField>

                {/* Time Slots */}
                {/* Available Time Slots */}
                <div className="w-full">
                  <Select
                    name="timeSlots"
                    isRequired
                    placeholder="Select available slot"
                    className="w-full"
                    selectionMode="multiple"
                  >
                    <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                      Available Time Slots
                    </Label>

                    <Select.Trigger className="w-full min-h-[44px] rounded-xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="06:00-08:00" textValue="06:00-08:00">
                          06:00 AM - 08:00 AM
                        </ListBox.Item>

                        <ListBox.Item id="08:00-10:00" textValue="08:00-10:00">
                          08:00 AM - 10:00 AM
                        </ListBox.Item>

                        <ListBox.Item id="10:00-12:00" textValue="10:00-12:00">
                          10:00 AM - 12:00 PM
                        </ListBox.Item>

                        <ListBox.Item id="14:00-16:00" textValue="14:00-16:00">
                          02:00 PM - 04:00 PM
                        </ListBox.Item>

                        <ListBox.Item id="16:00-18:00" textValue="16:00-18:00">
                          04:00 PM - 06:00 PM
                        </ListBox.Item>

                        <ListBox.Item id="18:00-20:00" textValue="18:00-20:00">
                          06:00 PM - 08:00 PM
                        </ListBox.Item>

                        <ListBox.Item id="20:00-22:00" textValue="20:00-22:00">
                          08:00 PM - 10:00 PM
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </div>
            </div>

            {/* 4. DESCRIPTION */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="w-1 h-5 bg-[#004BE8] rounded-full" />

                <h2 className="text-[#0B2545] font-bold text-lg">
                  Detailed Description
                </h2>
              </div>

              <TextField name="description" isRequired className="w-full">
                <TextArea
                  placeholder="Describe the surface, amenities (showers, lockers, parking), and any rules..."
                  className="
                    w-full
                    min-h-[120px]
                    rounded-2xl
                  "
                />

                <FieldError />
              </TextField>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-end gap-6 pt-6 border-t border-gray-100">
              <button
                type="button"
                className="
                  text-[#64748B]
                  hover:text-[#0B2545]
                  font-semibold
                  text-[14px]
                  transition-colors
                "
              >
                Discard Changes
              </button>

              <Button
                type="submit"
                className="
                  px-8 py-3
                  bg-[#004BE8]
                  hover:bg-[#003ec4]
                  text-white
                  font-bold
                  rounded-xl
                  shadow-lg shadow-blue-600/20
                  transition-all duration-300
                  hover:scale-[1.02]
                  active:scale-95
                "
              >
                Create Facility Listing
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFacilityPage;
