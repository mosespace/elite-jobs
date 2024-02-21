import DetailedJob from '@/components/frontend/DetailedJob'
import React from 'react'

function page() {
  return (
    // <>
    //   <main className='bg-white pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16'>
    //     <div className='mx-auto flex max-w-screen-xl justify-between px-4 '>
    //       <article className='format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl'>
    //         <header className='not-format mb-4 lg:mb-6'>
    //           <address className='mb-6 flex items-center not-italic'>
    //             <div className='mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white'>
    //               <img
    //                 className='mr-4 h-16 w-16 rounded-full'
    //                 src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
    //                 alt='Jese Leos'
    //               />
    //               <div>
    //                 <a
    //                   href='#'
    //                   rel='author'
    //                   className='text-xl font-bold text-gray-900 dark:text-white'
    //                 >
    //                   Jese Leos
    //                 </a>
    //                 <p className='text-base text-gray-500 dark:text-gray-400'>
    //                   Graphic Designer, educator & CEO Flowbite
    //                 </p>
    //                 <p className='text-base text-gray-500 dark:text-gray-400'>
    //                   <time title='February 8th, 2022'>Feb. 8, 2022</time>
    //                 </p>
    //               </div>
    //             </div>
    //           </address>
    //           <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl'>
    //             Best practices for successful prototypes
    //           </h1>
    //         </header>
    //         <p className='lead'>
    //           Flowbite is an open-source library of UI components built with the
    //           utility-first classes from Tailwind CSS. It also includes
    //           interactive elements such as dropdowns, modals, datepickers.
    //         </p>
    //         <p>
    //           Before going digital, you might benefit from scribbling down some
    //           ideas in a sketchbook. This way, you can think things through
    //           before committing to an actual design project.
    //         </p>
    //         <p>
    //           But then I found a{' '}
    //           <a href='https://flowbite.com'>
    //             component library based on Tailwind CSS called Flowbite
    //           </a>
    //           . It comes with the most commonly used UI components, such as
    //           buttons, navigation bars, cards, form elements, and more which are
    //           conveniently built with the utility classes from Tailwind CSS.
    //         </p>
    //         <figure>
    //           <img
    //             src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png'
    //             alt=''
    //           />
    //           <figcaption>Digital art by Anonymous</figcaption>
    //         </figure>
    //         <h2>Getting started with Flowbite</h2>
    //         <p>
    //           First of all you need to understand how Flowbite works. This
    //           library is not another framework. Rather, it is a set of
    //           components based on Tailwind CSS that you can just copy-paste from
    //           the documentation.
    //         </p>
    //         <p>
    //           It also includes a JavaScript file that enables interactive
    //           components, such as modals, dropdowns, and datepickers which you
    //           can optionally include into your project via CDN or NPM.
    //         </p>
    //         <p>
    //           You can check out the{' '}
    //           <a href='https://flowbite.com/docs/getting-started/quickstart/'>
    //             quickstart guide
    //           </a>{' '}
    //           to explore the elements by including the CDN files into your
    //           project. But if you want to build a project with Flowbite I
    //           recommend you to follow the build tools steps so that you can
    //           purge and minify the generated CSS.
    //         </p>
    //         <p>
    //           You'll also receive a lot of useful application UI, marketing UI,
    //           and e-commerce pages that can help you get started with your
    //           projects even faster. You can check out this{' '}
    //           <a href='https://flowbite.com/docs/components/tables/'>
    //             comparison table
    //           </a>{' '}
    //           to better understand the differences between the open-source and
    //           pro version of Flowbite.
    //         </p>
    //         <h2>When does design come in handy?</h2>
    //         <p>
    //           While it might seem like extra work at a first glance, here are
    //           some key moments in which prototyping will come in handy:
    //         </p>
    //         <ol>
    //           <li>
    //             <strong>Usability testing</strong>. Does your user know how to
    //             exit out of screens? Can they follow your intended user journey
    //             and buy something from the site you’ve designed? By running a
    //             usability test, you’ll be able to see how users will interact
    //             with your design once it’s live;
    //           </li>
    //           <li>
    //             <strong>Involving stakeholders</strong>. Need to check if your
    //             GDPR consent boxes are displaying properly? Pass your prototype
    //             to your data protection team and they can test it for real;
    //           </li>
    //           <li>
    //             <strong>Impressing a client</strong>. Prototypes can help
    //             explain or even sell your idea by providing your client with a
    //             hands-on experience;
    //           </li>
    //           <li>
    //             <strong>Communicating your vision</strong>. By using an
    //             interactive medium to preview and test design elements,
    //             designers and developers can understand each other — and the
    //             project — better.
    //           </li>
    //         </ol>
    //         <h3>Laying the groundwork for best design</h3>
    //         <p>
    //           Before going digital, you might benefit from scribbling down some
    //           ideas in a sketchbook. This way, you can think things through
    //           before committing to an actual design project.
    //         </p>
    //         <p>
    //           Let's start by including the CSS file inside the <code>head</code>{' '}
    //           tag of your HTML.
    //         </p>
    //         <h3>Understanding typography</h3>
    //         <h4>Type properties</h4>
    //         <p>
    //           A typeface is a collection of letters. While each letter is
    //           unique, certain shapes are shared across letters. A typeface
    //           represents shared patterns across a collection of letters.
    //         </p>
    //         <h4>Baseline</h4>
    //         <p>
    //           A typeface is a collection of letters. While each letter is
    //           unique, certain shapes are shared across letters. A typeface
    //           represents shared patterns across a collection of letters.
    //         </p>
    //         <h4>Measurement from the baseline</h4>
    //         <p>
    //           A typeface is a collection of letters. While each letter is
    //           unique, certain shapes are shared across letters. A typeface
    //           represents shared patterns across a collection of letters.
    //         </p>
    //         <h3>Type classification</h3>
    //         <h4>Serif</h4>
    //         <p>
    //           A serif is a small shape or projection that appears at the
    //           beginning or end of a stroke on a letter. Typefaces with serifs
    //           are called serif typefaces. Serif fonts are classified as one of
    //           the following:
    //         </p>
    //         <h4>Old-Style serifs</h4>
    //         <ul>
    //           <li>Low contrast between thick and thin strokes</li>
    //           <li>Diagonal stress in the strokes</li>
    //           <li>Slanted serifs on lower-case ascenders</li>
    //         </ul>
    //         <img
    //           src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png'
    //           alt=''
    //         />
    //         <ol>
    //           <li>Low contrast between thick and thin strokes</li>
    //           <li>Diagonal stress in the strokes</li>
    //           <li>Slanted serifs on lower-case ascenders</li>
    //         </ol>
    //         <h3>Laying the best for successful prototyping</h3>
    //         <p>
    //           A serif is a small shape or projection that appears at the
    //           beginning:
    //         </p>
    //         <blockquote>
    //           <p>
    //             Flowbite is just awesome. It contains tons of predesigned
    //             components and pages starting from login screen to complex
    //             dashboard. Perfect choice for your next SaaS application.
    //           </p>
    //         </blockquote>
    //         <h4>Code example</h4>
    //         <p>
    //           A serif is a small shape or projection that appears at the
    //           beginning or end of a stroke on a letter. Typefaces with serifs
    //           are called serif typefaces. Serif fonts are classified as one of
    //           the following:
    //         </p>

    //         <h4>Table example</h4>
    //         <p>
    //           A serif is a small shape or projection that appears at the
    //           beginning or end of a stroke on a letter.
    //         </p>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Country</th>
    //               <th>Date &amp; Time</th>
    //               <th>Amount</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>United States</td>
    //               <td>April 21, 2021</td>
    //               <td>
    //                 <strong>$2,300</strong>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>Canada</td>
    //               <td>May 31, 2021</td>
    //               <td>
    //                 <strong>$300</strong>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>United Kingdom</td>
    //               <td>June 3, 2021</td>
    //               <td>
    //                 <strong>$2,500</strong>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>Australia</td>
    //               <td>June 23, 2021</td>
    //               <td>
    //                 <strong>$3,543</strong>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>Germany</td>
    //               <td>July 6, 2021</td>
    //               <td>
    //                 <strong>$99</strong>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>France</td>
    //               <td>August 23, 2021</td>
    //               <td>
    //                 <strong>$2,540</strong>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         <h3>Best practices for setting up your prototype</h3>
    //         <p>
    //           <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
    //           how close a prototype will be to the real deal. If you’re simply
    //           preparing a quick visual aid for a presentation, a low-fidelity
    //           prototype — like a wireframe with placeholder images and some
    //           basic text — would be more than enough. But if you’re going for
    //           more intricate usability testing, a high-fidelity prototype — with
    //           on-brand colors, fonts and imagery — could help get more pointed
    //           results.
    //         </p>
    //         <p>
    //           <strong>Consider your user</strong>. To create an intuitive user
    //           flow, try to think as your user would when interacting with your
    //           product. While you can fine-tune this during beta testing,
    //           considering your user’s needs and habits early on will save you
    //           time by setting you on the right path.
    //         </p>
    //         <p>
    //           <strong>Start from the inside out</strong>. A nice way to both
    //           organize your tasks and create more user-friendly prototypes is by
    //           building your prototypes ‘inside out’. Start by focusing on what
    //           will be important to your user, like a Buy now button or an image
    //           gallery, and list each element by order of priority. This way,
    //           you’ll be able to create a prototype that puts your users’ needs
    //           at the heart of your design.
    //         </p>
    //         <p>
    //           And there you have it! Everything you need to design and share
    //           prototypes — right in Flowbite Figma.
    //         </p>
    //         <section className='not-format'>
    //           <div className='mb-6 flex items-center justify-between'>
    //             <h2 className='text-lg font-bold text-gray-900 dark:text-white lg:text-2xl'>
    //               Discussion (20)
    //             </h2>
    //           </div>
    //           <form className='mb-6'>
    //             <div className='mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800'>
    //               <label htmlFor='comment' className='sr-only'>
    //                 Your comment
    //               </label>
    //               <textarea
    //                 id='comment'
    //                 className='w-full border-0 px-0 text-sm text-gray-900 outline-0 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
    //                 placeholder='Write a comment...'
    //                 required
    //               ></textarea>
    //             </div>
    //             <button
    //               type='submit'
    //               className='inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900'
    //             >
    //               Post comment
    //             </button>
    //           </form>
    //         </section>
    //       </article>
    //     </div>
    //   </main>

    //   <aside
    //     aria-label='Related articles'
    //     className='bg-gray-50 py-8 dark:bg-gray-800 lg:py-24'
    //   >
    //     <div className='mx-auto max-w-screen-xl px-4'>
    //       <h2 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>
    //         Related articles
    //       </h2>
    //       <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 1'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Our first office</a>
    //           </h2>
    //           <p className='mb-4 text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-500'
    //           >
    //             Read in 2 minutes
    //           </a>
    //         </article>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 2'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Enterprise design tips</a>
    //           </h2>
    //           <p className='mb-4  text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-500'
    //           >
    //             Read in 12 minutes
    //           </a>
    //         </article>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 3'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>We partnered with Google</a>
    //           </h2>
    //           <p className='mb-4  text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-500'
    //           >
    //             Read in 8 minutes
    //           </a>
    //         </article>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 4'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Our first project with React</a>
    //           </h2>
    //           <p className='mb-4  text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-500'
    //           >
    //             Read in 4 minutes
    //           </a>
    //         </article>
    //       </div>
    //     </div>
    //   </aside>

    //   <section className='bg-white dark:bg-gray-900'>
    //     <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
    //       <div className='mx-auto max-w-screen-md sm:text-center'>
    //         <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
    //           Sign up for our newsletter
    //         </h2>
    //         <p className='mx-auto mb-8 max-w-2xl  text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12'>
    //           Stay up to date with the roadmap progress, announcements and
    //           exclusive discounts feel free to sign up with your email.
    //         </p>
    //         <form action='#'>
    //           <div className='mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0'>
    //             <div className='relative w-full'>
    //               <label
    //                 htmlFor='email'
    //                 className='mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300'
    //               >
    //                 Email address
    //               </label>
    //               <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
    //                 <svg
    //                   className='h-4 w-4 text-gray-500 dark:text-gray-400'
    //                   aria-hidden='true'
    //                   xmlns='http://www.w3.org/2000/svg'
    //                   fill='currentColor'
    //                   viewBox='0 0 20 16'
    //                 >
    //                   <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
    //                   <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
    //                 </svg>
    //               </div>
    //               <input
    //                 className='block w-full rounded-lg border border-gray-300 bg-white p-3 pl-9 text-sm text-gray-900 outline-0 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:rounded-none sm:rounded-l-lg'
    //                 placeholder='Enter your email'
    //                 type='email'
    //                 id='email'
    //                 required={true}
    //               />
    //             </div>
    //             <div>
    //               <button
    //                 type='submit'
    //                 className='w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white outline-0 hover:bg-blue-500 focus:ring-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0 sm:rounded-none sm:rounded-r-lg'
    //               >
    //                 Subscribe
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <DetailedJob />
  )
}

export default page
