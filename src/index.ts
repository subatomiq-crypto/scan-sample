import ntru from "@subatomiq/ntru";

const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

const rsaOptions = {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
};

export const main = async (message: string): Promise<string> => {
  const crypto = await ntru();
  const { publicKey, privateKey } = await crypto.keyPair();

  const messageBuffer: Uint8Array = encoder.encode(message);

  const ct = await crypto.encrypt(messageBuffer, publicKey);
  const d = await crypto.decrypt(ct, privateKey);

  return decoder.decode(d);
};
