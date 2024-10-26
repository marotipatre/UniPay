"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { SignerOptions, wallets } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import "@interchain-ui/react/styles";
import {
  Box,
  ThemeProvider,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { themeClass } = useTheme();

  const signerOptions = {};
  return (
    <html lang="en">
      <body>
        <div className="bg-white">
          <ThemeProvider>
            <ChainProvider
              chains={chains}
              assetLists={assets}
              wallets={wallets}
              walletConnectOptions={{
                signClient: {
                  projectId: "a8510432ebb71e6948cfd6cde54b70f7",
                  relayUrl: "wss://relay.walletconnect.org",
                  metadata: {
                    name: "Cosmos Kit dApp",
                    description: "Cosmos Kit dApp built by Create Cosmos App",
                    url: "https://docs.cosmology.zone/cosmos-kit/",
                    icons: [],
                  },
                },
              }}
              // @ts-ignore
              signerOptions={signerOptions}
            >
              {children}
            </ChainProvider>
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
