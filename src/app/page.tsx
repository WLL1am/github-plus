import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";


export default async function Home() {
  return <Button onClick={redirect("/dashboard")}>Click me</Button>
}
