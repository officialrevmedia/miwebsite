/* Muraqabah Initiative · site script (no dependencies, ~3 KB) */
(function () {
  'use strict'

  // ------------------------------------------------------------------
  // Google Analytics 4. Paste your Measurement ID between the quotes,
  // for example 'G-ABC123XYZ9'. Leave empty to keep analytics off.
  // ------------------------------------------------------------------
  var GA_MEASUREMENT_ID = ''

  var doc = document.documentElement

  // Reveal-on-scroll for content below the fold only (never hides what is already visible).
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('is-pending'); io.unobserve(e.target) }
      })
    }, { rootMargin: '0px 0px -8% 0px' })
    var vh = window.innerHeight
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (el.getBoundingClientRect().top > vh) { el.classList.add('is-pending'); io.observe(el) }
    })
  }

  // Lite YouTube embed: loads the player only when the visitor presses play.
  document.querySelectorAll('[data-yt]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.parentNode
      var id = btn.getAttribute('data-yt')
      var spinner = document.createElement('div')
      spinner.className = 'spinner'
      spinner.setAttribute('role', 'status')
      spinner.innerHTML = '<span class="sr-only">Loading video</span>'
      var iframe = document.createElement('iframe')
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0'
      iframe.title = btn.getAttribute('data-title') || 'YouTube video'
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      iframe.allowFullscreen = true
      iframe.addEventListener('load', function () { spinner.remove() })
      wrap.innerHTML = ''
      wrap.appendChild(iframe)
      wrap.appendChild(spinner)
      track('video_play', { video_id: id })
    })
  })

  // Close the mobile menu after choosing a link, and with Escape.
  var menu = document.querySelector('.nav-mobile')
  if (menu) {
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) menu.removeAttribute('open') })
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu.removeAttribute('open') })
  }

  // Registration and donation buttons: brief loading state + analytics event.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]')
    if (!a) return
    var href = a.getAttribute('href')
    if (/zeffy\.com/.test(href)) {
      track(/donation-form\/(support|sponsor)/.test(href) ? 'donate_click' : 'register_click', { link_url: href, link_text: a.textContent.trim().slice(0, 80) })
      if (a.classList.contains('btn')) {
        a.setAttribute('data-loading', '')
        setTimeout(function () { a.removeAttribute('data-loading') }, 2500)
      }
    } else if (/chat\.whatsapp\.com/.test(href)) {
      track('join_whatsapp', { link_url: href })
    } else if (/^mailto:/.test(href)) {
      track('email_click', {})
    }
  })
  window.addEventListener('pageshow', function () {
    document.querySelectorAll('[data-loading]').forEach(function (b) { b.removeAttribute('data-loading') })
  })

  // Analytics loader (only runs when an ID is set).
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {})
  }
  if (GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
    var s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID
    document.head.appendChild(s)
  }

  doc.classList.add('js-ready')
})()
