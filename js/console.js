

module.exports = {
  Console(state, str) {
      let whiteStr = "\033[40;37m";
      let greenStr = "\033[40;32m";
      let redStr = "\033[40;31m";
      switch (state) {
          case 'success':
              console.log(greenStr + str + whiteStr);
              break;
          case 'fail':
              console.log(redStr + str + whiteStr);
              break;
          default:
              console.log(str);
      }
  }
};