import { NextResponse } from 'next/server';
import { listSupportedEmojiChars } from '../../../src/mixer';
export async function GET(){return NextResponse.json({ok:true,emojis:listSupportedEmojiChars()});}
