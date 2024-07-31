// export default function Login() {
//   return (
//     <div className="contianer">
//         <div className="contianer">
//         <div className="border-[1px_solid_#F4F0E6] bg-[#FFFBED] m-[0_0_40px_0] flex flex-col items-center p-[0_0_12px_0] w-[1680px] box-sizing-border">
//             <div className="flex flex-row box-sizing-border">
//                 <div className="bg-[#E6E6E6] m-[0_15px_0_0] w-[30px] h-[0px]">
//                 </div>
//                 <img className="m-[3px_8px_3px_0] w-[24px] h-[24px]" />
//                 <div className="opacity-60 m-[4px_0_4px_0] inline-block break-words font-['Roboto'] font-normal text-[14px] leading-[1.571] text-[var(--primary-dark-grey,#808080)]">
//                 Введите название товара или артикул
//                 </div>
//             </div>
//             </div>
//         </div>
//         <div className="rounded-[8px] border-[1px_solid_rgba(229,229,229,0.2)] bg-[#FFFFFF] relative flex flex-col items-center p-[40px_55px_30px_55px] w-[fit-content] box-sizing-border">
//             <img className="rounded-[8px] absolute top-[0px] right-[0px] w-[590px] h-[660px]" />
//             <div className="relative m-[0_590px_80px_0] inline-block break-words font-['Circe_Rounded','Roboto_Condensed'] font-bold text-[28px] tracking-[0.3px] leading-[1.429] text-[var(--primary-brown-1,#4E2D2D)]">
//             Постоянный покупатель
//             </div>
//             <div className="relative m-[0_0_114px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
//             <div className="m-[0_230px_0_0] flex flex-col items-center w-[480px] box-sizing-border">
//                 <div className="m-[0_0_20px_0] flex flex-col w-[fit-content] box-sizing-border">
//                 <div className="m-[0_0_6px_0] inline-block self-start break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[var(--primary-black-1,#292929)]">
//                 Электронная почта
//                 </div>
//                 <div className="rounded-[6px] border-[1px_solid_#E6E6E6] bg-[#FFFFFF] relative p-[13px_14px_11px_14px] w-[fit-content] box-sizing-border">
//                     <span className="break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[15px] leading-[1.6] text-[#BFBFBF]">
//                     yourname@mail.com
//                     </span>
//                 </div>
//                 </div>


//                 <div className="m-[0_0_20px_0] flex flex-col w-[fit-content] box-sizing-border">
//                 <div className="m-[0_0_6px_0] inline-block self-start break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[var(--primary-black-1,#292929)]">
//                 Ваш пароль
//                 </div>
//                 <div className="rounded-[6px] border-[1px_solid_#E6E6E6] bg-[#FFFFFF] relative p-[13px_14px_11px_14px] w-[fit-content] box-sizing-border">
//                     <span className="break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[15px] leading-[1.6] text-[#BFBFBF]">
//                     От 8 и более символов
//                     </span>
//                 </div>
//                 </div>
//                 <div className="rounded-[5px] bg-[#FD9339] relative m-[0_0_14px_0] flex p-[12px_0_12px_0] w-[480px] box-sizing-border">
//                 <span className="break-words font-['Circe_Rounded','Roboto_Condensed'] font-bold text-[16px] leading-[1.5] text-[var(--primary-white-1,#FFFFFF)]">
//                 Войти
//                 </span>
//                 </div>
//                 <div className="m-[0_0_14px_0] flex flex-row gap-[0_17.8px] w-[fit-content] box-sizing-border">
//                 <div className="opacity-50 bg-[#E6E6E6] m-[11.5px_0_11.5px_0] w-[210px] h-[0px]">
//                 </div>
//                 <span className="opacity-50 break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[var(--primary-dark-grey-1,#808080)]">
//                 или
//                 </span>
//                 <div className="opacity-50 bg-[#E6E6E6] m-[11.5px_0_11.5px_0] w-[210px] h-[0px]">
//                 </div>
//                 </div>
//                 <div className="flex flex-row w-[256px] box-sizing-border">
//                 <img className="m-[0_12px_0_0] w-[36px] h-[36px]" />
//                 <div className="m-[4px_12px_4px_0] flex w-[36px] h-[36px] box-sizing-border">
//                     <img className="w-[28px] h-[28px]" />
//                 </div>
//                 <img className="m-[0_8px_0_0] w-[36px] h-[36px]" />
//                 <img className="m-[0_8px_0_0] w-[36px] h-[36px]" />
//                 <img className="m-[0_8px_0_0] w-[36px] h-[36px]" />
//                 <img className="w-[36px] h-[36px]" />
//                 </div>
//             </div>
//             <div className="rounded-[5px] m-[58px_0_88px_0] flex flex-col items-center box-sizing-border">
//                 <div className="m-[0_0_10px_0] inline-block break-words font-['Circe_Rounded','Roboto_Condensed'] font-bold text-[28px] tracking-[0.3px] leading-[1.429] text-[var(--primary-brown-1,#4E2D2D)]">
//                 Создайте аккаунт
//                 </div>
//                 <div className="m-[0_4.2px_40px_4.2px] inline-block text-center break-words font-['Circe_Rounded','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[var(--primary-black-1,#292929)]">
//                 Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.
//                 </div>
//                 <div className="rounded-[5px] border-[1px_solid_#FD9339] relative flex p-[12px_0_12px_0] w-[240px] box-sizing-border">
//                 <span className="break-words font-['Circe_Rounded','Roboto_Condensed'] font-bold text-[16px] leading-[1.5] text-[var(--primary-orange-1,#FD9339)]">
//                 Зарегистрироваться
//                 </span>
//                 </div>
//             </div>
//             </div>
//             <span className="relative m-[0_590px_0_0] break-words font-['Circe_Rounded','Roboto_Condensed'] font-bold text-[16px] underline leading-[1.5] text-[var(--primary-orange-1,#FD9339)]">
//             Забыли пароль?
//             </span>
//         </div>
//         </div>
//   )
// }