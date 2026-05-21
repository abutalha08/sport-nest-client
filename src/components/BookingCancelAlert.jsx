"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";

export function BookingCancelAlert({ facilityName, bookingId }) {

    const router = useRouter();
    
    console.log(bookingId)

     const handleCancelBooking = async() =>{

      const {data:tokenData} = await authClient.token()
              // console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
                
            }
        })

        const data = await res.json();

        // console.log(data)

         if (data.deletedCount > 0) {
    toast.success("Booking cancelled successfully!");
    router.refresh();
  } 
  else {
    toast.error("Failed to cancel booking!");
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