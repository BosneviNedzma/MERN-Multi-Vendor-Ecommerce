"use client";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "../app/api/uploadthing/core.js";
import { extractRouterConfig } from "uploadthing/server";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
