import crypto from "crypto";

const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

const rsaOptions = {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
};

export const main = (message: string): string => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync(
    "rsa",
    rsaOptions
  );

  const messageBuffer: Uint8Array = encoder.encode(message);

  const ct = crypto.publicEncrypt(publicKey, messageBuffer);
  const d = crypto.privateDecrypt(privateKey, ct);

  return decoder.decode(d);
};
