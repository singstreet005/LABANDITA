import React from 'react';

export type ServiceId = 'saludos' | 'colabs' | 'productos';

export type ViewState = 'home' | ServiceId;

export interface LinkItem {
  id: string;
  label: string;
  url?: string; // If URL is present, it's an external link
  action?: () => void; // If action is present, it's an internal navigation
  icon: React.ReactNode;
  variant?: 'default' | 'highlight';
}

export interface ServiceButton {
  text: string;
  url: string;
}

export interface ServiceDetails {
  title: string;
  subtitle: string;
  description: string;
  buttons: ServiceButton[];
  gallery?: string[]; // Optional array of image URLs for the service page
  priceTag?: string; // Optional text for displaying price below images
  bottomText?: string; // Optional text to display below the action buttons
}