import { describe, expect, it } from "vitest";
import { enquirySchema } from "./enquiry-schema";

const valid = {
  experience: "virtual" as const,
  interests: ["Clean energy"],
  format: "Video call" as const,
  preferredDate: "",
  preferredTime: "Flexible" as const,
  guests: "2" as const,
  city: "Nashik",
  notes: "",
  firstName: "Asha",
  lastName: "Deshmukh",
  email: "asha@example.com",
  phone: "+91 98765 43210",
  contact: "Email" as const,
  consent: true as const,
  updates: false,
  website: "",
};

describe("enquirySchema", () => {
  it("accepts a complete valid enquiry", () => {
    const parsed = enquirySchema.parse(valid);
    expect(parsed.firstName).toBe("Asha");
    expect(parsed.updates).toBe(false);
  });

  it("rejects an empty first name", () => {
    const result = enquirySchema.safeParse({ ...valid, firstName: "  " });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = enquirySchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("requires a phone number for WhatsApp", () => {
    const result = enquirySchema.safeParse({ ...valid, contact: "WhatsApp", phone: "" });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot submissions", () => {
    const result = enquirySchema.safeParse({ ...valid, website: "http://spam.test" });
    expect(result.success).toBe(false);
  });

  it("requires contact consent", () => {
    const result = enquirySchema.safeParse({ ...valid, consent: false });
    expect(result.success).toBe(false);
  });
});
