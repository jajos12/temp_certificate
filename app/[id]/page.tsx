"use client";
import Link from "next/link";
import Image from "next/image";
import downloadPDF from "../utils/downloadPdf";
const page = ({ params }: { params: { id: string } }) => {
  const Name = params.id
    .replaceAll("_", " ")
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    downloadPDF(
      `@/certificates_and_mega/${Name.split(" ")[0].toLocaleLowerCase()}.pdf`,
      `${Name.split(" ")[0]}'s Certificate.pdf`
    );
  };
  return (
    <>
      <section className="flex flex-col gap-12 p-10 items-center bg-black text-white">
        {/* Header and logo */}
        <div className="flex justify-center items-center flex-col gap-3">
          <Image src="Logo.svg" alt="logo" width={120} height={40} />
          <h1 className="text-3xl font-extrabold">
            <span className="text-[#ffba07]">Yotor</span> Academy
          </h1>
        </div>
        {/* about the student */}
        <div className="flex flex-col justify items-center-between gap-5 lg:flex-row">
          <div className="flex flex-col gap-6">
            <Image
              src={`/certificates/${Name.split(
                " "
              )[0].toLocaleLowerCase()}.png`}
              alt="certification"
              width={500}
              height={500}
            />
            <h2 className="text-xl text-center text-[#45c245] hover:border-b-2 hover:border-[#47db47] transition duration-200 delay-75 ease-in-out">
              <button
                onClick={(e) => handleDownload(e)}
                className="text-[#ffba07] font-bold"
              >
                {Name}
                {`'s`} Certificate
              </button>
            </h2>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center p-4">
            <h3 className="text-nowrap">
              Meet{" "}
              <span className="text-lg font-mono text-[#ffba07]">{Name}</span>
            </h3>
            <div className="flex gap-10">
              <Image src="Github.svg" alt="github" width={40} height={40} />
              <Image src="Linkedin.svg" alt="linkedin" width={40} height={40} />
            </div>
          </div>
          <div>
            <Image
              src={`/certificates_and_mega/${Name.split(
                " "
              )[0].toLocaleLowerCase()}Mega.png`}
              alt="mega_project"
              width={500}
              height={500}
            />
            <h2 className="font-medium ">
              The last version of the{" "}
              <Link href="https://ruthless134.github.io/YotorFinal/">
                <span className="text-[#45c245] font-mono">mega project</span>{" "}
              </Link>
              <span className="text-[#ffba07] font-semibold">{Name}</span> has
              done!
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-">
          <h1 className="text-xl font-bold text-[#45ef45] text-center">
            Further Information
          </h1>
          <p className="font-sans text-gray-300">
            Through Out the two month boot-camp, Ruth has learned about the
            fundamentals web development through the well organized courses on
            the following topics:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="html.svg"
              alt="html"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold text-[#f80c0c]">HTML</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="css.svg"
              alt="css"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold text-[#0099e5]">CSS</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="bootstrap.svg"
              alt="bootstrap"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold text-[#6610f2]">Bootstrap</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="javascript.svg"
              alt="javascript"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold text-[#e0cf11]">Javascript</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="git.svg"
              alt="git"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl text-[#3E2C00]">Version Control(Git)</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="jquery.svg"
              alt="jquery"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold text-[#0769ad]">Jquery</h1>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[#ffba07] text-2xl font-semibold underline decoration-[#45ef45] text-center">
            Contact Us
          </h1>
          <div className="flex gap-8">
            <Link
              href="https://youtube.com/@yotor-w3f?si=Ngt_ddQgAOxum023"
              target="_blank"
            >
              <Image src="youtube.svg" alt="" width={50} height={50} />
            </Link>
            <Link href="https://www.facebook.com/yotor.381964" target="_blank">
              <Image src="facebook.svg" alt="" width={50} height={50} />
            </Link>
            <Link href="" target="_blank">
              <Image src="telegram.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="https://x.com/yotorcoder/status/1818629927975157922?t=uuRau2bxgmb-rpKHHWNJPg&s=19"
              target="_blank"
            >
              <Image src="twitter.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="https://www.tiktok.com/@yotor934?_t=8oI7atl32Mo&_r=1"
              target="_blank"
            >
              <Image src="tiktok.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/yotor-acadamy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BG6c7tiDCSUCX09YJ5WEYMQ%3D%3D"
              target="_blank"
            >
              <Image src="Linkedin.svg" alt="" width={50} height={50} />
            </Link>
          </div>
        </div>
        <p className="text-center text-[10px]">
          &#64; 2024 Yotor, All rights reserved
        </p>
      </section>
    </>
  );
};

export default page;
