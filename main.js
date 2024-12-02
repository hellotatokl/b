<script>
  gsap.registerPlugin(ScrollTrigger);

  // Анимация для heading_wrapper (снизу вверх, самая первая)
  gsap.from(".heading_wrapper", {
    y: "-3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-about",
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false,
    },
  });

  // Анимация для home_about_hi-img (слева направо, только ширина)
  gsap.from(".home_about_hi-img", {
    width: 0,
    duration: 1.2, // Увеличенная длительность
    delay: 0.2,
    ease: "expo.out", // Плавный экспоненциальный выход
    scrollTrigger: {
      trigger: ".home_section-about", // Триггер элемента
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false,
    },
  });

  // Анимация для home_about_photo-img (справа налево, только ширина)
  gsap.from(".home_about_photo-img", {
    width: 0,
    duration: 1.2, // Увеличенная длительность
    delay: 0.4, // Немного позже, чем hi-img
    ease: "expo.out", // Плавный экспоненциальный выход
    scrollTrigger: {
      trigger: ".home_section-about",
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false,
    },
  });

  // Анимация текста home_about-p (снизу вверх)
  gsap.from(".home_about-p", {
    y: "3.125rem",
    opacity: 0,
    duration: 0.6, // Длительность текста
    delay: 0.8, // Чуть позже, чем картинки
    ease: "sine.out", // Плавный выход для текста
    scrollTrigger: {
      trigger: ".home_section-about",
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false,
    },
  });

  // Анимация для навигации .nav (появляется сверху вниз)
  gsap.from(".nav", {
    y: "3.125rem", // Эквивалент 50px
    opacity: 0,
    duration: 0.6, // Длительность
    ease: "sine.out", // Плавный выход
  });

  // Анимация для home_hero_top-wrapper (появляется сверху вниз с увеличенной задержкой)
  gsap.from(".home_hero_top-wrapper", {
    y: "3.125rem", // Эквивалент 50px
    opacity: 0,
    duration: 0.6, // Длительность
    delay: 0.5, // Увеличенная задержка
    ease: "sine.out", // Плавный выход
  });

  // Анимация для home_work_top (снизу вверх, самая первая)
  gsap.from(".home_work_top", {
    y: "3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-work", // Триггер - секция work
      start: "20% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });

  // Анимация для home_work-list-wrapper (снизу вверх, чуть позже)
  gsap.from(".home_work-list-wrapper", {
    y: "3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    delay: 0.3, // Задержка после home_work_top
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-work", // Триггер - секция work
      start: "20% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });

  // Анимация для .link-more.home_works (снизу вверх, в конце секции home_section-work)
  gsap.from(".home_section-work .link-more.home_works", {
    y: "3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    delay: 0.6, // Задержка, чтобы анимация происходила после предыдущих
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-work", // Триггер - секция work
      start: "75% bottom", // Анимация начинается, когда 75% секции становится видимым
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });

  // Анимация для home_services_component (сверху вниз на 45% секции home_section-services)
  gsap.from(".home_section-services .home_services_component", {
    y: "3.125rem", // Смещение сверху
    opacity: 0,
    duration: 0.6, // Длительность
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-services", // Триггер - секция services
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });

  // Анимация для home_testimonials_component (снизу вверх на 45% секции home_section-testimonials)
  gsap.from(".home_section-testimonials .home_testimonials_component", {
    y: "3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-testimonials", // Триггер - секция testimonials
      start: "45% bottom", // Анимация начинается, когда 45% секции становятся видимыми
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });

  // Анимация для .link-more.home_blog (снизу вверх, в секции home_section-blog)
  gsap.from(".home_section-blog .link-more.home_blog", {
    y: "3.125rem", // Смещение снизу
    opacity: 0,
    duration: 0.6, // Длительность
    delay: 0.6, // Задержка, чтобы анимация происходила после предыдущих
    ease: "sine.out", // Плавный выход
    scrollTrigger: {
      trigger: ".home_section-blog", // Триггер - секция blog
      start: "75% bottom", // Анимация начинается, когда 75% секции становится видимым
      toggleActions: "play none none none",
      markers: false, // Установите true для отладки
    },
  });
</script>
