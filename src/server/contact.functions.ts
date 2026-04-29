import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  occasion: z.string().trim().max(200).optional().or(z.literal("")),
  date: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const eventDate = data.date && data.date.length > 0 ? data.date : null;
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      occasion: data.occasion || null,
      event_date: eventDate,
      message: data.message,
    });

    if (error) {
      console.error("contact_messages insert failed:", error);
      return { ok: false as const, error: "Could not save your message. Please try again." };
    }

    return { ok: true as const };
  });
