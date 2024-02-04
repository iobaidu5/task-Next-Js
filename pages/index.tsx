"use client";
import Bookmarks from "../src/app/Components/Bookmarks";
import FromPDF from "../src/app/Components/FromPDF";
import Layout from "../src/app/Layout/index";
import {
  slidesData,
  bookmarksData,
  convertToPDF,
  convertFromPDF,
} from "../src/utils/utils";
import { useTheme } from '../src/app/Theme/themes';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Layout>
        <div className={theme === 'dark' ? 'dark-theme py-16 px-40 flex flex-col gap-10' : 'light-theme py-16 px-40 flex flex-col gap-10'}>
          <Bookmarks header="Your Bookmarks" data={bookmarksData} />
          <FromPDF slidesData={slidesData} />
          <Bookmarks header="Convert from PDF" data={convertFromPDF} />
          <Bookmarks header="Convert to PDF" data={convertToPDF} />
        </div>
      </Layout>
    </main>
  );
}
