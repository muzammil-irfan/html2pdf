import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import puppeteer from 'puppeteer'
function App() {
  const [html, setHtml] = useState();
  useEffect(() => {
    const hello = async () => {
      const url = "https://sparksuite.github.io/simple-html-invoice-template/";
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
      await page.pdf({ path: "hn.pdf", format: "a4" });

      await browser.close();
    };
    hello();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default App;
