require("dotenv")
module.exports = {
  info: {
    author: 'DarkBox',
    name_page: 'Cuenta Regresiva',
    desc: '',
    dominio: process.env.DOMINIO || 'https://countdown.mejv.pro',
    keywords: '',
    fb_app_id: '',
    version: '1.0.0'
  },
  PORT: process.env.PORT || 3000,
  DB: process.env.MONGO_URI || ''
};