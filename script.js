document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const header = document.querySelector("header")
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
    const navLinks = document.querySelectorAll(".nav-link")
    const backToTop = document.querySelector(".back-to-top")
    const cursorFollower = document.querySelector(".cursor-follower")
    const statNumbers = document.querySelectorAll(".stat-number")
  
    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      nav.classList.toggle("active")
      document.body.classList.toggle("no-scroll")
    })
  
    // Close menu when clicking on a nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        nav.classList.remove("active")
        document.body.classList.remove("no-scroll")
      })
    })
  
    // Header scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
  
      // Back to top button visibility
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
  
      // Animate stats when in viewport
      animateStatsWhenVisible()
    })
  
    // Back to top functionality
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Custom cursor (only on desktop)
    if (window.innerWidth > 768) {
      const medallionCursor = document.querySelector(".medallion-cursor")
      medallionCursor.style.display = "block"
  
      setTimeout(() => {
        medallionCursor.style.opacity = "1"
      }, 1000)
  
      document.addEventListener("mousemove", (e) => {
        medallionCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
  
      // Cursor hover effect on interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, .card, .image-container, .character-item, .bestiary-card",
      )
  
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          medallionCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1.5)`
          medallionCursor.style.opacity = "0.7"
        })
  
        element.addEventListener("mouseleave", () => {
          medallionCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`
          medallionCursor.style.opacity = "1"
        })
      })
    }
  
    // Stats counter animation
    function animateStatsWhenVisible() {
      statNumbers.forEach((stat) => {
        if (isElementInViewport(stat) && !stat.classList.contains("animated")) {
          stat.classList.add("animated")
          const targetValue = Number.parseInt(stat.getAttribute("data-count"))
          animateCounter(stat, targetValue)
        }
      })
    }
  
    function animateCounter(element, target) {
      let current = 0
      const increment = target / 50 // Adjust for animation speed
      const timer = setInterval(() => {
        current += increment
        element.textContent = Math.floor(current)
        if (current >= target) {
          element.textContent = target
          clearInterval(timer)
        }
      }, 30)
    }
  
    // Check if element is in viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Parallax effect for hero section
    const hero = document.querySelector(".hero")
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
      }
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".content-grid, .cards-container")
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", revealOnScroll)
  
    // Initialize animations
    revealOnScroll()
    animateStatsWhenVisible()
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const header = document.querySelector("header")
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
    const navLinks = document.querySelectorAll(".nav-link")
    const backToTop = document.querySelector(".back-to-top")
    const medallionCursor = document.querySelector(".medallion-cursor")
    const loadingScreen = document.querySelector(".loading-screen")
    const loadingProgress = document.querySelector(".loading-progress")
    const characterItems = document.querySelectorAll(".character-item")
    const characterImages = document.querySelectorAll(".character-image")
  
    // Loading Screen
    let progress = 0
    const loadingInterval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        clearInterval(loadingInterval)
        setTimeout(() => {
          loadingScreen.classList.add("hidden")
        }, 500)
      }
      loadingProgress.style.width = `${progress}%`
    }, 200)
  
    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      nav.classList.toggle("active")
      document.body.classList.toggle("no-scroll")
    })
  
    // Close menu when clicking on a nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        nav.classList.remove("active")
        document.body.classList.remove("no-scroll")
      })
    })
  
    // Header scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
  
      // Back to top button visibility
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
    })
  
    // Back to top functionality
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Custom cursor (only on desktop)
    if (window.innerWidth > 768) {
      medallionCursor.style.display = "block"
  
      setTimeout(() => {
        medallionCursor.style.opacity = "1"
      }, 1000)
  
      document.addEventListener("mousemove", (e) => {
        medallionCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
  
      // Cursor hover effect on interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, .card, .image-container, .character-item, .bestiary-card",
      )
  
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          medallionCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1.5)`
          medallionCursor.style.opacity = "0.7"
        })
  
        element.addEventListener("mouseleave", () => {
          medallionCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`
          medallionCursor.style.opacity = "1"
        })
      })
    }
  
    // Character Showcase
    characterItems.forEach((item) => {
      item.addEventListener("click", function () {
        const character = this.getAttribute("data-character")
  
        // Remove active class from all items
        characterItems.forEach((item) => item.classList.remove("active"))
        characterImages.forEach((image) => image.classList.remove("active"))
  
        // Add active class to selected item and image
        this.classList.add("active")
        document.getElementById(character).classList.add("active")
      })
    })
  
    // Parallax effect for hero section
    const hero = document.querySelector(".hero")
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
      }
    })
  
    // Create particles for hero section
    const heroParticles = document.querySelector(".hero-particles")
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("span")
      particle.classList.add("particle")
  
      // Random position
      const posX = Math.random() * 100
      const posY = Math.random() * 100
  
      // Random size
      const size = Math.random() * 3 + 1
  
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1
  
      // Random animation duration
      const duration = Math.random() * 20 + 10
  
      // Set styles
      particle.style.cssText = `
              position: absolute;
              top: ${posY}%;
              left: ${posX}%;
              width: ${size}px;
              height: ${size}px;
              background-color: rgba(199, 167, 88, ${opacity});
              border-radius: 50%;
              animation: float ${duration}s infinite ease-in-out;
              animation-delay: ${Math.random() * 5}s;
          `
  
      heroParticles.appendChild(particle)
    }
  
    // Add floating animation
    const style = document.createElement("style")
    style.innerHTML = `
          @keyframes float {
              0%, 100% {
                  transform: translateY(0) translateX(0);
              }
              25% {
                  transform: translateY(-20px) translateX(10px);
              }
              50% {
                  transform: translateY(0) translateX(20px);
              }
              75% {
                  transform: translateY(20px) translateX(10px);
              }
          }
      `
    document.head.appendChild(style)
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".content-grid, .cards-container, .bestiary-grid")
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active")
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for reveal elements
    revealElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(50px)"
      element.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    })
  
    window.addEventListener("scroll", revealOnScroll)
  
    // Initialize animations
    revealOnScroll()
  })
  
  