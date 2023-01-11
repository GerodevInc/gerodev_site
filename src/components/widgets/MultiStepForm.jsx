import React, { ReactElement, useState } from "react";

function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      return i >= steps.length - 1 ? i : i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      return i <= 0 ? i : i - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  function toStart() {
    setCurrentStepIndex(0);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    steps,
    toStart,
  };
}

function FormWrapper({ title, children, current, length }) {
  return (
    <>
      <div className="text-center pb-12">
        <h2 className="font-semibold text-5xl lg:text-7xl ">{title}</h2>
      </div>
      <div className="grid grid-cols-1 items-center justify-center w-full">
        {children}
      </div>
    </>
  );
}

function UserForm({ name, updateFields }) {
  return (
    <FormWrapper title="About you">
      <label class="text-lg block mb-2  font-medium text-gray-900 ">
        What's your name?
      </label>
      <div class="relative my-3">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
        </div>
        <input
          autoFocus
          required
          type="text"
          value={name}
          class="caret-gray-500 bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full pl-10 p-2.5 focus:outline-none "
          placeholder="John Doe"
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}

function ContactForm({ email, phone, updateFields }) {
  return (
    <FormWrapper title="Your contact information">
      <label type="text" class="block mb-2 text-lg font-medium text-gray-900 ">
        Your email
      </label>
      <div class="relative my-3">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          autoFocus
          type="email"
          class="caret-gray-500 bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full pl-10 p-2.5  focus:outline-none "
          placeholder="name@yoursite.com"
          required
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <label type="text" class="block mb-2 text-lg font-medium text-gray-900">
        Your phone number (optional)
      </label>
      <input
        type="text"
        value={phone}
        class="caret-gray-500 bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full  p-2.5  focus:outline-none "
        placeholder="+200 11111111"
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  );
}

function MessageForm({ message, updateFields }) {
  return (
    <FormWrapper title="Your message">
      <label class="block mb-2 text-lg font-medium text-gray-900 ">
        What do you need?
      </label>
      <textarea
        autoFocus
        type="textarea"
        placeholder="An awesome website!"
        required
        class="caret-gray-500 bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full  p-2.5  focus:outline-none "
        rows="4"
        value={message}
        onChange={(e) => updateFields({ message: e.target.value })}
      />
    </FormWrapper>
  );
}

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function MultiStepForm() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    steps,
    isFirstStep,
    isLastStep,
    step,
    currentStepIndex,
    back,
    next,
    toStart,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields}></UserForm>,
    <ContactForm {...data} updateFields={updateFields}></ContactForm>,
    <MessageForm {...data} updateFields={updateFields}></MessageForm>,
  ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Message sent correctly");
    setData(updateFields(INITIAL_DATA));
    toStart();
  }

  return (
    <div className="relative top-[200px] sm:top-[350px] md:top-[400px] lg:top-[600px] mx-4 md:mx-12 lg:mx-48 ">
      <form onSubmit={onSubmit} netlify>
        <div className="text-center text-gray-500 text-sm">
          Progress: {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="py-4 flex justify-between text-lg text-gray-800">
          {!isFirstStep && (
            <button className="" type="button" onClick={back}>
              <div className="flex items-center hover:underline decoration-wavy underline-offset-2 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"
                  />
                </svg>
                <span class="pl-2">Back</span>
              </div>
            </button>
          )}
          <button type="submit" className="">
            <div className="flex items-center hover:underline decoration-wavy underline-offset-2 transition duration-200">
              <span class="pl-2">{isLastStep ? "Submit" : "Next"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;
