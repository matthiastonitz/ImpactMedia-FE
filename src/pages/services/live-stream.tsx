import type { GetStaticProps } from 'next';
import React from 'react';

import client from '@/lib/gql/client';
import { GET_CLIENT_FEEDBACKS } from '@/lib/gql/queries/clientFeedback';
import { GET_TRUESTED_COMPANIES } from '@/lib/gql/queries/companies';
import { GET_FEATURED_PORTFOLIO_ELEMENTS } from '@/lib/gql/queries/portfolio';
import AboutUsInlineCoponent from '@/modules/About/AboutUsInlineComponent';
import UnwrappedCallToActionModule from '@/modules/CallToAction/alternativeCTA';
import LayoutModule from '@/modules/Layout';
import Title from '@/modules/Layout/components/Title';
import StatelessHero from '@/modules/MainHero/statelessHero';
import NextEventModule from '@/modules/NextEvent';
import InlinePortfolioComponent from '@/modules/Portfolio/InlinePortfolioComponent';
import ServicesModule from '@/modules/Services';
import TrustedclientsModule from '@/modules/Trustedclients';
import type {
  ClientFeedbackEntityResponseCollection,
  CompanyEntityResponseCollection,
  PortfolioElementEntityResponseCollection,
} from '@/types';

interface ILiveStramPage {
  companies: CompanyEntityResponseCollection;
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
  portfolioElements: PortfolioElementEntityResponseCollection;
}

/* TODO: VIDEOURL */

const LiveStramPage = ({
  companies,
  clientFeedbacks,
  portfolioElements,
}: ILiveStramPage) => {
  return (
    <LayoutModule>
      <StatelessHero
        serviceId={10}
        light
        video="https://backend.impact-media.eu/uploads/hero_e7b02f78ea.mp4"
        /* video="/hero.mp4" */
        poster="/poster.jpg"
        title={
          <>
            <Title>
              <Title size="xl4">
                <span className="whitespace-pre-wrap font-extrabold leading-none tracking-tight lg:text-[8rem]">
                  <span className="block">LIVE STREAMS </span>
                  <span className="block font-bold">& WEBINARS</span>
                </span>
              </Title>
            </Title>
            <p className="mt-3 max-w-xs text-left sm:mt-5 lg:max-w-lg  lg:text-xl xl:font-black">
              Connect with audiences across the world, in real time and in high
              definition. Tap on our live streaming expertise that covers all
              bases, from high-end camera and streaming gear to back-up Internet
              connection and well-trained on-site staff.
            </p>
          </>
        }
      />
      <NextEventModule />
      <UnwrappedCallToActionModule
        bottomColor="bg-theme-primary"
        topColor="bg-white"
        content={
          <h2 className="text-4xl leading-tight">
            <span className="block">Have an upcoming event?</span>
            <span className="block">
              We’ll make it a{' '}
              <span className="font-bold text-theme-secondary">SUCCESS!</span>
            </span>
          </h2>
        }
      />
      <InlinePortfolioComponent
        videos={portfolioElements?.data || []}
        variant="dark"
      />
      <TrustedclientsModule
        feedbacks={clientFeedbacks.data || []}
        companies={companies?.data || []}
      />
      <AboutUsInlineCoponent />
      <ServicesModule streams={false} />
    </LayoutModule>
  );
};
export default LiveStramPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TRUESTED_COMPANIES,
  });
  const { data: clientFeedbacksData } = await client.query({
    query: GET_CLIENT_FEEDBACKS,
  });
  const { data: porfolioELementsData } = await client.query({
    query: GET_FEATURED_PORTFOLIO_ELEMENTS,
    variables: {
      page: 1,
    },
  });

  return {
    props: {
      companies: data.companies,
      clientFeedbacks: clientFeedbacksData.clientFeedbacks,
      portfolioElements: porfolioELementsData.portfolioElements,
    },
  };
};
