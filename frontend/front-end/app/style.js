const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-Miriam_Libre ss:text-[60px] xs:text-[45px] text-[25px] text-gold xs:leading-[46.8px] leading-[30px] text-right leading-tight",
    paragraph1: "font-Miriam_Libre text-offWhite ss:text-[20px] xs:text-[18px] text-[15px] xs:leading-[30.8px] leading-[25px]",

    heading2: "font-Miriam_Libre ss:text-[30px] xs:text-[20px] text-[10px] text-red xs:leading-[46.8px] leading-[30px] text-right leading-tight",

    heading3: "font-Miriam_Libre ss:text-[45px] xs:text-[30px] text-[25px] text-deepBlue ss:leading-[76.8px] xs:leading-[66.8px] leading[45px] w-full",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;