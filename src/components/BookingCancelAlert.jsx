"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";

export function BookingCancelAlert({ facilityName, bookingId }) {

    const router = useRouter();
    
    console.log(bookingId)

     const handleCancelBooking = async() =>{

      

        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                
            }
        })

        const data = await res.json();

        // console.log(data)

        if (data.deletedCount > 0) {
    router.refresh();
  }

        
    }
  return (
    <AlertDialog>
      <Button
        variant="light"
        className="text-rose-600 hover:text-rose-700 text-sm flex items-center gap-1"
      >
        <MdCancel className="text-[18px]" />
        Cancel Booking
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Cancel This Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel your booking for{" "}
                <strong>{facilityName}</strong>?
              </p>

              <p className="mt-2 text-sm text-slate-500">
                This action cannot be undone once the booking is cancelled.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep Booking
              </Button>

              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}