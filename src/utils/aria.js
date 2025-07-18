export const focusableElements = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];
  
  export const trapFocus = (element) => {
    const focusable = [...element.querySelectorAll(focusableElements.join(','))];
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];
  
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
  
    element.addEventListener('keydown', handleKeyDown);
    return () => element.removeEventListener('keydown', handleKeyDown);
  };
  
  export const announceToScreenReader = (message, priority = 'polite') => {
    const liveRegion = document.getElementById('a11y-live-region') || 
      (() => {
        const el = document.createElement('div');
        el.id = 'a11y-live-region';
        el.className = 'sr-only';
        el.setAttribute('aria-live', priority);
        document.body.appendChild(el);
        return el;
      })();
    
    liveRegion.textContent = message;
  };