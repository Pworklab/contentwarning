import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  return (
    <div>
   <div className="text-amber-600">hello</div>
   {dictionary["server-component"].welcome}
    </div>
  );
}