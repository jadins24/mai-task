/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  title: string;
  count?: number;
}

export interface Project {
  title: string;
  status: 'Active' | 'Completed';
  category: string;
  location: string;
  timeline: string;
}

export interface Blog {
  title: string;
  image: string;
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
}
