import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-yTfeHp1H.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brevo-ALyBHGdw.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var subscribeInputSchema = objectType({ email: stringType().trim().min(1, "Please enter an email address.").email("Please enter a valid email address (e.g., attorney@firm.com).") });
var subscribeToBaconBits_createServerFn_handler = createServerRpc({
	id: "2c27b57f3bd397c4dedc0a831fedafe7951bb1d354dd1069a01529a497ab6a20",
	name: "subscribeToBaconBits",
	filename: "src/functions/brevo.ts"
}, (opts) => subscribeToBaconBits.__executeServer(opts));
var subscribeToBaconBits = createServerFn({ method: "POST" }).validator(subscribeInputSchema).handler(subscribeToBaconBits_createServerFn_handler, async ({ data }) => {
	const normalizedEmail = data.email.trim().toLowerCase();
	const brevoApiKey = process.env["BREVO_API_KEY"]?.trim();
	const rawListId = process.env["BREVO_LIST_ID"]?.trim();
	if (!brevoApiKey) return {
		status: "unconfigured",
		email: normalizedEmail,
		message: "BACON BITS subscription via Brevo is pending backend API configuration. Live subscriptions will activate once Brevo credentials are configured."
	};
	const payload = {
		email: normalizedEmail,
		updateEnabled: false
	};
	if (rawListId) {
		const parsedListId = Number(rawListId);
		if (Number.isInteger(parsedListId) && parsedListId > 0) payload.listIds = [parsedListId];
	}
	try {
		const response = await fetch("https://api.brevo.com/v3/contacts", {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				"api-key": brevoApiKey
			},
			body: JSON.stringify(payload)
		});
		if (response.ok) return {
			status: "success",
			email: normalizedEmail
		};
		let errorBody = null;
		try {
			errorBody = await response.json();
		} catch {
			errorBody = null;
		}
		if (response.status === 400 && errorBody?.code === "duplicate_parameter") return {
			status: "duplicate",
			message: "This email address is already subscribed to BACON BITS."
		};
		console.error(`Brevo contact subscription failed with status ${response.status}`, errorBody?.code ?? "");
		return {
			status: "error",
			message: "Unable to complete subscription at this time. Please try again later."
		};
	} catch (error) {
		console.error("Network error submitting subscription to Brevo:", error);
		return {
			status: "error",
			message: "Network error connecting to Brevo. Please try again."
		};
	}
});
//#endregion
export { subscribeToBaconBits_createServerFn_handler };
