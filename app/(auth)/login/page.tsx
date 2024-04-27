import LoginScreen from "@/screens/auth/LoginScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "EMaps Login page",
};
export default async function Page() {
  return (
    <>
      <LoginScreen />
    </>
  );
}
