/* eslint-disable */
// @ts-nocheck
import { createClient } from 'next-sanity';
import { config } from './config';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: '',
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview = false) => (usePreview ? previewClient : sanityClient);
