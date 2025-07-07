import React from "react";
import Image from "next/image";

interface VoucherProps {
  className?: string;
}

const Voucher: React.FC<VoucherProps> = ({ className }) => {
  return (
    <div
      className={`relative w-full max-w-[1078px] h-[242px] ${className || ""}`}
    >
      <Image
        src="/images/Voucher BG.png"
        alt="Voucher Background"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Voucher;
