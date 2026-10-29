# CRM / enquiry integration spec

Current mode: **demo**. `project.demoMode` is `true` in `data/project.ts`. `POST /api/enquiries` validates with Zod and returns:

> Demo request prepared; not sent. No information was transmitted or stored remotely.

## Production wiring (do not invent credentials)

1. Set `demoMode` to `false` only after a named recipient, privacy notice and legal review exist.
2. Keep SMTP/CRM secrets in server environment variables — never in the client.
3. Persist only after server-side validation of `enquirySchema` (`lib/enquiry-schema.ts`).
4. Required fields: experience, format, first/last name, email, enquiry consent. Phone required if contact channel is Phone or WhatsApp.
5. Store consent timestamp, optional marketing opt-in separately, and a retention period.
6. Rate-limit the route; keep the honeypot field `website`.
7. Idempotency: reject duplicate posts of the same email+experience within a short window.
8. Notify only approved recipients. Do not auto-confirm a site visit.
9. Success copy must change from “Demo request prepared; not sent” to “Enquiry received” only when the record is actually persisted or delivered.
10. India DPDP / RERA review is required before public launch. This build does not claim either.

No CRM, mailbox or database is configured in this repository.
