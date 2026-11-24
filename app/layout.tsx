import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
export const metadata:Metadata={title:'META DATA EDITOR — Media & Unicode Workbench',description:'Edit photo, GIF and sticker metadata. Encode Unicode emoji carriers and create Emoji Kitchen mixes.',applicationName:'META DATA EDITOR'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>;}
