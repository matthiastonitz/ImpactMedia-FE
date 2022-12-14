import React from 'react';

import StrapiImage from '@/common/components/StrapiImage';
import type { UploadFileEntityResponse } from '@/types';

interface ISwipeCard {
  feedback: string | undefined | null;
  image: UploadFileEntityResponse | undefined | null;
  name: string | undefined | null;
  position: string | undefined | null;
  company: string | undefined | null;
}

const SwipeCard = ({
  feedback,
  image,
  name,
  position,
  company,
}: ISwipeCard) => {
  const isThereImage =
    image?.data?.attributes?.formats?.small?.url ||
    image?.data?.attributes?.url;

  return (
    <div className="h-full pt-16 bg-white lg:py-16">
      <div className="h-full pb-8 rounded-md shadow-md bg-theme-primary lg:relative lg:z-10 lg:pb-0">
        <div className="h-full lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          {isThereImage ? (
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
              />
              <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:h-full lg:p-0 ">
                <div className="relative overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:h-full lg:w-full ">
                  <StrapiImage
                    src={
                      image?.data?.attributes?.formats?.small?.url ||
                      image?.data?.attributes?.url
                    }
                    width={image?.data?.attributes?.width}
                    height={image?.data?.attributes?.height}
                    layout="fill"
                    objectFit="cover"
                    alt={image?.data?.attributes?.alternativeText}
                    /* blurUrl={image?.data?.attributes?.formats?.thumbnail?.url}
                    blur */
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div
            className={`h-full mt-12 ${
              isThereImage ? 'lg:col-span-2' : 'lg:col-span-3'
            } lg:m-0 lg:pl-8`}
          >
            <div className="flex items-center justify-center h-full max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-10">
              <blockquote>
                <div>
                  <svg
                    className="hidden w-12 h-12 text-white opacity-25 sm:block"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-base font-medium text-white sm:text-xl">
                    {feedback}
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-semibold text-white">{name}</p>
                  <p className="text-base font-medium text-theme-secondary-light">
                    {position} {company && `at ${company}`}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
