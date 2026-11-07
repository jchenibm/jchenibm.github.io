/**
 * Giscus Comments Component for Billy Chen's Blog
 * Features:
 * - Lazy loading inside an expandable <details> drawer
 * - Zero performance impact on initial page load
 * - Automatic light/dark theme adaptation and live sync
 * - Auto-expand when URL contains #comments hash
 * - Auto mount before footer or at the bottom of container
 */
(function() {
  if (window.__GISCUS_COMMENTS_LOADED__) return;
  window.__GISCUS_COMMENTS_LOADED__ = true;

  const GISCUS_CONFIG = {
    repo: 'jchenibm/jchenibm.github.io',
    repoId: 'MDEwOlJlcG9zaXRvcnk0OTM1NTIwMQ==',
    category: 'General',
    categoryId: 'DIC_kwDOAvEZwc4DKluX',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    lang: 'zh-CN',
    lightTheme: 'light',
    darkTheme: 'dark_dimmed'
  };

  function getPreferredTheme() {
    const isLight = document.body.classList.contains('theme-light') ||
                    document.body.classList.contains('light-theme') ||
                    document.documentElement.getAttribute('data-theme') === 'light' ||
                    document.body.getAttribute('data-theme') === 'light';
    return isLight ? GISCUS_CONFIG.lightTheme : GISCUS_CONFIG.darkTheme;
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'giscus-custom-styles';
    style.textContent = `
      .giscus-drawer-wrapper {
        width: 100%;
        max-width: 900px;
        margin: 48px auto 32px auto;
        padding: 0 16px;
        box-sizing: border-box;
      }
      .giscus-details {
        background: var(--bg-card, rgba(255, 255, 255, 0.03));
        border: 1px solid var(--border-color, rgba(255, 255, 255, 0.12));
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      }
      .giscus-details:hover {
        border-color: var(--accent, #00ff9f);
      }
      .giscus-summary {
        padding: 16px 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: inherit;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary, currentColor);
        user-select: none;
        list-style: none;
        outline: none;
      }
      .giscus-summary::-webkit-details-marker {
        display: none;
      }
      .giscus-summary-left {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .giscus-badge {
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        color: var(--text-secondary, #888);
      }
      .giscus-arrow {
        display: inline-block;
        transition: transform 0.25s ease;
        font-size: 12px;
        color: var(--text-secondary, #888);
      }
      .giscus-details[open] .giscus-arrow {
        transform: rotate(180deg);
      }
      .giscus-content-body {
        padding: 16px 20px 24px 20px;
        border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
      }
      .giscus-loading {
        text-align: center;
        padding: 30px;
        color: var(--text-secondary, #888);
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .giscus-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(127, 127, 127, 0.2);
        border-top-color: var(--accent, #00ff9f);
        border-radius: 50%;
        animation: giscus-spin 0.8s linear infinite;
      }
      @keyframes giscus-spin {
        to { transform: rotate(360deg); }
      }

      /* Light mode adaptation */
      body.theme-light .giscus-details,
      body.light-theme .giscus-details,
      [data-theme="light"] .giscus-details {
        background: var(--paper-200, #F4F3EE);
        border-color: var(--border-color, #E2E0D8);
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      }
      body.theme-light .giscus-summary,
      body.light-theme .giscus-summary,
      [data-theme="light"] .giscus-summary {
        color: var(--ink-100, #2A2825);
      }
      body.theme-light .giscus-badge,
      body.light-theme .giscus-badge,
      [data-theme="light"] .giscus-badge {
        background: rgba(0, 0, 0, 0.06);
        color: var(--ink-300, #5A564F);
      }
      body.theme-light .giscus-content-body,
      body.light-theme .giscus-content-body,
      [data-theme="light"] .giscus-content-body {
        border-top-color: var(--border-color, #E2E0D8);
      }

      @media (max-width: 600px) {
        .giscus-drawer-wrapper {
          padding: 0 12px;
          margin: 32px auto 20px auto;
        }
        .giscus-summary {
          padding: 14px 16px;
          font-size: 14px;
        }
        .giscus-content-body {
          padding: 12px 14px 20px 14px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  let isGiscusLoaded = false;
  function loadGiscus(container) {
    if (isGiscusLoaded) return;
    isGiscusLoaded = true;

    const theme = getPreferredTheme();
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', GISCUS_CONFIG.repo);
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
    script.setAttribute('data-category', GISCUS_CONFIG.category);
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled);
    script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
    script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', GISCUS_CONFIG.lang);
    script.crossOrigin = 'anonymous';
    script.async = true;

    script.onload = () => {
      const checkIframe = setInterval(() => {
        const iframe = container.querySelector('iframe.giscus-frame');
        if (iframe) {
          clearInterval(checkIframe);
          const loader = container.querySelector('.giscus-loading');
          if (loader) loader.style.display = 'none';
        }
      }, 150);
      setTimeout(() => clearInterval(checkIframe), 6000);
    };

    container.appendChild(script);
  }

  function syncThemeToIframe() {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe || !iframe.contentWindow) return;
    const theme = getPreferredTheme();
    iframe.contentWindow.postMessage({
      giscus: {
        setConfig: { theme: theme }
      }
    }, 'https://giscus.app');
  }

  function setupThemeObserver() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme') {
          syncThemeToIframe();
          break;
        }
      }
    });
    observer.observe(document.body, { attributes: true });
    observer.observe(document.documentElement, { attributes: true });
  }

  function init() {
    injectStyles();

    const wrapper = document.createElement('section');
    wrapper.className = 'giscus-drawer-wrapper';
    wrapper.id = 'comments';

    wrapper.innerHTML = `
      <details class="giscus-details">
        <summary class="giscus-summary">
          <div class="giscus-summary-left">
            <span>💬 参与读者讨论与留言</span>
            <span class="giscus-badge">GitHub Discussions</span>
          </div>
          <span class="giscus-arrow">▼</span>
        </summary>
        <div class="giscus-content-body">
          <div class="giscus-loading">
            <div class="giscus-spinner"></div>
            <span>正在连接讨论区...</span>
          </div>
          <div class="giscus-frame-container"></div>
        </div>
      </details>
    `;

    const details = wrapper.querySelector('.giscus-details');
    const container = wrapper.querySelector('.giscus-frame-container');
    details.addEventListener('toggle', () => {
      if (details.open) {
        loadGiscus(container);
      }
    });

    // Auto-open if URL hash points to comments
    if (window.location.hash === '#comments') {
      details.open = true;
      loadGiscus(container);
      setTimeout(() => {
        wrapper.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }

    const footer = document.querySelector('footer');
    const mainContainer = document.querySelector('.container') || document.querySelector('main') || document.querySelector('article');

    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(wrapper, footer);
    } else if (mainContainer) {
      mainContainer.appendChild(wrapper);
    } else {
      document.body.appendChild(wrapper);
    }

    setupThemeObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
