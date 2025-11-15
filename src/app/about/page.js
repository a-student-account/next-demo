import SimpleGallery from "../components/SimpleGallery"

const images = [
  {
    largeURL:'https://images.unsplash.com/photo-1563181583-d854d08f42b3?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:'https://images.unsplash.com/photo-1563181583-d854d08f42b3?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 761,
    height: 959,
    alt:'jellyfish',
  },
  {
    largeURL:'https://images.unsplash.com/photo-1590239214905-ee42a2394985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:'https://images.unsplash.com/photo-1590239214905-ee42a2394985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1471,
    height: 981,
    alt: 'blue bird',
  },
  {
    largeURL:'https://plus.unsplash.com/premium_photo-1691395686234-df3a28e1eac3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:'https://plus.unsplash.com/premium_photo-1691395686234-df3a28e1eac3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1528,
    height: 1910,
    alt:'Blue, purple, and pink crystal',
  },
  {
    largeURL:'https://images.unsplash.com/photo-1677777677068-9f3051ec5c79?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:'https://images.unsplash.com/photo-1677777677068-9f3051ec5c79?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 880,
    height: 880,
    alt: 'Green crystal',
  },
  {
    largeURL:'https://images.unsplash.com/photo-1705575420317-daaed2ab4cf3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:'https://images.unsplash.com/photo-1705575420317-daaed2ab4cf3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1171,
    height: 781,
    alt: 'Pink diamond',
  }
]

export default function About() {
  return <div className="p-12">
    About Page
    <SimpleGallery galleryID="image-gallery" images={images} />
    
  </div>
}
