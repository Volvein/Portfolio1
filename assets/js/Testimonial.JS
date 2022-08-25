const testemonialsContainer = document.querySelector('.testimonials-container')
const testemonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
	{
		name: "Tanvi Kaur",
		position: "Marketing",
		photo:"https://image.scoopwhoop.com/q30/s4.scoopwhoop.com/anj2/5fd0683c18ac8173d49e32ea/29f8069d-49c1-4e0b-ba14-a8af93a83cc7.jpg",
		text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details.",
	},
	{
		name: "Ravi Taja",
		position: "Software Engineer",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf50CXODvgQgRbgsNG4Ru5i0PUrMB5UhPC0g&usqp=CAU",
		text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
	},
	{
		name: "Sanjay Kumar",
		position: "Frontend Developer",
		photo: "https://qph.cf2.quoracdn.net/main-thumb-67588218-200-udxkzdnxuzksoxwslmxawqpuadgzjirt.jpeg",
		text: "I had my concerns that due to a tight deadline E-Commerce project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver in 1 Month prior to the deadline. And when I asked for some revisions he made them in Week. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
	},
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testemonial.innerHTML = text
  userImage.src = photo
  userName.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 9200)