export const DEVICE_BREAKPOINTS = {
  XS: "320px",
  SM: "425px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
};

export const DEVICE_TYPE = {
  MOBILE: `(max-width: ${DEVICE_BREAKPOINTS.MD})`,
  DESKTOP: `(max-width: ${DEVICE_BREAKPOINTS.LG})`,
};
