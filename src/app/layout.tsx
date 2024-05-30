import type { Metadata } from 'next';
import { Geist } from '../lib/fonts';
import './globals.css';
import Menu from '~components/Menu';
import Footer from '~components/Footer';
import { FooterData, MenuData } from '~types/index';
import { getFooterData, getMenuData } from '~sanity/sanity.query';

export const metadata: Metadata = {
  title: 'Meraki Agency',
  description: 'Your new favorite digital agency',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuData: MenuData = await getMenuData();
  const footerData: FooterData = await getFooterData();

  return (
    <html lang="en">
      <body className={Geist.variable}>
        <Menu menuData={menuData} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
