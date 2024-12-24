import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getBiryaniData = async () => {
  const res = await client.fetch(
    `*[_type == "biryani"]{title, description, price, image}`
  );
  return res;
};
interface i {
  title: string;
  description: string;
  price: number;
  image: IImage;
}
export default async function Home() {
  const data: i[] = await getBiryaniData();
  console.log(data);
  return (
    <div className="border-2 border-red-800 w-[50%]  m-auto rounded-lg">
      <h1 className="text-center text-[3rem] mt-2">Hello World</h1>
      {data.map((items: i, index: number) => {
        return (
          <div
            className=" flex flex-col items-center justify-center"
            key={index}
          >
            <Image
              className="rounded-md h-[200px] w-[400px]"
              src={urlForImage(items.image).url()}
              alt={items.title}
              height={200}
              width={400}
            />
            <h1 className="text-[3rem] text-green-600">{items.title}</h1>
            <h1 className="text-[3rem] text-green-600">
              price : {items.price}
            </h1>
            <h1 className="text-[3rem] text-green-700">{items.description}</h1>
          </div>
        );
      })}
    </div>
  );
}
