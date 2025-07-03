import React from "react";

const sizeClasses = {
  txtInterMedium14Gray20003: "font-inter font-medium",
  txtPoppinsBold20Gray50003: "font-bold font-poppins",
  txtPoppinsBold20Pink500: "font-bold font-poppins",
  txtDMSansMedium30: "font-dmsans font-medium",
  txtInterMedium21: "font-inter font-medium",
  txtBarlowMedium20: "font-barlow font-medium",
  txtCairoRegular32: "font-cairo font-normal",
  txtInterBold24: "font-bold font-inter",
  txtBarlowLight12: "font-barlow font-light",
  txtBarlowMedium16IndigoA700: "font-barlow font-medium",
  txtHelveticaNeueMedium20: "font-helveticaneue font-medium",
  txtCairoBold24Bluegray70001: "font-bold font-cairo",
  txtCairoSemiBold15: "font-cairo font-semibold",
  txtPoppinsBold20IndigoA700: "font-bold font-poppins",
  txtCairoBold20Black900: "font-bold font-cairo",
  txtInterMedium14Red600: "font-inter font-medium",
  txtInterMedium20GreenA700: "font-inter font-medium",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtCairoMedium24: "font-cairo font-medium",
  txtCairoBold40: "font-bold font-cairo",
  txtNunitoRegular12: "font-normal font-nunito",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtCairoRegular22: "font-cairo font-normal",
  txtCairoRegular25: "font-cairo font-normal",
  txtCairoRegular24: "font-cairo font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14GreenA700: "font-inter font-medium",
  txtCairoRegular20: "font-cairo font-normal",
  txtInterMedium15: "font-inter font-medium",
  txtCairoSemiBold20: "font-cairo font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium20: "font-inter font-medium",
  txtCairoSemiBold24: "font-cairo font-semibold",
  txtCairoRegular20WhiteA700: "font-cairo font-normal",
  txtCairoExtraBold30: "font-cairo font-extrabold",
  txtCairoRegular18: "font-cairo font-normal",
  txtHelveticaBold17: "font-bold font-helvetica",
  txtCairoRegular14: "font-cairo font-normal",
  txtBarlowLight12IndigoA700: "font-barlow font-light",
  txtCairoBold30: "font-bold font-cairo",
  txtHelveticaBold16: "font-bold font-helvetica",
  txtCairoBold34: "font-bold font-cairo",
  txtCairoExtraBold25: "font-cairo font-extrabold",
  txtHelveticaNeueBold30: "font-bold font-helveticaneue",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtHelveticaBold20: "font-bold font-helvetica",
  txtBarlowMedium20Gray20005: "font-barlow font-medium",
  txtBarlowMedium16: "font-barlow font-medium",
  txtCairoBold20: "font-bold font-cairo",
  txtPoppinsBold20: "font-bold font-poppins",
  txtCairoBold24: "font-bold font-cairo",
  txtRobotoRegular12: "font-normal font-roboto",
  txtCairoBold16: "font-bold font-cairo",
  txtHelveticaNeueBold24: "font-bold font-helveticaneue",
  txtInterMedium20Red600: "font-inter font-medium",
  txtCairoSemiBold40: "font-cairo font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
