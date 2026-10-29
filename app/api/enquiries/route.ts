import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";
import { project } from "@/data/project";

export async function POST(request: Request) {
  if (!project.demoMode) {
    return NextResponse.json(
      { ok: false, message: "Live enquiry delivery is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Demo request prepared; not sent." });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    message: "Demo request prepared; not sent. No information was transmitted or stored remotely.",
  });
}
