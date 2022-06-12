import { Courses } from '../UI/Courses'
import { Hero } from '../UI/Hero'
import { Skills } from '../UI/Skills'
import { Testimonials } from '../UI/Testimonials'

export const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Courses />
      <Testimonials />
    </div>
  )
}
