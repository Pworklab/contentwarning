import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
import Carousel from "p/components/carousel";
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
      <section className="mx-7">
      <div className="w-full h-[200px] border-2 border-minty bg-lefu ">
      <div className="w-[80px] h-[80px] border-2 m-2 border-minty bg-iconshiro bg-center bg-cover hover:bg-iconkuro">
      </div>
      <div className="w-auto h-auto mx-2 border-2  border-minty bg-lefu ">
        <p className="text-shiro text-sm p-2">
        {dictionary["homepage"].greetings}
        </p>
      </div>
      </div>
      </section>
     
      <section className="flex min-h-screen flex-col items-center text-center">
      <Carousel data={DATA} />
      </section>
     
      </main>
   </>
  );
}