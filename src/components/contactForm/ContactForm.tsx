"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type FormData = {
  email: string;
  country: string;
  company: string;
  phone: string;
  businessType: string;
  website: string;
  product: string;
  message: string;
  captcha: string;
};

const genCaptcha = () =>
  Math.random().toString(36).substring(2, 6).toUpperCase();

export default function ContactForm() {
  const { register, handleSubmit, setError, clearErrors } =
    useForm<FormData>();
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCaptcha(genCaptcha());
  }, []);

  const onSubmit = (data: FormData) => {
    if (data.captcha !== captcha) {
      setError("captcha", { message: "Invalid code" });
      return;
    }
    alert("Submitted");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-[680px] rounded-lg border bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-4">

        <input className="input" placeholder="Your Email" {...register("email")} />
        <input className="input" placeholder="Country" {...register("country")} />
        <input className="input" placeholder="Company" {...register("company")} />

        {/* Phone row (only row with 2 columns) */}
        <div className="flex gap-3">
          <select className="input w-[120px]">
            <option>Country Code</option>
            <option>+880</option>
            <option>+86</option>
          </select>
          <input className="input flex-1" placeholder="Your Phone" {...register("phone")} />
        </div>

        <select className="input" {...register("businessType")}>
          <option>Your Business Type</option>
          <option>Distributor</option>
          <option>Integrator</option>
          <option>End User</option>
        </select>

        <input className="input" placeholder="Your Website" {...register("website")} />

        <select className="input" {...register("product")}>
          <option>Interested Products</option>
          <option>IoT LoRaWAN® Series</option>
          <option>5G & Cellular Products</option>
          <option>Environmental Sensing</option>
          <option>Software & Platform</option>
        </select>

        <textarea
          className="input h-[96px]"
          placeholder="Message"
          {...register("message")}
        />

        {/* CAPTCHA */}
        <div className="flex items-center gap-3">
          <span className="rounded bg-gray-100 px-4 py-2 text-sm font-medium">
            {captcha}
          </span>
          <input
            className="input flex-1"
            placeholder="Verify Code"
            {...register("captcha")}
          />
        </div>

        <button
          type="submit"
          className="mt-2 h-[44px] rounded bg-blue-600 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
