/* Upwork client feedback — happy & satisfied customers */
const PROJECTS = [
  // ─── Completed ───────────────────────────────────────────────
  {
    id: 'proximity-app',
    status: 'completed',
    title: 'Flutter + Firebase Expert Needed to Fix Proximity App Bug',
    dateStart: 'Feb 1, 2026',
    dateEnd: 'Feb 3, 2026',
    earned: '$250.00',
    rate: '$25.00 / hr',
    jobType: 'Hourly',
    clientReview: {
      rating: 5.0,
      text: 'Faizan was professional, responsive, and easy to work with. Communication was clear, and the project was completed successfully as agreed. I would definitely recommend him and would be open to working together again.'
    },
    endorsements: ['Collaborative', 'Clear Communicator', 'Accountable for Outcomes', 'Professional'],
    freelancerReview: {
      rating: 5.0,
      text: 'Great to work with. Clear communication on requirements and quick feedback. Hopefully will work together again on future projects. Thanks.'
    },
    jobDescription: 'Fix a proximity-related bug in an existing Flutter + Firebase mobile application and ensure stable production behavior.',
    jobDetails: ['Hourly job', 'Less than 30 hrs/week', 'Less than 1 month', 'Expert']
  },
  {
    id: 'launch-ready',
    status: 'completed',
    title: 'Senior Flutter Developer Needed to Fix Bugs & Make App Launch-Ready (Android & iOS)',
    dateStart: 'Nov 14, 2025',
    dateEnd: 'Mar 8, 2026',
    earned: '$150.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'It was a great experience working with Faizan. He was extremely cooperative throughout the entire project and always willing to accommodate feedback and make improvements where needed. His understanding of Flutter, mobile architecture, and production readiness is excellent. He helped resolve critical bugs and prepared the app for a smooth App Store and Play Store launch. Highly recommended for any serious Flutter project.'
    },
    endorsements: ['Reliable', 'Collaborative', 'Committed to Quality', 'Solution Oriented', 'Clear Communicator', 'Professional'],
    freelancerReview: {
      rating: 5.0,
      text: 'Clear requirements and good communication throughout. A pleasure to work with on getting the app launch-ready. Would be happy to collaborate again.'
    },
    jobPrivate: true
  },
  {
    id: 'hybrid-travel',
    status: 'completed',
    title: 'Flutter Developer – Hybrid Travel Agency User App',
    dateStart: 'Aug 25, 2025',
    dateEnd: 'Apr 26, 2026',
    earned: '$250.00',
    jobType: 'Fixed price',
    clientReview: { rating: 5.0, text: null },
    noFeedback: true
  },
  {
    id: 'nextera-ongoing',
    status: 'completed',
    title: 'Flutter Dev for Nextera (Phase 2)',
    dateStart: 'Aug 22, 2025',
    dateEnd: 'Mar 29, 2026',
    earned: '$350.00',
    jobType: 'Fixed price',
    noFeedback: true
  },
  {
    id: 'gps-quest',
    status: 'completed',
    title: 'Flutter + NodeJS Developer Needed for GPS-Based Daily Quest App',
    dateStart: 'Nov 26, 2025',
    dateEnd: 'Jan 8, 2026',
    earned: '$375.00',
    jobType: 'Fixed price',
    noFeedback: true
  },
  {
    id: 'mobile-interface',
    status: 'completed',
    title: 'Flutter Mobile Interface Developer Needed',
    dateStart: 'Sep 9, 2025',
    dateEnd: 'Oct 27, 2025',
    earned: '$750.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Great developer, fast and responsive. Excellent coder, fast and responsive.',
      date: 'Oct 27, 2025'
    },
    endorsements: ['Clear Communicator'],
    freelancerReview: {
      rating: 5.0,
      text: 'Great to work with. Clear communication on requirements. Hopefully will work on future projects. Thanks.'
    },
    jobDescription: 'Job Opportunity: Flutter Developer — mobile interface development for a production application.',
    budget: '$750.00',
    deliverBy: 'Sep 18, 2025'
  },
  {
    id: 'wordpress-mobile',
    status: 'completed',
    title: 'Converting WordPress Website to Mobile Apps for iOS and Android',
    dateStart: 'Jul 4, 2025',
    dateEnd: 'Sep 5, 2025',
    earned: '$300.00',
    jobType: 'Fixed price',
    clientReview: { rating: 5.0, text: 'Very excellent!' },
    freelancerReview: {
      rating: 5.0,
      text: 'Great to work with. Clear communication and requirements. Hopefully will work again in future. Thanks.'
    },
    jobDescription: 'I have a social media website, and I want to convert to also be in iOS and Android mobile apps.',
    budget: '$100.00',
    deliverBy: 'May 28, 2025'
  },
  {
    id: 'nextera',
    status: 'completed',
    title: 'Flutter Dev for Nextera (Phase 1)',
    dateStart: 'May 13, 2025',
    dateEnd: 'Aug 16, 2025',
    earned: '$300.00',
    jobType: 'Fixed price',
    clientReview: { rating: 5.0, text: null },
    freelancerReview: {
      rating: 5.0,
      text: 'Nice to work with. Hopefully we will work together again on new changes. Looking forward. Thanks.'
    },
    jobDescription: 'We are looking for a skilled Flutter developer to complete Phase 1 of a travel app focused on Singapore maps.',
    budget: '$640.00',
    deliverBy: 'Jun 12, 2025'
  },
  {
    id: 'flutterflow-appsflyer',
    status: 'completed',
    title: 'Flutter and FlutterFlow and AppsFlyer Expert',
    dateStart: 'Jan 15, 2025',
    dateEnd: 'May 10, 2025',
    earned: '$50.00',
    jobType: 'Fixed price',
    noFeedback: true
  },
  {
    id: 'steps-app',
    status: 'completed',
    title: 'Looking for Expert Flutter developer for steps app',
    dateStart: 'Feb 14, 2025',
    dateEnd: 'Apr 28, 2025',
    earned: '$350.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Faizan have done an excellent job not only with Flutter development but also with your strong product thinking and UX insights. Your suggestions have meaningfully improved the app\'s development & user experience. Keep it up!'
    },
    endorsements: ['Committed to Quality'],
    freelancerReview: {
      rating: 5.0,
      text: 'Clear understanding of requirements, requirements are well documented, communication is always there when required. Hopefully will work again on future projects. Thanks.'
    },
    jobDescription: 'Looking for an expert Flutter developer to build a step-counting app with around five core features.',
    budget: '$500.00',
    deliverBy: 'Mar 15, 2025'
  },
  {
    id: 'long-term',
    status: 'completed',
    title: 'Flutter App Development - Long Term',
    dateStart: 'Jan 8, 2025',
    dateEnd: 'Apr 28, 2025',
    earned: '$75.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Faizan is the most top-notch freelancer we have ever hired yet. Highly recommended!'
    },
    endorsements: ['Committed to Quality'],
    freelancerReview: {
      rating: 5.0,
      text: 'Nice to work with. Clear understanding of requirements and communication. Hopefully will work again in future projects. Thanks.'
    },
    jobPrivate: true
  },
  {
    id: 'flutter-developer-saas',
    status: 'completed',
    title: 'Flutter developer — SaaS platform from Figma',
    dateStart: 'Mar 30, 2025',
    dateEnd: 'Apr 12, 2025',
    earned: '$195.00',
    rate: '$15.00 / hr',
    hours: '13 hours',
    jobType: 'Hourly',
    clientReview: { rating: 5.0, text: null },
    freelancerReview: {
      rating: 5.0,
      text: 'It\'s been very nice to work with, clear requirements and communication. Hopefully will work again on future projects.'
    },
    jobDescription: 'Create a Flutter website SaaS platform from Figma file.',
    jobDetails: ['Hourly job', 'Less than 30 hrs/week', '1 to 3 months', 'Intermediate']
  },
  {
    id: 'dev-environment',
    status: 'completed',
    title: 'Urgent / Quick Job - Help Setup Flutter Dev Environment on a PC with Best Practices',
    dateStart: 'Jan 7, 2025',
    dateEnd: 'Jan 7, 2025',
    earned: '$30.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Faizan was fast, efficient, and highly knowledgeable. He went above and beyond by sharing valuable insights and even teaching me things which were beyond the scope of the project. Highly recommended.'
    },
    endorsements: ['Accountable for Outcomes', 'Collaborative', 'Solution Oriented']
  },
  {
    id: 'redesign-mobile',
    status: 'completed',
    title: 'Redesign Mobile Application (Phase 1)',
    dateStart: 'Aug 28, 2024',
    dateEnd: 'Oct 28, 2024',
    earned: '$300.00',
    jobType: 'Fixed price',
    clientReview: { rating: 5.0, text: 'Fast and quickly done the job. Rehire in progress.' },
    endorsements: ['Reliable'],
    freelancerReview: {
      rating: 5.0,
      text: 'Nice to work with. Clear communication and understanding of the requirements. Hopefully will work again.'
    },
    jobDescription: 'Redesign an existing mobile application with improved UI/UX and modern Flutter implementation.',
    budget: '$300.00',
    deliverBy: 'Jul 24, 2024'
  },
  {
    id: 'tutor-php-long',
    status: 'completed',
    title: 'Tutor — Flutter-PHP-MySQL integration (Long-term)',
    dateStart: 'Apr 29, 2024',
    dateEnd: 'Nov 30, 2024',
    earned: '$360.00',
    rate: '$15.00 / hr',
    hours: '24 hours',
    jobType: 'Hourly',
    clientReview: { rating: 5.0, text: null },
    freelancerReview: { rating: 5.0, text: null },
    jobDescription: 'I need a Flutter person to work on transfer of codes from older UI to newer UI.',
    jobDetails: ['Hourly job', 'Less than 30 hrs/week', 'Less than 1 month', 'Intermediate']
  },
  {
    id: 'develop-ui',
    status: 'completed',
    title: 'develop UI in flutter',
    dateStart: 'Jun 19, 2024',
    dateEnd: 'Nov 30, 2024',
    earned: '$200.00',
    rate: '$20.00 / hr',
    hours: '10 hours',
    jobType: 'Hourly',
    clientReview: { rating: 5.0, text: null },
    freelancerReview: { rating: 5.0, text: null },
    jobDescription: 'The scope and deliverables is to build a web app to display UI trigger event log.',
    jobDetails: ['Hourly job', 'Less than 1 month', 'Intermediate']
  },
  {
    id: 'tutor-php-mysql',
    status: 'completed',
    title: 'Tutor — Flutter-PHP-MySQL integration (Short-term)',
    dateStart: 'Apr 2, 2024',
    dateEnd: 'Apr 4, 2024',
    earned: '$90.00',
    rate: '$15.00 / hr',
    hours: '6 hours',
    jobType: 'Hourly',
    clientReview: {
      rating: 5.0,
      text: 'Faizan is grounded, methodological, responsive, helpful and responsible.'
    },
    freelancerResponse: 'Thanks for your feedback.',
    endorsements: ['Clear Communicator', 'Solution Oriented', 'Accountable for Outcomes'],
    freelancerReview: {
      rating: 5.0,
      text: 'Great to work with. Clear understanding and communication. Hopefully will work again on future projects. Thanks!'
    },
    jobDescription: 'I need 2 people to work together — one backend, one frontend — on Flutter-PHP-MySQL integration.',
    jobDetails: ['Hourly job', 'Less than 30 hrs/week', 'Less than 1 month', 'Intermediate']
  },
  {
    id: 'tutor-flutter-error',
    status: 'completed',
    title: 'Tutor to fix flutter error',
    dateStart: 'Jan 29, 2024',
    dateEnd: 'Jan 30, 2024',
    earned: '$30.00',
    rate: '$15.00 / hr',
    hours: '2 hours',
    jobType: 'Hourly',
    clientReview: { rating: 5.0, text: 'Fast and skillful.' },
    freelancerResponse: 'Thank you very much for your feedback.',
    endorsements: ['Reliable', 'Committed to Quality'],
    freelancerReview: {
      rating: 5.0,
      text: 'Nice to work with, clear understanding of requirement. Hopefully work again in future, thanks.'
    },
    jobPrivate: true
  },
  {
    id: 'ticketing-features',
    status: 'completed',
    title: 'Flutter ticketing app add features',
    dateStart: 'Dec 29, 2023',
    dateEnd: 'Jan 3, 2024',
    earned: '$40.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Excellent work! Already signing him up for further projects! Very professional work.'
    },
    endorsements: ['Committed to Quality', 'Professional'],
    freelancerReview: {
      rating: 5.0,
      text: 'Nice to work with, having clear understanding of requirements and clarity in communication. Hopefully will work again on future projects as well. Thanks.'
    },
    jobDescription: 'Good job on the ticketing app. I need you to add features to it.',
    budget: '$40.00'
  },
  {
    id: 'ticketing-frontend',
    status: 'completed',
    title: 'Make a front flutter app for ticketing',
    dateStart: 'Dec 11, 2023',
    dateEnd: 'Dec 12, 2023',
    earned: '$150.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Good professional work! Faizan is good at flutter and he is very easy to work with. Its my third project with him! Will keep coming back :)'
    },
    endorsements: ['Professional', 'Collaborative'],
    freelancerReview: {
      rating: 5.0,
      text: 'Great to work with. Clear communication and understanding in requirements. Hopefully will work together again in future. Thanks.'
    },
    jobDescription: 'Make Flutter app for ticketing with QR functionality.',
    budget: '$150.00'
  },
  {
    id: 'challenge-game',
    status: 'completed',
    title: 'The Challenge Game App Development',
    dateStart: 'Sep 8, 2023',
    dateEnd: 'Dec 9, 2023',
    earned: '$500.00',
    jobType: 'Fixed price',
    noFeedback: true,
    jobPrivate: true
  },
  {
    id: 'flutter-developer-app',
    status: 'completed',
    title: 'Flutter Developer for APP',
    dateStart: 'Jul 11, 2023',
    dateEnd: 'Sep 30, 2023',
    earned: '$312.00',
    rate: '$6.00 / hr',
    hours: '52 hours',
    jobType: 'Hourly',
    clientReview: {
      rating: 5.0,
      text: 'Great working with Faizan on our Mobile App — talented freelancer and very pleasant to work with and gets the job done. Highly recommend him.'
    },
    endorsements: ['Collaborative', 'Committed to Quality', 'Reliable'],
    freelancerReview: {
      rating: 5.0,
      text: 'It\'s been great working with you, always having clear and precise requirements from your end. Due to some reason we have to end this mutually, but wish them best of luck for their future endeavours. Thanks.'
    },
    jobDescription: 'Require a Flutter developer with 4+ years experience to develop our app for our fintech start-up.',
    jobDetails: ['Hourly job', 'More than 30 hrs/week', 'More than 6 months', 'Expert']
  },
  {
    id: 'bug-fix',
    status: 'completed',
    title: 'Flutter App Bug Fix',
    dateStart: 'May 1, 2023',
    dateEnd: 'May 2, 2023',
    earned: '$5.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Clear understanding of requirements. Delivered quality work in quick time. Highly recommended for work on flutter projects. Thanks.'
    },
    endorsements: ['Clear Communicator', 'Committed to Quality', 'Reliable'],
    freelancerReview: {
      rating: 5.0,
      text: 'Clear requirements and communication about the issues. Hopefully will work again in the future. Thanks.'
    },
    jobDescription: 'I have a Flutter app which is having a couple of issues in the release build. Need an expert to diagnose and fix quickly.',
    budget: '$5.00'
  },

  // ─── In progress ─────────────────────────────────────────────
  {
    id: 'epidemiology-app',
    status: 'in_progress',
    title: 'Create epidemiology app in Flutter',
    dateStart: 'Jan 31, 2026',
    dateEnd: 'Present',
    earned: '$1,500.00',
    jobType: 'Fixed price',
    jobPrivate: true
  },
  {
    id: 'mvp-social-app',
    status: 'in_progress',
    title: 'Flutter Developer needed for MVP Social App (Firebase + Voting System)',
    dateStart: 'May 5, 2025',
    dateEnd: 'Present',
    earned: '$1,300.00',
    budget: '$3,000.00',
    jobType: 'Fixed price',
    jobDescription: 'Building an MVP for a mobile social app with Firebase backend and a voting system.'
  },
  {
    id: 'app-upgrades',
    status: 'in_progress',
    title: 'Flutter Developer needed for App Upgrades',
    dateStart: 'Apr 14, 2025',
    dateEnd: 'Present',
    budget: '$350.00',
    jobType: 'Fixed price',
    jobDescription: 'Upgrade an existing Flutter sports app for kids (already live on App Store and Google Play) combining social media features.'
  },
  {
    id: 'vehicle-photography',
    status: 'in_progress',
    title: 'Experienced iOS & Android Developer for Vehicle Photography App',
    dateStart: 'Apr 7, 2025',
    dateEnd: 'Present',
    earned: '$1,000.00',
    jobType: 'Fixed price',
    deliverBy: 'May 7, 2025',
    jobDescription: 'Cross-platform mobile app development for vehicle photography workflows on iOS and Android.'
  },
  {
    id: 'singapore-travel',
    status: 'in_progress',
    title: 'Flutter Developer for Singapore Travel App (60% Complete)',
    dateStart: 'Apr 3, 2025',
    dateEnd: 'Present',
    earned: '$100.00',
    budget: '$740.00',
    jobType: 'Fixed price',
    jobDescription: 'Complete Phase 1 of a travel app focused on Singapore maps — continuing development on an existing codebase.'
  },
  {
    id: 'update-flutter-ongoing',
    status: 'in_progress',
    title: 'Update code to newest Flutter version',
    dateStart: 'May 24, 2025',
    dateEnd: 'Present',
    earned: '$500.00',
    jobType: 'Fixed price',
    clientReview: {
      rating: 5.0,
      text: 'Faizan showed great patience in working with a demanding client like me. I am grateful to him for this and look forward to working with him in the future.',
      date: 'Jul 14, 2025'
    },
    jobDescription: 'We have a Flutter member application with a list of members and events that is outdated but was fully functional — upgrade to the newest Flutter version.',
    budget: '$500.00',
    deliverBy: 'Jun 23, 2025'
  },
  {
    id: 'figma-ai-firebase',
    status: 'in_progress',
    title: 'Flutter Mobile App Development from Figma Design (AI Integration + Firebase)',
    dateStart: 'Mar 24, 2025',
    dateEnd: 'Present',
    earned: '$1,500.00',
    jobType: 'Fixed price',
    jobDescription: 'Build a Flutter mobile app from Figma designs with AI integration and Firebase backend.'
  },
  {
    id: 'figma-ui-impl',
    status: 'in_progress',
    title: 'Flutter Developer for UI design (Figma) implementation',
    dateStart: 'Nov 5, 2025',
    dateEnd: 'Present',
    earned: '$850.00',
    jobType: 'Fixed price',
    jobDescription: 'Implement a new UI design (in Figma) into an existing Flutter application.'
  },
  {
    id: 'android-product-presentation',
    status: 'in_progress',
    title: 'Simple Android app for product presentation',
    dateStart: 'Oct 3, 2025',
    dateEnd: 'Present',
    earned: '$850.00',
    jobType: 'Fixed price',
    jobDescription: 'Simple Android application for product presentation and showcase.'
  },
  {
    id: 'redesign-mobile-ongoing',
    status: 'in_progress',
    title: 'Redesign Mobile Application (Phase 2)',
    dateStart: 'Oct 28, 2024',
    dateEnd: 'Present',
    earned: '$144.00',
    jobType: 'Fixed price',
    jobPrivate: true
  },
  {
    id: 'flutter-dev-modifications',
    status: 'in_progress',
    title: 'Flutter Developer — App modifications',
    dateStart: 'Sep 17, 2024',
    dateEnd: 'Present',
    earned: '$315.00',
    rate: '$15.00 / hr',
    hours: '21 hours',
    jobType: 'Hourly',
    jobDescription: 'I have a Flutter application that needs some modifications.',
    jobDetails: ['Hourly job', 'Less than 30 hrs/week', 'Less than 1 month', 'Intermediate']
  },
  {
    id: 'truck-dispatching',
    status: 'in_progress',
    title: 'Truck Dispatching App Development',
    dateStart: 'May 13, 2024',
    dateEnd: 'Present',
    budget: '$700.00',
    jobType: 'Fixed price',
    jobDescription: 'Build a truck dispatching app for a trucking company — scheduling, dispatch, and fleet management.'
  },
  {
    id: 'react-aspnet-flutter',
    status: 'in_progress',
    title: 'Flutter iOS and Android App for a React/ASP.NET Core Web Application',
    dateStart: 'Apr 14, 2024',
    dateEnd: 'Present',
    budget: '$800.00',
    jobType: 'Fixed price',
    jobDescription: 'We have already developed a web application with React and ASP.NET Core — build the companion Flutter mobile app for iOS and Android (frontend already developed).'
  }
];

