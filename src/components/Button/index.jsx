import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-bl-none rounded-br-none rounded-tl-[12px] rounded-tr-[12px]",
};
const variants = {
  fill: {
    red_A700_70: "bg-red-A700_70 text-black-900",
    black_900: "bg-black-900 shadow-bs text-white-A700",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900_01",
    gray_200_01: "bg-gray-200_01 text-gray-900_01",
  },
};
const sizes = { xs: "p-px", sm: "p-1.5", md: "p-[11px]", lg: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "fill",
  color = "gray_200_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_A700_70",
    "black_900",
    "indigo_A200",
    "white_A700",
    "gray_200_01",
  ]),
};

export { Button };
