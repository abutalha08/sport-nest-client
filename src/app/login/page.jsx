"use client";

import React from "react";
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

import { FcGoogle } from "react-icons/fc";
import { ArrowRight } from "lucide-react";

import "animate.css";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login successful!");

      setTimeout(() => {
        router.push("/");
      }, 800);
    }

    if (error) {
      toast.error(error.message || "Invalid email or password");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F7FE] flex items-center justify-center px-4 py-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#004BE8]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-300/10 blur-[120px] rounded-full" />

      {/* MAIN CARD */}
      <Card className="relative w-full max-w-[460px] bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[28px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] animate__animated animate__fadeInUp">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-[#0B2545] font-black text-3xl tracking-tight">
            Welcome Back
          </h1>

          <p className="text-[#64748B] text-sm mt-2 leading-relaxed">
            Login to continue booking premium sports facilities
          </p>
        </div>

        {/* FORM */}
        <Form onSubmit={onSubmit} className="w-full space-y-5">
          {/* EMAIL */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-[#0B2545] font-bold text-[13px] mb-2 block">
              Email Address
            </Label>

            <Input
              placeholder="athlete@sportnest.com"
              className="w-full min-h-[48px] rounded-xl bg-white/80 border border-[#DBEAFE] text-sm text-[#0B2545] transition-all duration-300 hover:border-[#004BE8]/30 focus-within:border-[#004BE8] focus-within:ring-4 focus-within:ring-[#004BE8]/10"
            />

            <FieldError className="text-rose-500 text-[12px] font-semibold mt-1" />
          </TextField>

          {/* PASSWORD */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
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
              className="w-full min-h-[48px] rounded-xl bg-white/80 border border-[#DBEAFE] text-sm text-[#0B2545] transition-all duration-300 hover:border-[#004BE8]/30 focus-within:border-[#004BE8] focus-within:ring-4 focus-within:ring-[#004BE8]/10"
            />

            <Description className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
              Must contain at least 8 characters, 1 uppercase letter and 1
              number
            </Description>

            <FieldError className="text-rose-500 text-[12px] font-semibold mt-1" />
          </TextField>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full h-[50px] bg-[#004BE8] hover:bg-[#003ec4] text-white font-bold text-[14px] rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-lg shadow-blue-600/20 mt-2"
          >
            Login Account
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-7">
          <Separator className="flex-1 bg-slate-200 h-[1px]" />

          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            Or Continue With
          </span>

          <Separator className="flex-1 bg-slate-200 h-[1px]" />
        </div>

        {/* GOOGLE */}
        <Button
          variant="bordered"
          className="w-full h-[48px] bg-white/80 border border-[#DBEAFE] text-[#0B2545] font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-white hover:border-[#004BE8]/30"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        {/* FOOTER */}
        <div className="text-center mt-7 text-sm text-slate-500">
          Don&apos;t have an account?
          <Link href="/register">
            <button
              type="button"
              className="ml-1.5 text-[#004BE8] font-bold hover:underline"
            >
              Register Now
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
