import React from 'react';

const FAQ = () => {
  return (
    <div>
      <section className="bg-slate-200 dark:text-gray-700">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">What do Skill-up courses include?</h3>
              <p className="mt-1 dark:text-gray-400">
                Each Skill-up course is created, owned and managed by the
                instructor(s). The foundation of each Skill-up course are its lectures, which can include videos, slides, and text. In
                addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How do I take a Skill-up course?</h3>
              <p className="mt-1 dark:text-gray-400">
                Skill-up courses are entirely on-demand and they can be accessed from several different devices and platforms, including a
                desktop, laptop, and our mobile app. After you enroll in a
                course, you can access it by clicking on the course link you will receive in your confirmation email (provided you are logged into your Skill-up account). You can also begin the course by logging in and navigating to your My learning page.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Is Skill-up an accredited institution? Do I receive anything after I complete a course?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                While Skill-up is not an accredited institution, we offer
                skills-based courses taught by real-world experts in their
                field. Every approved, paid course features a certificate of completion to document your accomplishment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How can I pay for a course?</h3>
              <p className="mt-1 dark:text-gray-400">
                Skill-up supports several different payment methods, depending on your account country and location.You can pay with Paypal, Bkash and visa Card.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;