import React from "react";
import CheckIcon from "@mui/icons-material/Check";

type Props = {};
const includedFeatures = [
  "Video Solutions",
  "Access to Premium Content",
  "Select Questions by Company",
  "Autocomplete",
  "Debugger",
  "Lightning Judge",
  "Sort Questions by Prevalence",
  "Unlimited Playgrounds",
];

export default function PremiumFeatureBox({}: Props) {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl shadow-lg shadow-textBlue/50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-textGray">
          Monthly
        </h3>
        <p className="mt-6 text-base leading-7 text-textGray">
          Our monthly plan grants access to all premium features, the best plan
          for short-term subscribers.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-textBlue">
            What’s included
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-textGray sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon fontSize="medium" color="success" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-black py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-textGray">
              Billed monthly
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $29.75
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-textGray">
                USD
              </span>
            </p>
            <a
              href="#"
              className="mt-10 block w-full rounded-md bg-textBlue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-textBlue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get access
            </a>
            <p className="mt-6 text-xs leading-5 text-textGray">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
