import React, { useRef } from "react";
import StandardLayout from "./StandardLayout";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  from_name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const emailStatus = useRef<true | false | null>(null);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (
      !formData.from_name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    )
      return;
    emailjs
      .send(
        "service_06a7ly4",
        "template_mrydh16",
        formData,
        "K1iKT5M2YpJgK445h",
      )
      .then((result) => {
        emailStatus.current = result.status === 200;
      });
  };

  return (
    <StandardLayout
      title="Contact Me"
      className="relative mx-auto flex h-screen max-w-7xl items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I'm the asset you're looking for.
          <br />
          <span className="border-b-2 border-primary/50">Let's talk.</span>
        </h4>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="aspect-square w-7 animate-pulse justify-center text-primary" />
            <p className="text-2xl">+32 666 66 66 66</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="aspect-square w-7 animate-pulse justify-center text-primary" />
            <p className="text-2xl">email@email.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="aspect-square w-7 animate-pulse justify-center text-primary" />
            <p className="text-2xl">Cool Lane 123</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("from_name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput max-h-20 resize-y"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-10 py-5 text-lg font-bold text-black"
          >
            Submit
          </button>
          {emailStatus.current !== null && (
            <p
              className={`-mb-24 w-full rounded-md py-3 text-center text-black ${
                emailStatus.current ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {emailStatus.current ? "Email sent!" : "Email failed to send."}
            </p>
          )}
        </form>
      </div>
    </StandardLayout>
  );
}

export default ContactMe;
