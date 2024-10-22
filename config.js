//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2250574901688";
global.owner = process.env.OWNER_NUMBER || "2250546526324";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5uMENiZlI3d2dSd0hUb1dZY00zUEhTdjk4d2RmcnVCMlFSNDNRakduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkEreFNsRXM2ekVqR1psSUVSeFBra0J3UXpycGRQb3RVMUdDdlVGSFdqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0M5dTFXWjJWK3U0L2ZLOEtVSFNjdUFGTEQ5aW56T1dibVFLeit4djJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrK1NUT2NhZDlHR3JETG85RGRQbXlDVTZDMEwrdkxKblg4dGVwNVc3NUVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCdnJHR1NnRVhudzZnSGpZVkNmUVZrUldLQTBFeUlCY1NBZGtTaCsyWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg2aEw3a3BXV1hmVXp4WmdpVkhsWEFxellXcDhOdVFGVnRiTGFDUlIxQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RQZXlTamNVYVZMRjVFK3F5M3RVOWlnemgxYmV5MUtmTFJRWUR3U3RXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk5uUXhSUUpkS0lwcnEvbXM2ZmpHYm5DWk1wejNuMWxxdG9aeHQxc25VOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJlS0M2U2pyV284ejRnNjZMQk9udmN5ejJVQ3RZSzZnTmpWTDdwVkt2VmEzeDdjUm9YQ1YwN1BpUzhCTm5mcU92T3l3T2R2TzlGOFlkaEQzRHNnQURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJQOXBGMWprdHZCZ3FwOXpJL29BNngzVDg1a3VZTUN0Z25waVFvSmVBL1djPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHVHlxREF6RFJWR05DV19pUW5fVXVnIiwicGhvbmVJZCI6IjkwNTEyMDMxLTdiZjktNGYwYS1hZmJiLTFmMzU3MDg5MjY4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMmxXbVdmeXlpbU5RM0dGMjQxd215ZGZuSkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXlTQnczOE40VllnUHdiTzBrU0hFSTFMMGljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlQNTY3VlhCIiwibWUiOnsiaWQiOiIyMjU0NjUyNjMyNDoxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXVzaWRzQkVOSHkzYmdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNUVXZ0x6UTl2RERvYUhnWFRzY3UzWVRIWHJYWGlBdWpKd0pqMjNUUkFHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaTBZYkY3SXpnMTdUZHRJTGVRMC9tU2U5dUhZa1FmQzZCL2FXQW5xSEloTjF5QUFCNWI1c3RMZnBYQm1UcnoxZTZXcFBxbUFpVHU3ekY0cXc5TzZqRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImtMa1pUMFNrVFpXUlRLb0xYM1dJaDB0YmtVdkJxNVU3MlBiRTM0VjNIWm5IMW5qRmtKU1A5T1JRQ3V2RERlK0FtN1NjcDd5d3JTcHg0bERrQ2ZHb0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NDY1MjYzMjQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVJGb0M4MFBid3c2R2g0RjA3SEx0MkV4MTYxMTRnTG95Y0NZOXQwMFFCayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTU5MTY0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPam8ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "𝞙𝞖𝞓𝙇𝞘𝙇🍆 𝘿𝞗𝙐𝞑𝙇𝞢🧃𝙁𝞓𝘾𝞢🤤🔥",
  packname: process.env.PACK_NAME || "𝞙𝞖𝞓𝙇𝞘𝙇🍆 𝘿𝞗𝙐𝞑𝙇𝞢🧃𝙁𝞓𝘾𝞢🤤🔥",
  botname: process.env.BOT_NAME || "QUEEN_BATALA",
  ownername: process.env.OWNER_NAME || "𝞙𝞖𝞓𝙇𝞘𝙇🍆 𝘿𝞗𝙐𝞑𝙇𝞢🧃𝙁𝞓𝘾𝞢🔥🖤",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
