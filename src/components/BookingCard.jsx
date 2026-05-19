"use client";

import React, { useState } from "react";
import {
  Button,
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  DateField,
  Select,
  ListBox,
} from "@heroui/react";

import "animate.css";

const BookingCard = ({ facility }) => {
  const { price = 0, facilityName } = facility;

  const [hours, setHours] = useState(1);

  const handleHoursChange = (e) => {
    const value = Number(e.target.value);

    if (value < 1) {
      setHours(1);
    } else {
      setHours(value);
    }
  };

  const totalPrice = price * hours;

  const availableSlots = [
    "06:00 AM - 08:00 AM",
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
    "06:00 PM - 08:00 PM",
    "08:00 PM - 10:00 PM",
  ];

  return (
    <div className="bg-[#F8FAFC] px-4 pb-10">

      <div className="w-full max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 animate__animated animate__fadeInUp animate__delay-1s">

        <h2 className="text-[#0B2545] font-extrabold text-xl sm:text-2xl tracking-tight mb-6">
          Book This Facility
        </h2>

        <Form
          className="w-full flex flex-col gap-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

            {/* Facility Name */}
            <TextField name="facilityName" isRequired className="w-full">
              <Label className="text-[#0B2545] font-bold text-[12px] mb-1.5 block">
                Facility Name
              </Label>

              <Input
                value={facilityName}
                isReadOnly
                className="w-full min-h-[44px] font-medium px-3.5 bg-white/80 border border-slate-200/80 rounded-xl"
              />
              <FieldError />
            </TextField>

            {/* Date */}
            <DateField name="date" isRequired className="w-full">
              <Label className="text-[#0B2545] font-bold text-[12px] mb-1.5 block">
                Booking Date
              </Label>

              <DateField.Group className="w-full min-h-[44px] px-3.5 bg-white/80 border border-slate-200/80 rounded-xl flex items-center">
                <DateField.Input>
                  {(segment) => (
                    <DateField.Segment
                      segment={segment}
                      className="text-[#0B2545]"
                    />
                  )}
                </DateField.Input>
              </DateField.Group>

              <FieldError />
            </DateField>

            {/*Time Slots */}
            <div className="w-full">
              <Label className="text-[#0B2545] font-bold text-[12px] mb-1.5 block">
                Time Slot
              </Label>

              <Select
                name="timeSlots"
                isRequired
                placeholder="Select a time slot"
                className="w-full"
                selectionMode="single"
              >
                <Select.Trigger className="w-full min-h-[44px] px-3.5 border border-slate-200/80 rounded-xl bg-white/80 flex items-center justify-between text-sm text-[#0B2545]">
                  <Select.Value />
                  <Select.Indicator className="text-slate-400" />
                </Select.Trigger>

                <Select.Popover className="border border-slate-100 shadow-xl bg-white rounded-xl overflow-hidden">
                  <ListBox className="p-1">
                    {availableSlots.map((slot) => (
                      <ListBox.Item
                        key={slot}
                        id={slot}
                        textValue={slot}
                        className="p-2 text-sm text-[#0B2545] hover:bg-slate-50 rounded-lg cursor-pointer"
                      >
                        {slot}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Hours */}
            <TextField name="hours" isRequired className="w-full">
              <Label className="text-[#0B2545] font-bold text-[12px] mb-1.5 block">
                Number of Hours
              </Label>

              <Input
                type="number"
                min={1}
                value={hours}
                onChange={handleHoursChange}
                className="w-full min-h-[44px] px-3.5 bg-white/80 border border-slate-200/80 rounded-xl"
              />

              <FieldError />
            </TextField>

          </div>

          {/* PRICE */}
          <div className="w-full bg-[#EEF4FF]/90 border border-[#DBEAFE]/70 rounded-xl p-5 flex justify-between mt-2">

            <div>
              <span className="font-bold text-[#0B2545]">Total Price</span>
              <p className="text-sm text-slate-400">
                ${price} × {hours} hour
              </p>
            </div>

            <div className="text-[#003EC4] font-black text-3xl">
              ${totalPrice}
            </div>

          </div>

          <Button
            type="submit"
            className="w-full h-[48px] bg-[#003EC4] hover:bg-[#0033A6] text-white font-bold rounded-xl"
          >
            Confirm Booking
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default BookingCard;