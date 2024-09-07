const isMobileDevice = function () {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return 'mobile'
    } else {
      return 'desktop'
    }
  };
  
  export default isMobileDevice;