import { Account, JsonRpcProvider, MNS, OperationStatus } from "@massalabs/massa-web3";

function normalizeDomain(input) {
  const value = input.trim().toLowerCase();
  return value.endsWith(".massa") ? value.slice(0, -".massa".length) : value;
}

const secretKey = process.env.FPOM_MNS_OWNER_PK?.trim() || process.env.SECRET_KEY?.trim() || "";
const targetAddress = process.env.MASSA_WEBSITE_CONTRACT_ADDRESS?.trim() || "";
const rpcUrl = process.env.MASSA_RPC_URL?.trim() || "";
const domain = normalizeDomain(process.env.MNS_DOMAIN?.trim() || "fpom");

if (!secretKey) {
  throw new Error("Missing FPOM_MNS_OWNER_PK or SECRET_KEY.");
}

if (!targetAddress) {
  throw new Error("Missing MASSA_WEBSITE_CONTRACT_ADDRESS.");
}

const account = await Account.fromPrivateKey(secretKey);
const provider = rpcUrl ? JsonRpcProvider.fromRPCUrl(rpcUrl, account) : JsonRpcProvider.mainnet(account);
const mns = MNS.mainnet(provider);
const operation = await mns.updateTarget(domain, targetAddress);
const status = await operation.waitFinalExecution(90_000, 1_500);

if (status !== OperationStatus.Success) {
  throw new Error(`MNS update finished with unexpected status: ${OperationStatus[status] ?? status}`);
}

console.log(`Updated ${domain}.massa target to ${targetAddress} with operation ${operation.id}`);
