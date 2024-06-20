import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/utils/data";

const Footer = () => (
  <footer className='flex h-dvh px-10 py-3 flex-col justify-between border-t border-muted'>
    <div className="flex gap-10 pt-32 ">
      {footerLinks.map((item) => (
        <div key={item.title} className="float-right">
          <h3 className="font-bold">{item.title}</h3>
          <div className="flex flex-col gap-1">
            {item.links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="desc"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className='flex justify-between items-end flex-wrap'>
      <div className='flex pt-36 flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='desc'>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      <div className="flex gap-3 ">
        <Link href="/" className="desc">
          Privacy & Policy
        </Link>
        <Link href="/" className="desc">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;