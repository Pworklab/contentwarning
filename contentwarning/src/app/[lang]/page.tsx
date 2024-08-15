
import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
import Carousel from "p/components/carousel";
import 'p/app/[lang]/globals.css';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  const DATA = [
  { image: 'https://64.media.tumblr.com/c5da212785afe45cd213c76d4ac05f4b/670bee06beca26c2-48/s2048x3072/8b3bc84435fb85fe9f4bb89ef216fff5df6dd08e.pnj' },
  { image: 'https://64.media.tumblr.com/ec8bad45e46767a95378f119b3b106ef/670bee06beca26c2-b5/s2048x3072/a5e13aab8fccd0608be3973d36e4e3efa8b7d7d9.pnj' },
  { image: 'https://64.media.tumblr.com/f666dfb0f72d34f40fe5c20d6267333a/670bee06beca26c2-24/s2048x3072/9d234017b7d8efeb06a2c89f4a8201313d1d13d2.pnj' },
  { image: 'https://64.media.tumblr.com/fd34f98d44a960bc40c97eb513faa17c/670bee06beca26c2-e8/s2048x3072/7fd11ff8494f60d7e766297cdb834325905c1df2.pnj' },
]

  return (
    <>
<main className="w-auto justify-center flex-row space-y-10">

<section>
  <div className="relative h-[200px] w-full bg-noir flex justify-between items-start">
    {/* Left Navigation Button rotate-[320deg] */}  
    <div className="relative w-[50px] h-[50px] md:w-[200px] md:h-[200px]">
      <p className="suushiki-text  absolute top-6 right-3  z-10 rotate-[315deg] text-[25px] font-extrabold text-noir">{dictionary["header"].monster}</p>
      <div
        className="absolute top-0 left-0 w-0 h-0 border-r-[100px] border-t-[100px] md:border-r-[200px] md:border-t-[200px] border-r-transparent border-t-minty"
      ></div>
      {/* Clickable Area for Left Navigation */}
      <a
        href="#left"
        className="absolute top-0 left-0 block cursor-pointer w-full h-full"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)'  // Define the clip path
        }}
      ></a>
    </div>

    {/* Right Navigation Button */}
    <div className="relative w-[50px] h-[50px] md:w-[200px] md:h-[200px]">
      <div
        className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-t-[100px] md:border-l-[200px] md:border-t-[200px] border-l-transparent border-t-minty"
      ></div>
      {/* Clickable Area for Right Navigation */}
      <a
        href="#right"  // Replace with your actual link
        className="absolute top-0 right-0 block cursor-pointer w-full h-full"
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)'  // Define the clip path
        }}
      ></a>
    </div>
  </div>
</section>

  <section className="mx-7 ce">
    <div className="w-full h-fit border-2 border-minty bg-lefu">
      <div className="flex  flex-col sm:flex-row items-center">
        {/* Image Container */}
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] border-2 m-2 border-minty bg-iconshiro bg-center bg-cover hover:bg-iconkuro flex-shrink-0"></div>
         {/* Text Container */}
        <div className=" mx-2 border-2 border-minty bg-lefu max-w-fit my-2">
          <p className="text-shiro text-sm p-2">
            {dictionary["homepage"].greetings}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="flex min-h-screen flex-col items-center text-center">
      <p className="text-minty font-bold text-[40px] text-sm p-2 m-2">
            {dictionary["homepage"].memories}
      </p>
      
      <Carousel data={DATA} />
  </section>

</main>
   </>
  );
}

// first attemp not bad
/*
<div className="w-full h-[200px] border-2 border-minty bg-lefu ">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]  border-2 m-2 border-minty bg-iconshiro bg-center bg-cover hover:bg-iconkuro"></div>
      <div className="w-auto h-auto mx-2 border-2  border-minty bg-lefu ">
        <p className="text-shiro text-sm p-2">
        {dictionary["homepage"].greetings}
        </p>
      </div>
      </div>


<p className="nostalgic-text">こんにちは.漢字は対応してる vvvv</p>
<p className="imanity-text">This text uses the Imanity font.</p>
<p className="bitfont-text">This text uses the じゃっきーふぉんと font.</p>
<p className="markerbysue-text">This text uses the Markerbysue font.</p>
<p className="suushiki-text">This text uses the suushiki font.</p>


*/