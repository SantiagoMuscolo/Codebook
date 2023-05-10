import { Hero } from './components/Hero/Hero'
import {FeaturedProducts} from './components/FeaturedProducts/FeaturedProducts'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Faq } from './components/Faq/Faq'
import { UseTitle } from '../../hooks/useTitle'

export const HomePage = () => {
    UseTitle('Codebook-Home')

    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Testimonials />
            <Faq />
        </main>
    )
}
