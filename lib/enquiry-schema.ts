import { z } from "zod";

export const experiences = [
  {
    id: "site",
    title: "Private site consultation",
    summary: "A personal introduction to the location and development vision. Scheduling is subject to safe access and availability — never instantly confirmed.",
    defaultFormat: "In-person",
  },
  {
    id: "virtual",
    title: "Virtual design conversation",
    summary: "Explore the philosophy, architectural direction and intended residential experience remotely.",
    defaultFormat: "Video call",
  },
  {
    id: "sustainability",
    title: "Sustainability dialogue",
    summary: "Discuss proposed solar, water, circular-waste and biophilic systems, including their feasibility status.",
    defaultFormat: "Video call",
  },
  {
    id: "dossier",
    title: "Request the project dossier",
    summary: "Register interest in receiving an official overview when approved project materials become available. No document is promised today.",
    defaultFormat: "Email only",
  },
] as const;

export const interestOptions = [
  "Nature & wellness",
  "Clean energy",
  "Water & circular living",
  "Architecture & villas",
  "Farming & nourishment",
  "Community & legacy",
] as const;

export const formatOptions = [
  "In-person",
  "Video call",
  "Phone call",
  "Email only",
] as const;

export const timeOptions = [
  "Flexible",
  "Morning (9 AM – 12 PM IST)",
  "Afternoon (12 PM – 4 PM IST)",
  "Evening (4 PM – 7 PM IST)",
] as const;

export const guestOptions = ["1", "2", "3", "4", "5+"] as const;
export const contactOptions = ["Email", "Phone", "WhatsApp"] as const;

export const enquirySchema = z
  .object({
    experience: z.enum(["site", "virtual", "sustainability", "dossier"]),
    interests: z.array(z.string()).default([]),
    format: z.enum(formatOptions),
    preferredDate: z.string().optional().default(""),
    preferredTime: z.enum(timeOptions),
    guests: z.enum(guestOptions),
    city: z.string().max(90).optional().default(""),
    notes: z.string().max(450).optional().default(""),
    firstName: z.string().trim().min(1, "Please enter your first name.").max(70),
    lastName: z.string().trim().min(1, "Please enter your last name.").max(70),
    email: z.string().trim().email("Enter a valid email address."),
    phone: z.string().trim().max(24).optional().default(""),
    contact: z.enum(contactOptions),
    consent: z.literal(true, {
      errorMap: () => ({ message: "Please acknowledge the enquiry contact consent." }),
    }),
    updates: z.boolean().default(false),
    website: z.string().max(0).optional().default(""),
  })
  .superRefine((value, ctx) => {
    const digits = value.phone.replace(/\D/g, "");
    const required = value.contact === "Phone" || value.contact === "WhatsApp";
    const ok = (!value.phone && !required) || (digits.length >= 8 && digits.length <= 15);
    if (!ok) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: required && !value.phone
          ? "Add a phone number for your chosen response method."
          : "Enter a valid phone number, including country code.",
      });
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const experienceNames: Record<EnquiryInput["experience"], string> = {
  site: "Private site consultation",
  virtual: "Virtual design conversation",
  sustainability: "Sustainability dialogue",
  dossier: "Request project dossier",
};
