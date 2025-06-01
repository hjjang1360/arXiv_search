'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Github, Copy, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import Link from 'next/link';

const PACKAGE_NAME = '@easynext/cli';
const CURRENT_VERSION = 'v0.1.35';

function latestVersion(packageName: string) {
  return axios
    .get('https://registry.npmjs.org/' + packageName + '/latest')
    .then((res) => res.data.version);
}

export default function Home() {
  const { toast } = useToast();
  const [latest, setLatest] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const version = await latestVersion(PACKAGE_NAME);
        setLatest(`v${version}`);
      } catch (error) {
        console.error('Failed to fetch version info:', error);
      }
    };
    fetchLatestVersion();
  }, []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`npm install -g ${PACKAGE_NAME}@latest`);
    toast({
      description: 'Update command copied to clipboard',
    });
  };

  const needsUpdate = latest && latest !== CURRENT_VERSION;

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Academic Papers with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Save time and enhance collaboration with AI-powered paper summarization, 
              translation, and team collaboration tools.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/search"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Faster Research</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to accelerate your research
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI-powered platform helps you understand papers faster, collaborate better, and break language barriers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                  </svg>
                  Quick Summarization
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Get concise summaries of academic papers in seconds, saving you hours of reading time.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z" clipRule="evenodd" />
                  </svg>
                  Smart Translation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Accurate translations between Korean and English, maintaining academic terminology.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                  </svg>
                  Team Collaboration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Work together with your team through comments, annotations, and version control.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  const items = [
    { href: 'https://nextjs.org/', label: 'Next.js' },
    { href: 'https://ui.shadcn.com/', label: 'shadcn/ui' },
    { href: 'https://tailwindcss.com/', label: 'Tailwind CSS' },
    { href: 'https://www.framer.com/motion/', label: 'framer-motion' },
    { href: 'https://zod.dev/', label: 'zod' },
    { href: 'https://date-fns.org/', label: 'date-fns' },
    { href: 'https://ts-pattern.dev/', label: 'ts-pattern' },
    { href: 'https://es-toolkit.dev/', label: 'es-toolkit' },
    { href: 'https://zustand.docs.pmnd.rs/', label: 'zustand' },
    { href: 'https://supabase.com/', label: 'supabase' },
    { href: 'https://react-hook-form.com/', label: 'react-hook-form' },
  ];

  return (
    <div className="flex flex-col py-5 md:py-8 space-y-2 opacity-75">
      <p className="font-semibold">What&apos;s Included</p>

      <div className="flex flex-col space-y-1 text-muted-foreground">
        {items.map((item) => (
          <SectionItem key={item.href} href={item.href}>
            {item.label}
          </SectionItem>
        ))}
      </div>
    </div>
  );
}

function SectionItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 underline"
      target="_blank"
    >
      <CheckCircle className="w-4 h-4" />
      <p>{children}</p>
    </a>
  );
}
