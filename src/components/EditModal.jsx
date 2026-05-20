"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import { Mail, MapPin } from "lucide-react";
import { FiEdit2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function EditModal({ facility }) {

    const router = useRouter();

      const {
    _id,
    description,
    timeSlots,
    price,
    capacity,
    location,
    imageUrl,
    ownerEmail,
    facilityType,
    facilityName,
  } = facility;


      const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const facility = {
          ...Object.fromEntries(formData.entries()),
          timeSlots: formData.getAll("timeSlots"),
        };
    
        console.log(facility);
    
        const res = await fetch(`http://localhost:5000/facility/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(facility),
        });
    
        const data = await res.json();
        console.log(data)

        console.log(data);
    
         if (data.modifiedCount === 1) {
    toast.success("Facility updated successfully!");

    router.refresh(); // auto UI update
  } 
  else {
    toast.error(data?.message || "Update failed!");
  }
      };


  return (
    <Modal>
      {/* TRIGGER BUTTON */}
      <Button className="h-[46px] px-6 rounded-xl bg-[#003EC4] hover:bg-[#0033A6] text-white font-bold transition-all duration-300">
        <FiEdit2 className="text-[16px]" />
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground" />
              <Modal.Heading className="font-bold">
                Update Facility
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Edit your facility details and keep information up to date.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit= {onSubmit} className="space-y-10">
                  {/* GENERAL INFORMATION */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                      <div className="w-1 h-5 bg-[#004BE8] rounded-full" />
                      <h2 className="text-[#0B2545] font-bold text-lg">
                        General Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField
                        defaultValue={facilityName}
                        name="facilityName"
                        isRequired
                      >
                        <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                          Facility Name
                        </Label>
                        <Input placeholder="e.g. Apex Tennis Center" />
                        <FieldError />
                      </TextField>

                      <div>
                        <Select
                          defaultValue={facilityType}
                          name="facilityType"
                          isRequired
                          placeholder="Select facility type"
                        >
                          <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                            Facility Type
                          </Label>

                          <Select.Trigger className="w-full min-h-[44px] rounded-xl">
                            {/* <Select.Value /> */}
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Tennis">Tennis Court</ListBox.Item>
                              <ListBox.Item id="Football">Football Pitch</ListBox.Item>
                              <ListBox.Item id="Cricket">Cricket Nets</ListBox.Item>
                              <ListBox.Item id="Basketball">Basketball Court</ListBox.Item>
                              <ListBox.Item id="Swimming">Swimming Pool</ListBox.Item>
                              <ListBox.Item id="Badminton">Badminton Court</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* OWNER EMAIL */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={ownerEmail}
                          name="ownerEmail"
                          isReadOnly
                        >
                          <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                            Owner Email (Read-Only)
                          </Label>

                          <div className="relative flex items-center">
                            <Mail className="absolute left-4 w-4 h-4 text-gray-400 z-10" />

                            <Input className="w-full pl-10 bg-slate-50/80 border-slate-200 text-slate-500 cursor-not-allowed" />
                          </div>
                        </TextField>
                      </div>
                    </div>
                  </div>

                  {/* VISUAL IDENTITY */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                      <div className="w-1 h-5 bg-[#004BE8] rounded-full" />
                      <h2 className="text-[#0B2545] font-bold text-lg">
                        Visual Identity
                      </h2>
                    </div>

                    <TextField
                      defaultValue={imageUrl}
                      name="imageUrl"
                      isRequired
                    >
                      <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                        Image Content URL
                      </Label>

                      <Input type="url" placeholder="https://example.com/image.jpg" />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* LOGISTICS & PRICING */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                      <div className="w-1 h-5 bg-[#004BE8] rounded-full" />
                      <h2 className="text-[#0B2545] font-bold text-lg">
                        Logistics & Pricing
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* LOCATION */}
                      <TextField
                        defaultValue={location}
                        name="location"
                        isRequired
                      >
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

                      {/* CAPACITY */}
                      <TextField
                        defaultValue={capacity}
                        name="capacity"
                        type="number"
                        isRequired
                      >
                        <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                          Capacity (Persons)
                        </Label>

                        <Input placeholder="e.g. 4" />
                        <FieldError />
                      </TextField>

                      {/* PRICE */}
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label className="text-[#0B2545] font-bold text-[11px] uppercase tracking-wider mb-2 block">
                          Price Per Hour ($)
                        </Label>

                        <Input type="number" placeholder="0.00" />
                        <FieldError />
                      </TextField>

                      {/* TIME SLOTS (FIXED POSITION) */}
                      <div className="md:col-span-2">
                        <Select
                        //   selectedKeys={new Set(timeSlots || [])}
                          name="timeSlots"
                          isRequired
                          selectionMode="multiple"
                          placeholder="Select available slot"
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
                              <ListBox.Item id="06:00-08:00">06:00 - 08:00</ListBox.Item>
                              <ListBox.Item id="08:00-10:00">08:00 - 10:00</ListBox.Item>
                              <ListBox.Item id="10:00-12:00">10:00 - 12:00</ListBox.Item>
                              <ListBox.Item id="14:00-16:00">02:00 - 04:00</ListBox.Item>
                              <ListBox.Item id="16:00-18:00">04:00 - 06:00</ListBox.Item>
                              <ListBox.Item id="18:00-20:00">06:00 - 08:00</ListBox.Item>
                              <ListBox.Item id="20:00-22:00">08:00 - 10:00</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                      <div className="w-1 h-5 bg-[#004BE8] rounded-full" />
                      <h2 className="text-[#0B2545] font-bold text-lg">
                        Detailed Description
                      </h2>
                    </div>

                    <TextField
                      defaultValue={description}
                      name="description"
                      isRequired
                    >
                      <TextArea
                        className="min-h-[120px] rounded-2xl"
                        placeholder="Describe your facility..."
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-end gap-6 pt-6 border-t border-gray-100">
                    
                    <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save Changes</Button>
            </Modal.Footer>

                  </div>
                </form>
              </Surface>
            </Modal.Body>


          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}