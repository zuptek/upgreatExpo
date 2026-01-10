import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-2">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-bold py-4">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl font-bold py-4">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-2xl font-bold py-3">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl font-bold py-2">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-5 py-5 my-5 bg-muted italic">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-primary hover:underline decoration-primary"
                >
                    {children}
                </Link>
            );
        },
    },
};
