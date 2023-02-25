import Image from 'next/image';

import tshirt1 from '../assets/t-shirts/1.png';

export const Product = () => {
  return (
    <a
      className="
        group
        relative
        flex
        h-full
        w-full
        cursor-pointer
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        bg-gradient-to-b
        from-[#1ea483]
        to-[#7465d4]
      "
    >
      <Image src={tshirt1} width={520} height={480} alt="Camiseta 1" />

      <footer
        className="
          absolute
          inset-x-1
          bottom-1
          flex
          translate-y-[110%]
          items-center
          justify-between
          rounded-md
          bg-[rgba(0,0,0,0.7)]
          p-8
          opacity-0
          transition-all
          duration-200
          ease-in-out
          group-hover:translate-y-[0%]
          group-hover:opacity-100
        "
      >
        <strong className="text-lg">Camiseta X</strong>
        <span className="text-xl font-bold text-green-300">R$ 79,90</span>
      </footer>
    </a>
  );
};
