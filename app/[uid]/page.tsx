import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }: PageProps<"/[uid]">) {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID("page", uid);

	return (
		<div className="page">
			<PrismicRichText field={page.data.description} />
			<SliceZone slices={page.data.slices} components={components} />
		</div>
	)
}