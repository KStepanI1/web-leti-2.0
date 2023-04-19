import puppeteer from "puppeteer";
import schedule from "node-schedule";
import { WeekNumber } from "../models/WeekNumber";

class WeekNumberService {
  async parse() {
    const link = "https://etu.ru/";
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.goto(link, { waitUntil: "domcontentloaded" });

      const html = await page.evaluate(() => {
        return (document.querySelector(".date") as HTMLElement).innerText;
      });

      await browser.close();

      return html;
    } catch (e) {
      console.log(e);
    }
  }

  async scheduleParsing() {
    const scheduleCallback = async () => {
      try {
        const wn = await WeekNumber.findOne({ where: { id: 1 } });
        const parsedString = await this.parse();
        if (wn && parsedString) {
          wn.update({
            value: parsedString,
            number: +parsedString.split(" ")[1],
          });
        } else if (parsedString) {
          await WeekNumber.create({
            value: parsedString,
            number: +parsedString.split(" ")[1],
          });
        } else {
          console.log("Something went wrong when parsing week number");
        }
      } catch (err) {
        console.log("WEEK NUMBER UPDATE ERROR: ", err);
      }
    };

    await scheduleCallback();
    schedule.scheduleJob({ hour: 0, minute: 5 }, scheduleCallback);
  }
}

export { WeekNumberService };
