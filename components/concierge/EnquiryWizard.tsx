"use client";

import { useMemo, useState } from "react";
import {
  contactOptions,
  enquirySchema,
  experienceNames,
  experiences,
  formatOptions,
  guestOptions,
  interestOptions,
  timeOptions,
  type EnquiryInput,
} from "@/lib/enquiry-schema";

const steps = [
  { title: "How would you like to connect?", lead: "Tell us what sparked your interest.", label: "Your interest" },
  { title: "Your ideal arrangement.", lead: "Share timing and how you would prefer to connect.", label: "Your preferences" },
  { title: "A way to reach you.", lead: "Only the essentials. A private introduction should stay personal.", label: "Contact details" },
  { title: "One last look.", lead: "Review your details before completing the demo enquiry.", label: "Review" },
];

type Draft = Omit<EnquiryInput, "consent"> & { consent: boolean };

const empty: Draft = {
  experience: "site",
  interests: [],
  format: "In-person",
  preferredDate: "",
  preferredTime: "Flexible",
  guests: "1",
  city: "",
  notes: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contact: "Email",
  consent: false,
  updates: false,
  website: "",
};

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function EnquiryWizard({ initialExperience }: { initialExperience?: EnquiryInput["experience"] }) {
  const seed = experiences.find((item) => item.id === initialExperience);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Draft>({
    ...empty,
    experience: seed?.id ?? "site",
    format: seed?.defaultFormat ?? "In-person",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Draft, string>>>({});
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [serverNote, setServerNote] = useState("");

  const patch = (partial: Partial<Draft>) => setData((prev) => ({ ...prev, ...partial }));

  const chooseExperience = (id: EnquiryInput["experience"]) => {
    const item = experiences.find((entry) => entry.id === id)!;
    patch({ experience: id, format: item.defaultFormat });
    setStep(1);
    document.getElementById("concierge-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateContact = () => {
    const parsed = enquirySchema.safeParse(data);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const next: Partial<Record<keyof EnquiryInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof EnquiryInput;
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
    return false;
  };

  const summary = useMemo(
    () => [
      ["Experience", experienceNames[data.experience]],
      ["Interests", data.interests.join(", ") || "No specific preference"],
      ["Format", data.format],
      ["Preferred date", data.preferredDate || "Flexible"],
      ["Time", data.preferredTime],
      ["Guests", data.guests],
      ["Name", `${data.firstName} ${data.lastName}`.trim() || "—"],
      ["Email", data.email || "—"],
      ["Phone", data.phone || "Not provided"],
      ["Reply via", data.contact],
      ["City", data.city || "Not provided"],
      ["Notes", data.notes || "None"],
      ["Project updates", data.updates ? "Yes, opted in" : "No"],
    ],
    [data],
  );

  const submit = async () => {
    if (!validateContact()) {
      setStep(3);
      return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setServerNote(json.message ?? "Demo request prepared; not sent.");
      setDone(true);
    } catch {
      setServerNote("The demo adapter could not be reached. Nothing was stored remotely.");
      setDone(true);
    } finally {
      setBusy(false);
    }
  };

  const download = () => {
    const text = [
      "TRANSFORMATIVE LIVING - DEMO ENQUIRY SUMMARY",
      "Masrul, Nashik | Interactive prototype only",
      "NOT SUBMITTED OR BOOKED",
      "",
      ...summary.map(([k, v]) => `${k}: ${v}`),
      "",
      "This is a local summary for demonstration, not an appointment confirmation.",
    ].join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transformative-living-demo-enquiry.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {experiences.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => chooseExperience(item.id)}
            className={`min-h-[240px] border bg-ivory p-6 text-left transition hover:-translate-y-0.5 ${data.experience === item.id ? "border-gold" : "border-pine/10"}`}
          >
            <span className="font-serif text-2xl text-gold">0{index + 1}</span>
            <h3 className="mt-8 font-serif text-[1.7rem] leading-tight text-sage">{item.title}</h3>
            <p className="mt-3 text-[12px] leading-6 text-muted">{item.summary}</p>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-pine">Express interest</p>
          </button>
        ))}
      </div>

      <div id="concierge-form" className="mt-16 scroll-mt-28 grid overflow-hidden bg-ivory shadow-quiet lg:grid-cols-[0.42fr_0.58fr]">
        <aside className="relative min-h-[280px] bg-pine text-ivory">
          <div className="absolute inset-0 bg-[url('/media/images/interior-courtyard.jpg')] bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between p-8">
            <p className="text-[10px] uppercase tracking-[0.22em]">A more personal way to begin</p>
            <div>
              <h3 className="font-serif text-5xl leading-none">A space for possibility.</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#e2e9df]">
                Share what matters. The first conversation can be shaped around that — when a live team exists.
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-[#dce2d7]">
                Representative architecture photography · Not project imagery
              </p>
            </div>
          </div>
        </aside>

        <div className="p-6 md:p-10">
          {done ? (
            <div>
              <p className="kicker text-pine-soft">Your preview is complete</p>
              <h3 className="mt-3 font-serif text-5xl text-sage">A considered beginning.</h3>
              <p className="mt-5 text-sm leading-8 text-muted">
                Your enquiry journey has been completed in this prototype. In a live website, this is where a team would acknowledge a request.
              </p>
              <p className="mt-6 border-l-2 border-gold bg-[#f7f0e3] px-4 py-3 text-[13px] text-[#756449]">
                <strong>Demo only:</strong> {serverNote} Nothing was transmitted to a CRM, stored on a remote server, or booked.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="text-[11px] font-bold uppercase tracking-[0.12em] text-pine" onClick={() => { setDone(false); setStep(1); setData({ ...empty, consent: false }); }}>
                  Start again
                </button>
                <button type="button" className="border border-pine px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em]" onClick={download}>
                  Save demo summary
                </button>
              </div>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                if (step === 4) void submit();
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="kicker text-pine-soft">Private concierge · enquiry</p>
                  <h3 className="mt-3 font-serif text-4xl leading-none text-sage">{steps[step - 1].title}</h3>
                </div>
                <span className="border border-[#e6d7bd] bg-[#f6f0e4] px-2 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[#8e7147]">
                  Demo mode
                </span>
              </div>
              <p className="mt-4 text-[13px] leading-7 text-muted">{steps[step - 1].lead}</p>
              <div className="mt-6 flex gap-1.5" aria-hidden>
                {steps.map((_, i) => (
                  <span key={i} className={`h-0.5 flex-1 ${i < step ? "bg-gold" : "bg-[#e4e6dd]"}`} />
                ))}
              </div>
              <div className="mb-6 mt-2 flex justify-between text-[10px] uppercase tracking-[0.12em] text-[#7a897d]">
                <span>Step 0{step} of 04</span>
                <span>{steps[step - 1].label}</span>
              </div>

              {step === 1 ? (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">I am interested in *</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2" role="radiogroup">
                    {experiences.map((item) => (
                      <label key={item.id} className={`relative block min-h-[88px] cursor-pointer border p-4 ${data.experience === item.id ? "border-pine bg-[#edf2ec]" : "border-[#dce0d7]"}`}>
                        <input
                          type="radio"
                          className="sr-only"
                          name="experience"
                          checked={data.experience === item.id}
                          onChange={() => chooseExperience(item.id)}
                        />
                        <strong className="block text-[12px]">{item.title}</strong>
                        <small className="mt-1 block text-[10px] text-[#718074]">{item.defaultFormat}</small>
                      </label>
                    ))}
                  </div>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">What interests you most?</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {interestOptions.map((item) => {
                      const on = data.interests.includes(item);
                      return (
                        <label key={item} className="cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={on}
                            onChange={() =>
                              patch({
                                interests: on ? data.interests.filter((v) => v !== item) : [...data.interests, item],
                              })
                            }
                          />
                          <span className={`block border px-3 py-2 text-[11px] ${on ? "border-pine bg-pine text-white" : "border-[#d8ddd3]"}`}>
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">Preferred conversation format</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2" role="radiogroup">
                    {formatOptions.map((item) => (
                      <label key={item} className={`block min-h-[72px] cursor-pointer border p-4 ${data.format === item ? "border-pine bg-[#edf2ec]" : "border-[#dce0d7]"}`}>
                        <input type="radio" className="sr-only" checked={data.format === item} onChange={() => patch({ format: item })} />
                        <strong className="text-[12px]">{item}</strong>
                      </label>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      Preferred date <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
                      <input type="date" min={todayISO()} value={data.preferredDate} onChange={(e) => patch({ preferredDate: e.target.value })} className="mt-2 min-h-12 w-full border border-[#d7dcd2] bg-[#fffefa] px-3" />
                    </label>
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      Preferred time
                      <select value={data.preferredTime} onChange={(e) => patch({ preferredTime: e.target.value as EnquiryInput["preferredTime"] })} className="mt-2 min-h-12 w-full border border-[#d7dcd2] bg-[#fffefa] px-3">
                        {timeOptions.map((item) => <option key={item}>{item}</option>)}
                      </select>
                    </label>
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      Number of guests
                      <select value={data.guests} onChange={(e) => patch({ guests: e.target.value as EnquiryInput["guests"] })} className="mt-2 min-h-12 w-full border border-[#d7dcd2] bg-[#fffefa] px-3">
                        {guestOptions.map((item) => <option key={item}>{item}</option>)}
                      </select>
                    </label>
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      Your city
                      <input value={data.city} maxLength={90} onChange={(e) => patch({ city: e.target.value })} className="mt-2 min-h-12 w-full border border-[#d7dcd2] bg-[#fffefa] px-3" placeholder="e.g. Nashik" />
                    </label>
                  </div>
                  <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                    Anything you would like us to know?
                    <textarea value={data.notes} maxLength={450} onChange={(e) => patch({ notes: e.target.value })} className="mt-2 min-h-24 w-full border border-[#d7dcd2] bg-[#fffefa] px-3 py-2" />
                  </label>
                  <p className="mt-4 border-l-2 border-gold bg-[#eef2eb] px-4 py-3 text-[12px] leading-6 text-[#546658]">
                    These are preferences, not live calendar slots. A consultation is only confirmed after a team responds.
                  </p>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      First name *
                      <input value={data.firstName} onChange={(e) => patch({ firstName: e.target.value })} className={`mt-2 min-h-12 w-full border bg-[#fffefa] px-3 ${errors.firstName ? "border-error" : "border-[#d7dcd2]"}`} />
                      {errors.firstName ? <span className="mt-1 block text-[11px] text-error">{errors.firstName}</span> : null}
                    </label>
                    <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                      Last name *
                      <input value={data.lastName} onChange={(e) => patch({ lastName: e.target.value })} className={`mt-2 min-h-12 w-full border bg-[#fffefa] px-3 ${errors.lastName ? "border-error" : "border-[#d7dcd2]"}`} />
                      {errors.lastName ? <span className="mt-1 block text-[11px] text-error">{errors.lastName}</span> : null}
                    </label>
                  </div>
                  <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                    Email address *
                    <input type="email" value={data.email} onChange={(e) => patch({ email: e.target.value })} className={`mt-2 min-h-12 w-full border bg-[#fffefa] px-3 ${errors.email ? "border-error" : "border-[#d7dcd2]"}`} />
                    {errors.email ? <span className="mt-1 block text-[11px] text-error">{errors.email}</span> : null}
                  </label>
                  <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">
                    Phone number
                    <input type="tel" value={data.phone} onChange={(e) => patch({ phone: e.target.value })} className={`mt-2 min-h-12 w-full border bg-[#fffefa] px-3 ${errors.phone ? "border-error" : "border-[#d7dcd2]"}`} placeholder="+91 98765 43210" />
                    {errors.phone ? <span className="mt-1 block text-[11px] text-error">{errors.phone}</span> : null}
                  </label>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-[#435547]">Preferred response channel</p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {contactOptions.map((item) => (
                      <label key={item} className={`block cursor-pointer border px-3 py-3 text-center text-[12px] font-bold ${data.contact === item ? "border-pine bg-[#edf2ec]" : "border-[#dce0d7]"}`}>
                        <input type="radio" className="sr-only" checked={data.contact === item} onChange={() => patch({ contact: item })} />
                        {item}
                      </label>
                    ))}
                  </div>
                  <label className="mt-5 flex items-start gap-3 text-[11px] leading-6 text-[#65746a]">
                    <input type="checkbox" className="mt-1 accent-pine" checked={data.consent} onChange={(e) => patch({ consent: e.target.checked })} />
                    <span>I agree that the project team may use my contact information to respond to this enquiry. Required for a real submission. *</span>
                  </label>
                  {errors.consent ? <p className="mt-1 text-[11px] text-error">{errors.consent}</p> : null}
                  <label className="mt-3 flex items-start gap-3 text-[11px] leading-6 text-[#65746a]">
                    <input type="checkbox" className="mt-1 accent-pine" checked={data.updates} onChange={(e) => patch({ updates: e.target.checked })} />
                    <span>I would also like occasional project updates when official information becomes available. Optional.</span>
                  </label>
                  <div aria-hidden className="hidden">
                    <input tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => patch({ website: e.target.value })} />
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div>
                  <div className="border border-[#e1e5dc] bg-[#f5f6f0] p-4">
                    {summary.map(([key, value]) => (
                      <div key={key} className="grid grid-cols-[37%_63%] gap-3 border-b border-[#e1e5dc] py-2.5 text-[12px] last:border-0">
                        <span className="text-[#7c8a7e]">{key}</span>
                        <span className="font-semibold break-words">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 border-l-2 border-gold bg-[#eef2eb] px-4 py-3 text-[12px] leading-6 text-[#546658]">
                    Selecting “Complete demo enquiry” does not send data, book a consultation, or notify a sales team.
                  </p>
                </div>
              ) : null}

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#e5e8df] pt-6">
                {step > 1 ? (
                  <button type="button" className="text-[11px] font-bold uppercase tracking-[0.12em] text-pine" onClick={() => setStep((s) => s - 1)}>
                    Back
                  </button>
                ) : (
                  <span className="text-[11px] text-muted">Takes about 2 minutes</span>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    className="bg-pine px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-ivory"
                    onClick={() => {
                      if (step === 3 && !validateContact()) return;
                      setStep((s) => s + 1);
                    }}
                  >
                    {step === 3 ? "Review details" : "Continue"}
                  </button>
                ) : (
                  <button type="submit" disabled={busy} className="bg-pine px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-ivory disabled:opacity-60">
                    {busy ? "Preparing…" : "Complete demo enquiry"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
