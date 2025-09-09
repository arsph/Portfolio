# Adding Images to Your Portfolio

This directory is for storing images used in your portfolio website.

## How to Add Images

1. **Place your image files in this directory** (`public/images/`)
2. **Reference them in your code** using the `/images/` path

## Current Image Placeholders

The following images are currently referenced in your code:

- `background.jpg` - Background image for the hero section
- `profile.jpg` - Profile/portrait image for the hero section

## Image Requirements

### Background Image (`background.jpg`)
- **Recommended size**: 1920x1080px or larger
- **Format**: JPG, PNG, or WebP
- **Purpose**: Abstract/tech background for hero section
- **Note**: This image has 10% opacity applied

### Profile Image (`profile.jpg`)
- **Recommended size**: 400x500px or larger (aspect ratio ~4:5)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Professional portrait/headshot
- **Note**: This image is displayed with rounded corners and hover effects

## Adding More Images

To add images to other sections of your portfolio:

1. Place the image file in this directory
2. Reference it in your component like this:
   ```tsx
   <Image 
     src="/images/your-image.jpg" 
     alt="Description of image"
     width={400} 
     height={300} 
     className="your-css-classes"
   />
   ```

## Image Optimization

Next.js automatically optimizes images when using the `Image` component:
- Automatic WebP conversion
- Responsive sizing
- Lazy loading (unless `priority` is set)
- Blur placeholder while loading

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)
- AVIF (.avif)
