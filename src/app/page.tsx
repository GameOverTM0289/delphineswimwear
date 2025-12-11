import Hero from '@/components/home/Hero'
import Introduction from '@/components/home/Introduction'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import CoreValues from '@/components/home/CoreValues'
import InstagramFeed from '@/components/home/InstagramFeed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedProducts />
      <FeaturedCollections />
      <CoreValues />
      <InstagramFeed />
    </>
  )
}
