import type { AllDocumentTypes } from "@/prismicio-types";

export function linkResolver(doc: AllDocumentTypes): string {
  if (doc.type === "homepage") {
    return "/";
  }

  if (doc.type === "page") {
    return `/${doc.uid}`;
  }

  if (doc.type === "book") {
    return `/book/${doc.uid}`;
  }

  if (doc.type === "press") {
    return `/press/${doc.uid}`;
  }

  return "/";
}