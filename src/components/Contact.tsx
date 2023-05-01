import Heading from "./Headings"
import { Karla } from 'next/font/google'

const messageLabelFont = Karla({ subsets: ['latin'], weight: '600' })
const messageFont = Karla({ subsets: ['latin'], weight: '300' })

const Contact = () => (
    <div>
        <Heading as={3}>
            Get in touch
        </Heading>
        <div className={`${messageFont.className} mt-10`}>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                </p>
                <div className="flex flex-col md:flex-row md:items-end md:mb-10">
                    <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
                        <label htmlFor="yourname" className={`text-gray-700 font-bold mb-2 ${messageLabelFont.className}`}>Your Name</label>
                        <div className="relative">
                            <input type="text" name="name" id="yourname" placeholder="Enter your name" required className="w-full py-2 leading-snug border-b-2 border-gray-400 focus:outline-none focus:border-black" />
                            <div className="absolute right-0 top-0 mt-2 mr-3 text-gray-600">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 md:ml-16 mb-6 md:mb-0">
                        <label htmlFor="youremail" className={`text-gray-700 font-bold mb-2 ${messageLabelFont.className}`}>Your Email</label>
                        <div className="relative">
                            <input type="email" name="email" id="youremail" placeholder="Enter your email" required className="w-full py-2 leading-snug border-b-2 border-gray-400 focus:outline-none focus:border-black" />
                            <div className="absolute right-0 top-0 mt-2 mr-3 text-gray-600">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full mb-6 md:mb-0">
                    <label htmlFor="yourmessage" className={`text-gray-700 font-bold mb-2 ${messageLabelFont.className}`}>Message</label>
                    <div className="relative">
                        <textarea name="message" id="yourmessage" placeholder="Enter your message" required className="w-full py-2 leading-snug border-b-2 border-gray-400 focus:outline-none focus:border-black"></textarea>
                        <div className="absolute right-0 top-0 mt-3 mr-3 text-gray-600">
                            <i className="fas fa-comment-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <button type="submit" className="bg-black text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-700">Send message</button>
                </div>
            </form>

        </div>

    </div>
)



export default Contact