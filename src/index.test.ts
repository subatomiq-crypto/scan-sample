import { main } from "./index";

test("decrypted string is original message", () => {
  const message = "hello world";
  expect(main(message)).toEqual(message);
});
