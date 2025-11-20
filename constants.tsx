import { ShieldAlert, Users, ClipboardCheck } from 'lucide-react';
import { ServiceItem } from './types';

// Navigation items removed as per request for single page minimalist look without nav buttons.
export const NAV_ITEMS = [];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'risk-assessment',
    title: 'Evaluarea Riscurilor',
    description: 'Identificăm riscurile din mediul de lucru și oferim soluții concrete pentru a le minimiza.',
    icon: ShieldAlert,
  },
  {
    id: 'training',
    title: 'Instruirea Angajaților',
    description: 'Organizăm cursuri și instruiri pentru a asigura un mediu de lucru sigur.',
    icon: Users,
  },
  {
    id: 'audit',
    title: 'Audit SSM',
    description: 'Realizăm audituri periodice pentru a verifica conformitatea cu reglementările SSM.',
    icon: ClipboardCheck,
  },
];

export const CONTACT_INFO = {
  email: "contact@cegricos.ro",
  phone: "+40 721 228 623",
  address: "România"
};

export const WEB3FORMS_ACCESS_KEY = "e064fb06-e30e-49ae-ace4-81ba08bdb4f1";