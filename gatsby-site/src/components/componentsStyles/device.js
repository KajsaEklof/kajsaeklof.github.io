// Setting sizes for Styled Components CSS media queries

const size = {
    mobile: '999px', 
    desktop: '1000px'
  };

  export const device = {
    mobile: `(max-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`
  };
