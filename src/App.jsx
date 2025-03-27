import React from 'react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';
import { UserIcon, VideoCameraIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Button, Card, Navbar, Footer } from 'flowbite-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar fluid rounded className="border-b border-gray-200 px-4 py-2.5">
        <Navbar.Brand href="#">
          <span className="self-center text-xl font-semibold whitespace-nowrap">IntervU</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color="gray" className="mr-2">Log in</Button>
          <Button color="dark">Sign up</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>Features</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Testimonials</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Streamline Your Workflow Like Never Before</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Discover a smarter way to work with our AI-powered platform. Boost productivity and eliminate manual tasks.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mb-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 sm:mb-0">
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2 -mr-1" />
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="bg-gray-200 rounded-lg h-96 w-full"></div>
          </div>                
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need for seamless interviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform provides the tools you need to make your hiring process efficient, fair, and insightful, saving you time and helping you find the best candidates.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <UserIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h5 className="text-xl font-bold mb-2">Live Coding Environment</h5>
              <p className="text-gray-600">Real-time collaborative coding with syntax highlighting, auto-completion, and error detection.</p>
            </Card>
            
            <Card>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <VideoCameraIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h5 className="text-xl font-bold mb-2">Video Interviews</h5>
              <p className="text-gray-600">High-quality video conferencing with screen sharing and recording capabilities.</p>
            </Card>
            
            <Card>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h5 className="text-xl font-bold mb-2">Candidate Analytics</h5>
              <p className="text-gray-600">Comprehensive insights and scoring to help you make data-driven hiring decisions.</p>
            </Card>
            
            <Card className="lg:col-start-2">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <ChartBarIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h5 className="text-xl font-bold mb-2">AI Technical Assessment</h5>
              <p className="text-gray-600">Automated evaluation of technical skills with detailed reports and benchmarking.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">Testimonials</span>
            <h2 className="text-3xl font-bold mb-4">Loved by businesses worldwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it — hear what teams like yours have to say about our platform.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <p className="text-gray-600 mb-4">"We've been able to cut our interview process time in half while improving the quality of our technical assessments. The platform is intuitive and our candidates love the experience."</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Santaigo Zuñiga</h4>
                  <p className="text-xs text-gray-500">CEO at TechCorp</p>
                </div>
              </div>
            </Card>
            
            <Card>
              <p className="text-gray-600 mb-4">"The analytics and insights we get from the platform have transformed how we evaluate candidates. We're making better hiring decisions and saving countless hours in the process."</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Reynaldo Marroquin</h4>
                  <p className="text-xs text-gray-500">Head of Engineering at DevFlow</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">Pricing</span>
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that works best for your team and scale as you grow.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Starter</h3>
                <p className="text-sm text-gray-500">Perfect for small teams or solo users</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-500">/mo per user</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Up to 5 users</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Basic video interviews</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Standard analytics</span>
                </li>
              </ul>
              <a href="#" className="text-center py-2 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium">Get Started</a>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white rounded-lg border-2 border-primary-500 p-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">Professional</h3>
                <p className="text-sm text-gray-500">Ideal for growing teams that need more</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500">/mo per user</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Up to 20 users</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Advanced video interviews</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Comprehensive analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Custom branding</span>
                </li>
              </ul>
              <a href="#" className="text-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium">Get Started</a>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold">Enterprise</h3>
                <p className="text-sm text-gray-500">For large organizations with custom needs</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500">/mo per user</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Unlimited users</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Premium video interviews</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Advanced AI assessments</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm">API access & integrations</span>
                </li>
              </ul>
              <a href="#" className="text-center py-2 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-2">Ready to transform your technical interviews?</h2>
                <p className="text-gray-300">Join the thousands of companies that have streamlined their hiring process with our platform.</p>
              </div>
              <div>
                <a href="#" className="inline-block py-3 px-6 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg text-center">Get Started Free</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">IntervU</span>
              </a>
              <p className="mt-2 text-sm text-gray-500 max-w-xs">Empowering companies to conduct better technical interviews and hire the best talent.</p>
              <div className="flex mt-4 space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Company</h3>
                <ul className="text-gray-600">
                  <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Support</h3>
                <ul className="text-gray-600">
                  <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Resources</h3>
                <ul className="text-gray-600">
                  <li className="mb-2"><a href="#" className="hover:underline">Documentation</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Guides</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">API</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© 2025 IntervU™. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;