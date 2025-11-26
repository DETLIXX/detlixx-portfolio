import {TProject} from '@/components/WorkCard' // TProject should be the type/interface for your project data
import ACM1 from '@/public/images/acm_1.webp'
import ACM2 from '@/public/images/acm_2.webp'
import ACM3 from '@/public/images/acm_3.webp'

import LOYALLI1 from '@/public/images/loyalli_1.png'
import LOYALLI2 from '@/public/images/loyalli_2.png'
import LOYALLI3 from '@/public/images/loyalli_3.png'

import LS1 from '@/public/images/ls_1.png'
import LS2 from '@/public/images/ls_2.png'
import LS3 from '@/public/images/ls_3.png'

import REV1 from '@/public/images/rev_1.png'
import REV2 from '@/public/images/rev_2.png'
import REV3 from '@/public/images/rev_3.png'

export const projects: TProject[] = [
  {
    project_name: 'Loyalli',
    project_description: `Loyalli is a fast, simple, and secure loyalty card wallet app that lets you store and share your cards.`,
    featured_text: 'APP STORE',
    images: [LOYALLI1, LOYALLI2, LOYALLI3], // Included the imported images here
    external_link: 'https://loyalli.detlixx.com/',
  },
  {
    project_name: 'Astralne Car Meets',
    project_description: `ACMEETS is the official website for Astralne Car Meets, organizing automotive events and gatherings for car enthusiasts.`,
    featured_text: 'COMMUNITY',
    images: [ACM1, ACM2, ACM3],
    external_link: 'https://www.acmeets.sk/',
  },
  {
    project_name: 'Little Savings',
    project_description: `Effortlessly track your expenses and stay on top of your budget with the ultimate expense tracker app.`,
    featured_text: 'APP STORE',
    images: [LS1, LS2, LS3],
    external_link: 'https://littlesavings.detlixx.com/',
  },
  {
    project_name: 'RevUp App',
    project_description: `RevUp is a car meet app that is currently being rebuilt with a new team and vision. App is currently in development (again) becaue we had some troubles with first version :) we hope soon will be v2 out`,
    featured_text: 'INSTAGRAM',
    images: [REV1, REV2, REV3],
    external_link: 'https://www.instagram.com/revup_app/',
  },
]
