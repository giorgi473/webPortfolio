"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import EarthCanvas from "./modules/EarthCanvas";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Message sent!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
      position: "bottom-right",
    });
    console.log(data);
    form.reset();
  }

  return (
    <section className="py-16 px-4 md:px-8 text-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-zinc-400 font-mono text-lg mb-2">
          {"> Let's connect"}
        </p>
        <h2 className="text-5xl md:text-8xl font-bold mb-4 text-cyan-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Want to collaborate? Or just say hello?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Send a Message
          </h3>
          <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="space-y-1">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-gray-400 ml-1">Name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Your name"
                      className="bg-slate-950/50 border-white/10 rounded-sm p-6 focus:ring-cyan-500/50"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-gray-400 ml-1">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-950/50 border-white/10 rounded-sm p-6 focus:ring-cyan-500/50"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-gray-400 ml-1">
                      Message
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="bg-slate-950/50 border-white/10 rounded-sm p-4 resize-none min-h-32 focus:ring-cyan-500/50"
                        aria-invalid={fieldState.invalid}
                      />
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button
                type="submit"
                className="w-full h-14  bg-cyan-400 cursor-pointer text-white font-bold rounded-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                Send Message <Send size={18} />
              </Button>
            </FieldGroup>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
