/**
 * Server-side data fetching for home page sections
 * Fetches all data in parallel for optimal performance
 */

import { fetchAPI, API_ENDPOINTS, normalizeLanguage } from './api';
import { Service } from './api';

// Types for our data structures
export interface HomePageData {
  services: Service[];
  testimonials: Testimonial[];
  pricing: any;
  faq: any;
  caseStudies: any;
  blog: any;
}

// Testimonial interface
export interface Testimonial {
  _id?: string;
  content: string;
  name: string;
  role: string;
  company: string;
  order?: number;
}

/**
 * Fetch all home page data in parallel
 * This should be called from server components
 */
export async function fetchHomePageData(lang: string): Promise<HomePageData> {
  const normalizedLang = normalizeLanguage(lang);
  
  try {
    // Fetch all data in parallel for better performance
    const [
      servicesResponse,
      testimonialsResponse,
      pricingResponse,
      faqResponse,
      caseStudiesResponse,
      blogResponse
    ] = await Promise.all([
      fetchAPI(`${API_ENDPOINTS.SERVICES}?lang=${normalizedLang}`),
      fetchAPI(`${API_ENDPOINTS.TESTIMONIALS}?lang=${normalizedLang}`),
      fetchAPI(`${API_ENDPOINTS.PRICING}?lang=${normalizedLang}`),
      fetchAPI(`${API_ENDPOINTS.FAQ}?lang=${normalizedLang}`),
      fetchAPI(`${API_ENDPOINTS.CASE_STUDIES}?lang=${normalizedLang}`),
      fetchAPI(`${API_ENDPOINTS.BLOGS}?lang=${normalizedLang}`)
    ]);

    // Parse responses in parallel
    const [
      servicesData,
      testimonialsData,
      pricingData,
      faqData,
      caseStudiesData,
      blogData
    ] = await Promise.all([
      servicesResponse.json(),
      testimonialsResponse.json(),
      pricingResponse.json(),
      faqResponse.json(),
      caseStudiesResponse.json(),
      blogResponse.json()
    ]);

    return {
      services: servicesData?.services || [],
      testimonials: testimonialsData?.testimonials || [],
      pricing: pricingData || {},
      faq: faqData || {},
      caseStudies: caseStudiesData || {},
      blog: blogData || {}
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    // Return empty data on error to prevent crashes
    return {
      services: [],
      testimonials: [],
      pricing: {},
      faq: {},
      caseStudies: {},
      blog: {}
    };
  }
}

/**
 * Individual fetch functions for specific sections
 * Use these when you only need specific data
 */
export async function fetchServicesData(lang: string): Promise<Service[]> {
  try {
    const normalizedLang = normalizeLanguage(lang);
    const response = await fetchAPI(`${API_ENDPOINTS.SERVICES}?lang=${normalizedLang}`);
    const data = await response.json();
    return data?.services || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function fetchTestimonialsData(lang: string): Promise<Testimonial[]> {
  try {
    const normalizedLang = normalizeLanguage(lang);
    const response = await fetchAPI(`${API_ENDPOINTS.TESTIMONIALS}?lang=${normalizedLang}`);
    const data = await response.json();
    return data?.testimonials || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
