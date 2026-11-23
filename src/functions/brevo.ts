import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const subscribeInputSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter an email address.")
    .email("Please enter a valid email address (e.g., attorney@firm.com)."),
});

export type BrevoSubscribeResult =
  | { status: "success"; email: string }
  | { status: "unconfigured"; email: string; message: string }
  | { status: "duplicate"; message: string }
  | { status: "error"; message: string };

export const subscribeToBaconBits = createServerFn({ method: "POST" })
  .validator(subscribeInputSchema)
  .handler(async ({ data }): Promise<BrevoSubscribeResult> => {
    const normalizedEmail = data.email.trim().toLowerCase();
    const brevoApiKey = process.env["BREVO_API_KEY"]?.trim();
    const rawListId = process.env["BREVO_LIST_ID"]?.trim();

    if (!brevoApiKey) {
      return {
        status: "unconfigured",
        email: normalizedEmail,
        message:
          "BACON BITS subscription via Brevo is pending backend API configuration. Live subscriptions will activate once Brevo credentials are configured.",
      };
    }

    const payload: {
      email: string;
      updateEnabled: boolean;
      listIds?: number[];
    } = {
      email: normalizedEmail,
      updateEnabled: false,
    };

    if (rawListId) {
      const parsedListId = Number(rawListId);
      if (Number.isInteger(parsedListId) && parsedListId > 0) {
        payload.listIds = [parsedListId];
      }
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return {
          status: "success",
          email: normalizedEmail,
        };
      }

      let errorBody: { code?: string; message?: string } | null = null;
      try {
        errorBody = (await response.json()) as { code?: string; message?: string };
      } catch {
        errorBody = null;
      }

      if (response.status === 400 && errorBody?.code === "duplicate_parameter") {
        return {
          status: "duplicate",
          message: "This email address is already subscribed to BACON BITS.",
        };
      }

      console.error(
        `Brevo contact subscription failed with status ${response.status}`,
        errorBody?.code ?? "",
      );

      return {
        status: "error",
        message: "Unable to complete subscription at this time. Please try again later.",
      };
    } catch (error) {
      console.error("Network error submitting subscription to Brevo:", error);
      return {
        status: "error",
        message: "Network error connecting to Brevo. Please try again.",
      };
    }
  });
