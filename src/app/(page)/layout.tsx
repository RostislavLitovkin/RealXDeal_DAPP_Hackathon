import SiteFooter from '@/components/layouts/site-footer';
import { SiteHeader } from '@/components/layouts/site-header';
import SubstrateContextProvider from '@/context/polkadot-contex';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SubstrateContextProvider>
      <div className='w-full bg-[url("/images/bg-blur.svg")] bg-cover bg-center bg-no-repeat'>
        <SiteHeader />
        <main className="w-full">{children}</main>
        <SiteFooter />
      </div>
    </SubstrateContextProvider>
  );
}
