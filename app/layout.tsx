import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from 'react'
import StoreProvider from '@/app/StoreProvider'
import {signIn} from 'next-auth/react'
import {AuthError} from 'next-auth'
import {Button, ConfigProvider} from 'antd'
import enUS from 'antd/locale/en_US'

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Generative AI Wedding Photo",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <StoreProvider>
            <AntdRegistry>
                <ConfigProvider locale={enUS}>
                  {children}
                </ConfigProvider>
            </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
