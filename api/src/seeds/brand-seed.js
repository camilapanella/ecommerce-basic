const { Brand } = require("../db");

const addBrands = async () => {
  const types = [
    {
      name: "JBL",
      logo_url:
        "https://logodownload.org/wp-content/uploads/2016/10/jbl-logo-6-1.png",
    },
    {
      name: "Apple",
      logo_url:
        "https://w7.pngwing.com/pngs/566/77/png-transparent-apple-logo-apple-watch-logo-apple-logo-heart-logo-computer-wallpaper.png",
    },
    {
      name: "Logitech",
      logo_url:
        "https://w7.pngwing.com/pngs/11/407/png-transparent-logitech-logo-icon.png",
    },
    {
      name: "Samsung",
      logo_url:
        "https://1000marcas.net/wp-content/uploads/2019/12/logo-Samsung.png",
    },
    {
      name: "Motorola",
      logo_url:
        "https://1000marcas.net/wp-content/uploads/2020/01/Motorola-Logo-.png",
    },
    {
      name: "Huawey",
      logo_url:
        "https://style.shockvisual.net/wp-content/uploads/2019/09/huawei-logo.jpg",
    },
  ];

  const newList = await Brand.bulkCreate(types);
  return newList;
};

module.exports = addBrands;
