import { main } from "./index";

test("decrypted string is original message", async () => {
  const message = "hello world";
  expect(await main(message)).toEqual(message);
});