function renderStars(rating) {
  if (!rating) return '';
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function truncate(text, max = 140) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max).trim() + '…';
}

function buildReviewListItem(project) {
  const rating = project.clientReview?.rating || 5;
  const preview = truncate(project.clientReview.text);

  return `
    <button type="button" class="review-item reveal" data-review-id="${project.id}">
      <h3 class="review-item-title">${project.title}</h3>
      <blockquote class="review-item-quote">"${preview}"</blockquote>
      <div class="review-item-rating">
        <span class="review-stars" aria-label="${rating} out of 5">${renderStars(rating)}</span>
        <span class="review-rating-num">${rating.toFixed(1)}</span>
      </div>
      <span class="review-item-dates">${project.dateStart} – ${project.dateEnd}</span>
      <span class="review-item-cta">View project →</span>
    </button>
  `;
}

function buildModalContent(project) {
  let html = '';

  html += `<section class="review-modal-section review-modal-job">
    <h4>Project details</h4>`;
  if (project.jobDescription) {
    html += `<p>${project.jobDescription}</p>`;
  } else if (project.jobPrivate) {
    html += '<p class="review-job-private">Private project</p>';
  } else {
    html += `<p>${project.title}</p>`;
  }
  if (project.jobType) {
    html += `<p class="review-job-detail">${project.jobType}</p>`;
  }
  html += `</section>`;

  if (project.clientReview?.text) {
    html += `<section class="review-modal-section">
      <h4>Client feedback</h4>
      <div class="review-modal-rating">
        <span class="review-stars review-stars-lg">${renderStars(project.clientReview.rating)}</span>
        <span>${project.clientReview.rating.toFixed(1)}</span>
        ${project.clientReview.date ? `<span class="review-modal-date">${project.clientReview.date}</span>` : ''}
      </div>
      <blockquote>"${project.clientReview.text}"</blockquote>
    </section>`;
  }

  return html;
}

