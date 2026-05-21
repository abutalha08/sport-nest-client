"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function FacilityDeleteAlert({ facility }) {

  const router = useRouter();

  const handleDeleteFacility = async () => {

     const {data:tokenData} = await authClient.token()
        // console.log(tokenData)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${facility._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        }
      }
    );

    const data = await res.json();

    // console.log(data)

    if (data.deletedCount > 0) {

      toast.success("Facility deleted successfully!");

      router.refresh();
    } 

    else {
      toast.error("Failed to delete facility!");
    }
  };

  return (
    <AlertDialog>

      {/* ✅ TRIGGER */}
      <AlertDialog.Trigger>

        <Button className="h-[46px] px-6 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold transition-all duration-300">

          <FiTrash2 className="text-[16px]" />

          Delete

        </Button>

      </AlertDialog.Trigger>

      <AlertDialog.Backdrop className="backdrop-blur-sm bg-black/30">

        <AlertDialog.Container>

          <AlertDialog.Dialog className="sm:max-w-[400px] rounded-2xl border border-slate-100 shadow-2xl">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>

              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading className="text-[#0B2545] font-black text-xl">

                Delete Facility?

              </AlertDialog.Heading>

            </AlertDialog.Header>

            <AlertDialog.Body>

              <p className="text-slate-600 leading-relaxed">

                Are you sure you want to delete{" "}

                <strong>{facility.facilityName}</strong>?

              </p>

              <p className="mt-3 text-sm text-slate-500">

                This action cannot be undone once the facility is deleted.

              </p>

            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">

                Keep Facility

              </Button>

              <Button
                onPress={handleDeleteFacility}
                slot="close"
                variant="danger"
              >
                Delete Facility
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>

        </AlertDialog.Container>

      </AlertDialog.Backdrop>

    </AlertDialog>
  );
}