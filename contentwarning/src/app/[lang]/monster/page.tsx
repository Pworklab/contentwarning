import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
import Image from "next/image";
import a from 'p/app/[lang]/selected.png'
import b from 'p/assets/icon.png'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  return (
    <>

    <div>
    <Image src={a} width={200} height={200} alt="fck"></Image>

    <Image src={b} width={200} height={200} alt="fck"></Image>

    </div>
    
    <section className="w-auto">
      <div className="container grid-cols-3 justify-between">
      <div className="grid-cols-3 justify-center">
        
        
      <div className=" flex w-[200px] h-[200px] bg-lefu rounded-md border-2 border-minty">
        c   
        </div>
        

        <div className=" flex w-[200px] h-[200px] bg-lefu rounded-md border-2 border-minty">
        c   
        </div>
        
        <div className=" flex w-[200px] h-[200px] bg-lefu rounded-md border-2 border-minty">
        c   
        </div>
        
      </div>


      </div>
    </section>
    
    </>
  );
}
