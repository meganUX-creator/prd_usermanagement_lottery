// Prototype Modal Controls
function openPrototypeModal(url) {
  const modal = document.getElementById('prototype-modal');
  const iframe = document.getElementById('prototype-iframe');
  if (!modal || !iframe) return;
  iframe.src = url || 'https://pm-doc-new-sport.pages.dev/content.html?mock=normal';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePrototypeModal(e) {
  const modal = document.getElementById('prototype-modal');
  const iframe = document.getElementById('prototype-iframe');
  if (!modal || !iframe) return;
  modal.classList.remove('active');
  iframe.src = '';
  document.body.style.overflow = '';
}

function switchModalIframe(url) {
  const iframe = document.getElementById('prototype-iframe');
  if (!iframe) return;
  iframe.src = url;
  const badge = document.getElementById('modal-state-badge');
  if (!badge) return;
  if (url.includes('nodata')) badge.innerText = 'NO DATA STATE';
  else if (url.includes('extreme')) badge.innerText = 'EXTREME STATE';
  else badge.innerText = 'NORMAL STATE';
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePrototypeModal();
});

// Back to top observer
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

// TOC Filter Search
function filterTOC() {
  const input = document.getElementById('toc-filter');
  if (!input) return;
  const query = input.value.toLowerCase().trim();
  const items = document.querySelectorAll('#toc-list > .toc-item');
  
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Field Dictionary Table Filtering
function filterFieldTable(category) {
  const tabs = document.querySelectorAll('#field-tabs .filter-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }

  const rows = document.querySelectorAll('#field-dictionary-table tbody tr');
  rows.forEach(row => {
    const rowCat = row.getAttribute('data-cat');
    if (category === 'all' || rowCat === category) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function searchFieldTable() {
  const input = document.getElementById('field-keyword');
  if (!input) return;
  const keyword = input.value.toLowerCase().trim();
  const rows = document.querySelectorAll('#field-dictionary-table tbody tr');
  
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    if (text.includes(keyword)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Active Sub-anchor ScrollSpy for current page
document.addEventListener('DOMContentLoaded', () => {
  const subHeadings = document.querySelectorAll('h3.sub-title[id]');
  const subLinks = document.querySelectorAll('.toc-sublink');

  if (subHeadings.length > 0 && subLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let currentId = '';
      subHeadings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        if (top <= 140) {
          currentId = heading.getAttribute('id');
        }
      });

      if (currentId) {
        subLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && (href === '#' + currentId || href.endsWith('#' + currentId))) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
});

// Section 5.1 Interactive View Mode Switcher
function switchSection5ViewMode(mode) {
  const listPanel = document.getElementById('preview-list-container');
  const nestedPanel = document.getElementById('preview-nested-container');
  const btnList = document.getElementById('btn-mode-list');
  const btnNested = document.getElementById('btn-mode-nested');
  const statusText = document.getElementById('current-mode-status');
  const boxList = document.getElementById('feature-box-list');
  const boxNested = document.getElementById('feature-box-nested');

  if (mode === 'nested') {
    if (listPanel) listPanel.style.display = 'none';
    if (nestedPanel) nestedPanel.style.display = 'block';
    if (btnList) {
      btnList.style.background = 'transparent';
      btnList.style.color = 'var(--text-muted)';
      btnList.style.boxShadow = 'none';
    }
    if (btnNested) {
      btnNested.style.background = 'var(--accent)';
      btnNested.style.color = '#fff';
      btnNested.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    if (statusText) {
      statusText.innerText = '當前顯示：巢狀模式 (圖二 · 代理體系卡片)';
      statusText.style.color = 'var(--accent)';
    }
    if (boxList) {
      boxList.style.borderColor = 'var(--border-subtle)';
      boxList.style.background = 'var(--bg-card)';
    }
    if (boxNested) {
      boxNested.style.borderColor = 'var(--accent)';
      boxNested.style.background = 'rgba(124, 58, 237, 0.03)';
    }
  } else {
    if (listPanel) listPanel.style.display = 'block';
    if (nestedPanel) nestedPanel.style.display = 'none';
    if (btnList) {
      btnList.style.background = 'var(--primary)';
      btnList.style.color = '#fff';
      btnList.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    if (btnNested) {
      btnNested.style.background = 'transparent';
      btnNested.style.color = 'var(--text-muted)';
      btnNested.style.boxShadow = 'none';
    }
    if (statusText) {
      statusText.innerText = '當前顯示：列表模式 (圖一 · 默認展示)';
      statusText.style.color = 'var(--primary)';
    }
    if (boxList) {
      boxList.style.borderColor = 'var(--primary)';
      boxList.style.background = 'rgba(37, 99, 235, 0.02)';
    }
    if (boxNested) {
      boxNested.style.borderColor = 'var(--border-subtle)';
      boxNested.style.background = 'var(--bg-card)';
    }
  }
}