function initReviews() {
  const list = document.getElementById('reviewsList');
  const modal = document.getElementById('reviewModal');
  const modalTitle = document.getElementById('reviewModalTitle');
  const modalDates = document.getElementById('reviewModalDates');
  const modalBody = document.getElementById('reviewModalBody');
  if (!list || !modal) return;

  const happyClients = PROJECTS.filter(p => p.clientReview?.text);
  const projectMap = Object.fromEntries(PROJECTS.map(p => [p.id, p]));

  const summaryHappyClients = document.getElementById('summaryHappyClients');
  if (summaryHappyClients) summaryHappyClients.textContent = happyClients.length;

  function renderList() {
    if (happyClients.length === 0) {
      list.innerHTML = '<div class="reviews-empty">Client feedback will appear here soon.</div>';
      return;
    }
    list.innerHTML = happyClients.map(buildReviewListItem).join('');
    observeReveals(list);
  }

  function openReview(id) {
    const project = projectMap[id];
    if (!project) return;
    modalTitle.textContent = project.title;
    modalDates.textContent = `${project.dateStart} – ${project.dateEnd}`;
    modalBody.innerHTML = buildModalContent(project);
    modal.hidden = false;
    document.body.classList.add('lightbox-open');
  }

  function closeReview() {
    modal.hidden = true;
    document.body.classList.remove('lightbox-open');
  }

  list.addEventListener('click', (e) => {
    const item = e.target.closest('.review-item');
    if (item) openReview(item.dataset.reviewId);
  });

  modal.querySelectorAll('[data-review-close]').forEach(el => {
    el.addEventListener('click', closeReview);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.hidden && e.key === 'Escape') closeReview();
  });

  function observeReveals(container) {
    container.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }

  renderList();
}

document.addEventListener('DOMContentLoaded', initReviews);
