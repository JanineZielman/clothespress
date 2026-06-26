import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Image from "next/image";

export default async function BookPage({ params }: PageProps<"/book/[uid]">) {
	const { uid } = await params;
	const client = createClient();
	const book = await client.getByUID("book", uid);

	const image = book.data.images?.[0]?.image;

	return (
		<div className="book-page">
			<div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
					{book.data.title}
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{image?.url && (
						<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
							<Image
								src={image.url}
								alt={image.alt || book.data.title || "Book cover"}
								fill
								className="object-contain"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
					)}
					<div className="flex flex-col justify-center">

						{book.data.description && (
							<div className="prose prose-lg max-w-none">
								<PrismicRichText field={book.data.description} />
								{/* <SliceZone slices={book.data.slices} components={components} /> */}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}