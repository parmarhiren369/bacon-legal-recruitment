//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Ccs42NPs.js
var manifest = { "2c27b57f3bd397c4dedc0a831fedafe7951bb1d354dd1069a01529a497ab6a20": {
	functionName: "subscribeToBaconBits_createServerFn_handler",
	importer: () => import("./_ssr/brevo-ALyBHGdw.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
