"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

import {
  Card,
  Separator,
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import "animate.css";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const RegisterPage = () => {

  const router = useRouter();

    const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // console.log(user)

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    // console.log({data, error});

    await authClient.signOut()

    if (error) {
  toast.error(error.message || "Registration failed!");
  return;
}

if (data) {
  toast.success("Account created successfully!");

  setTimeout(() => {
    router.push("/login");
  }, 800);
}

  };

  const handleGoogleSignUp = async() => {

    toast.loading("Redirecting to Google...");

    await authClient.signIn.social({
        provider: "google"
    })

  }


  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#004BE8]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/20 blur-[120px] rounded-full" />

      {/* MAIN CARD */}
      <Card
        className="
          relative
          w-full max-w-6xl
          overflow-hidden
          rounded-[32px]

          bg-white/60
          backdrop-blur-2xl

          border border-white/40

          shadow-[0_20px_60px_rgba(15,23,42,0.08)]

          flex flex-col lg:flex-row

          animate__animated animate__fadeInUp
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            relative
            w-full lg:w-[45%]
            rounded-t-lg

            bg-[#004BE8]

            p-8 sm:p-12 lg:p-14

            flex flex-col justify-between

            overflow-hidden

            animate__animated animate__fadeInLeft
          "
        >

          {/* LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

          <div className="relative z-10">

            {/* LOGO / BADGE */}
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-white/10
                backdrop-blur-md

                border border-white/20

                flex items-center justify-center

                mb-10
              "
            >
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>

            {/* TEXT */}
            <div className="space-y-5">

              <h1 className="text-white font-black text-4xl sm:text-5xl leading-tight tracking-tight">
                Elevate Your Game.
              </h1>

              <p className="text-white/85 text-[15px] leading-relaxed max-w-md">
                Join the premier network for athletes and facility owners.
                One account unlocks bookings, management, and performance.
              </p>

            </div>
          </div>

          {/* TRUST BADGE */}
          <div
            className="
              relative z-10

              mt-10

              bg-white/10
              backdrop-blur-md

              border border-white/15

              rounded-2xl

              px-5 py-4

              flex items-center gap-3
            "
          >

            <div className="w-9 h-9 rounded-full bg-emerald-400/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
            </div>

            <div>
              <p className="text-white font-semibold text-sm">
                Trusted Platform
              </p>

              <p className="text-white/70 text-xs">
                Used by 500+ sports facilities
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            w-full lg:w-[55%]

            p-8 sm:p-10 lg:p-14

            flex flex-col justify-center

            animate__animated animate__fadeInRight
          "
        >

          {/* HEADER */}
          <div className="mb-8">

            <h2 className="text-[#0B2545] font-black text-3xl tracking-tight">
              Create Account
            </h2>

            <p className="text-[#64748B] text-sm mt-2">
              Start your journey with SportNest today.
            </p>

          </div>

          {/* FORM */}
          <Form onSubmit={onSubmit}
            className="space-y-5">

            {/* NAME */}
            <TextField isRequired name="name" type="text">

              <Label className="text-[#0B2545] font-bold text-[13px] mb-2 block">
                Full Name
              </Label>

              <Input
                placeholder="John Doe"
                className="min-h-[48px]"
              />

              <FieldError className="text-rose-500 text-xs mt-1" />

            </TextField>

            {/* IMAGE */}
            <TextField name="image" type="url">

              <Label className="text-[#0B2545] font-bold text-[13px] mb-2 block">
                Profile Photo URL
              </Label>

              <Input
                placeholder="https://image-url.com/avatar.jpg"
                className="min-h-[48px]"
              />

              <FieldError className="text-rose-500 text-xs mt-1" />

            </TextField>

            {/* EMAIL */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >

              <Label className="text-[#0B2545] font-bold text-[13px] mb-2 block">
                Email Address
              </Label>

              <Input
                placeholder="john@athlete.com"
                className="min-h-[48px]"
              />

              <FieldError className="text-rose-500 text-xs mt-1" />

            </TextField>

            {/* PASSWORD */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {

                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >

              <Label className="text-[#0B2545] font-bold text-[13px] mb-2 block">
                Password
              </Label>

              <Input
                placeholder="••••••••"
                className="min-h-[48px]"
              />

              <Description className="text-[11px] text-[#64748B] mt-1">
                Minimum 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError className="text-rose-500 text-xs mt-1" />

            </TextField>

            {/* BUTTON */}
            <Button
              type="submit"
              className="
                w-full
                h-[50px]

                mt-2

                bg-[#004BE8]
                hover:bg-[#003ec4]

                text-white
                font-bold text-[15px]

                rounded-xl

                shadow-lg shadow-blue-600/20

                transition-all duration-300

                hover:scale-[1.01]
                active:scale-95
              "
            >
              Register Account
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Button>

          </Form>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-7">

            <Separator className="flex-1 bg-slate-200 h-[1px]" />

            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 whitespace-nowrap">
              Or continue with
            </span>

            <Separator className="flex-1 bg-slate-200 h-[1px]" />

          </div>

          {/* GOOGLE */}
          <Button onClick={handleGoogleSignUp}
            variant="outline"
            className="
              w-full
              h-[48px]

              border border-slate-200

              bg-white/80

              text-[#0B2545]
              font-bold text-sm

              rounded-xl

              hover:bg-slate-50

              transition-all duration-300
            "
          >
            <FcGoogle className="text-lg" />
            Register with Google
          </Button>

          {/* BACK */}
          <div className="text-center mt-6">

            <Link href="/login">
  <button
    type="button"
    className="
      inline-flex items-center gap-1.5

      text-[#64748B]
      hover:text-[#004BE8]

      text-sm
      font-semibold

      transition-colors

      group
    "
  >
    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
    Back to Login
  </button>
</Link>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;