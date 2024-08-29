"use client";

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeaderFilter from '@/app/(main)/_components/header_filter';
import HeaderAddMonitoria from '@/app/(main)/_components/header_add_monitoria';

const Header = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [IsAddVisible, setIsAddvisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleAdd = () => {
    setIsAddvisible(!IsAddVisible);
  };

  return (
    <header className="flex flex-row items-center justify-between bg-[#031229] p-2.5 px-12">
      <img src="/images/LogoBranca.png" alt="logo" className="size-24" />
      <div className="flex min-w-[551px] flex-row items-center gap-4">
        <div onClick={toggleFilter} className="cursor-pointer rounded-full bg-[#D9D9D9] p-2">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8496 17.69C25.8496 17.9605 25.7422 18.2199 25.5509 18.4112C25.3596 18.6025 25.1002 18.71 24.8296 18.71H8.50965C8.23913 18.71 7.97969 18.6025 7.7884 18.4112C7.59711 18.2199 7.48965 17.9605 7.48965 17.69C7.48965 17.4195 7.59711 17.16 7.7884 16.9687C7.97969 16.7775 8.23913 16.67 8.50965 16.67H24.8296C25.1002 16.67 25.3596 16.7775 25.5509 16.9687C25.7422 17.16 25.8496 17.4195 25.8496 17.69ZM29.9296 10.55H3.40965C3.13913 10.55 2.87969 10.6575 2.6884 10.8487C2.49711 11.04 2.38965 11.2995 2.38965 11.57C2.38965 11.8405 2.49711 12.0999 2.6884 12.2912C2.87969 12.4825 3.13913 12.59 3.40965 12.59H29.9296C30.2002 12.59 30.4596 12.4825 30.6509 12.2912C30.8422 12.0999 30.9496 11.8405 30.9496 11.57C30.9496 11.2995 30.8422 11.04 30.6509 10.8487C30.4596 10.6575 30.2002 10.55 29.9296 10.55ZM19.7296 22.79H13.6096C13.3391 22.79 13.0797 22.8974 12.8884 23.0887C12.6971 23.28 12.5896 23.5395 12.5896 23.81C12.5896 24.0805 12.6971 24.3399 12.8884 24.5312C13.0797 24.7225 13.3391 24.83 13.6096 24.83H19.7296C20.0002 24.83 20.2596 24.7225 20.4509 24.5312C20.6422 24.3399 20.7496 24.0805 20.7496 23.81C20.7496 23.5395 20.6422 23.28 20.4509 23.0887C20.2596 22.8974 20.0002 22.79 19.7296 22.79Z"
              fill="black"
            />
          </svg>
        </div>
        <Input type="text" placeholder="" className="h-14 bg-[#DCDCDC]" />
      </div>
      <div onClick={toggleAdd} className="flex flex-row items-center justify-center gap-10">
        <Button className="flex h-14 flex-row items-center gap-2.5 bg-[#E4E4E4] text-[#0C5149] hover:bg-[#E4E4E4]">
          Adicionar Monitoria
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1275_224)">
              <path
                d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476613 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9969 8.08356 20.837 5.28746 18.7748 3.22523C16.7125 1.16299 13.9164 0.00307981 11 0ZM11 20.3077C9.15911 20.3077 7.35957 19.7618 5.82893 18.7391C4.29829 17.7163 3.10529 16.2627 2.40082 14.5619C1.69634 12.8611 1.51202 10.9897 1.87116 9.18416C2.2303 7.37864 3.11677 5.72017 4.41847 4.41847C5.72018 3.11676 7.37865 2.23029 9.18416 1.87115C10.9897 1.51201 12.8611 1.69634 14.5619 2.40081C16.2627 3.10529 17.7163 4.29828 18.7391 5.82892C19.7618 7.35956 20.3077 9.15911 20.3077 11C20.3049 13.4677 19.3234 15.8335 17.5784 17.5784C15.8335 19.3234 13.4677 20.3049 11 20.3077ZM16.0769 11C16.0769 11.2244 15.9878 11.4396 15.8291 11.5983C15.6704 11.757 15.4552 11.8462 15.2308 11.8462H11.8462V15.2308C11.8462 15.4552 11.757 15.6704 11.5983 15.8291C11.4396 15.9878 11.2244 16.0769 11 16.0769C10.7756 16.0769 10.5604 15.9878 10.4017 15.8291C10.243 15.6704 10.1538 15.4552 10.1538 15.2308V11.8462H6.76923C6.54482 11.8462 6.3296 11.757 6.17091 11.5983C6.01223 11.4396 5.92308 11.2244 5.92308 11C5.92308 10.7756 6.01223 10.5604 6.17091 10.4017C6.3296 10.243 6.54482 10.1538 6.76923 10.1538H10.1538V6.76923C10.1538 6.54482 10.243 6.32959 10.4017 6.17091C10.5604 6.01222 10.7756 5.92308 11 5.92308C11.2244 5.92308 11.4396 6.01222 11.5983 6.17091C11.757 6.32959 11.8462 6.54482 11.8462 6.76923V10.1538H15.2308C15.4552 10.1538 15.6704 10.243 15.8291 10.4017C15.9878 10.5604 16.0769 10.7756 16.0769 11Z"
                fill="#0C5149"
              />
            </g>
            <defs>
              <clipPath id="clip0_1275_224">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <Avatar className="size-16">
          <AvatarImage
            src="https://github.com/sammyferreiraa.png"
            alt="@sammyferreiraa"
          />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>
      </div>
      {isFilterVisible && <HeaderFilter onClose={toggleFilter} />}
      {IsAddVisible && <HeaderAddMonitoria onClose={toggleAdd}/>}
    </header>
  );
};

export default Header;