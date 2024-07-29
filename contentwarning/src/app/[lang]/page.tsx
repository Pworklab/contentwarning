import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";

import b from 'p/assets/icon.png'

import Image from "next/image";
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
      {/*mobile view*/}
      <div className="w-[300px] h-[200px] border-2 border-minty bg-lefu ">
      <div className="w-[80px] h-[80px] border-2 m-2 border-minty bg-test object-cover">
      <Image src={b} width={200} height={200} alt="fck" className="object-cover"></Image>

      </div>
      <div className="w-auto h-[90px] mx-2 border-2  border-minty bg-lefu ">
        <a className="text-shiro text-sm p-2">
        {dictionary["homepage"].greetings}
         aaa
         </a>
      </div>
      </div>
    </div>    
    </>
  );
}
//public\images\hiddenicon.png
//public\HeaderIcons\selected.png
///HeaderIcons/notselected.png
// introduction こんばんは

/*

*/

/*

    <div>
   <div className="text-amber-600">hello</div>
   {dictionary["server-component"].welcome}
    </div>
*/
