"use client";

interface ProjectGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="glass-pane rounded-2xl overflow-hidden group"
        >
          <div
            className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('${image.src}')` }}
          />
        </div>
      ))}
    </div>
  );
}
