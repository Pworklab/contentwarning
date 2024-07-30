import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  return (
    <>    
    <section className="w-auto">
     

     </section>
    
    </>
  );
}
