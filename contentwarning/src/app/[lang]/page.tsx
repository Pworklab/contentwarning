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
    <div className="w-auto flex justify-center">
      <div className="mx-7">
      <div className="w-full h-[200px] border-2 border-minty bg-lefu ">
      <div className="w-[80px] h-[80px] border-2 m-2 border-minty bg-iconshiro bg-center bg-cover hover:bg-iconkuro">
      </div>
      <div className="w-auto h-auto mx-2 border-2  border-minty bg-lefu ">
        <p className="text-shiro text-sm p-2">
        {dictionary["homepage"].greetings}
        </p>
      </div>
      </div>
      </div>
    </div>    
   </>
  );
}