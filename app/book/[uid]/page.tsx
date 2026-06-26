import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import BookImageGallery from "@/components/BookImageGallery";

export default async function BookPage({ params }: PageProps<"/book/[uid]">) {
	const { uid } = await params;
	const client = createClient();
	const book = await client.getByUID("book", uid);

	const images = book.data.images
		?.map((img) => {
			const imageUrl = typeof img.image.url === "string" ? img.image.url : "";
			const imageAlt = typeof img.image.alt === "string" ? img.image.alt : undefined;
			return {
				url: imageUrl,
				alt: imageAlt,
				width: img.image.dimensions?.width,
				height: img.image.dimensions?.height,
			};
		})
		.filter((img) => img.url !== "") || [];

	return (
		<div className="book-page">
			<div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
					{book.data.title}
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<BookImageGallery
						images={images}
						title={typeof book.data.title === "string" ? book.data.title : ""}
					/>
					<div className="flex flex-col justify-center">

						{book.data.description && (
							<div className="prose prose-lg max-w-none">
								<PrismicRichText field={book.data.description} />
								{/* <SliceZone slices={book.data.slices} components={components} /> */}
							</div>
						)}
					</div>
				</div>
				<div className="info">
					<PrismicRichText field={book.data.info} />
				</div>
			</div>
		</div>
	);
}