export const detectOs = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // android users
    return 'android';
  } else {
    // other users
    return 'any';
  }
};