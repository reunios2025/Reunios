import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "John & Lisa",
    quote: "Spotless beachfront magic. We're coming back!",
    stars: 5,
    image: "/corosal-img1.jpg"
  },
  {
    name: "Michael S.",
    quote: "Incredible ski chalet — warm and wonderful.",
    stars: 5,
    image: "/corosal-img13.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
  {
    name: "Tina W.",
    quote: "Wine villa was peaceful and perfect. A+!",
    stars: 4.7,
    image: "/corosal-img14.jpg"
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Guests Say</h2>
        <Slider {...settings} className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow p-8">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
              <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
              <p className="font-semibold text-lg">{t.name}</p>
              <p className="text-yellow-500 text-lg">{'★'.repeat(Math.round(t.stars))}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
