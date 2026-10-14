/**
 * Reusable Accessible Modal Dialog Component
 * 
 * Provides clean inspectable modals for:
 * - Module syllabus and PDF placeholders (VIEW module)
 * - Experiment Aim, Procedure, Code Editor, and Run Output placeholders (VIEW experiment)
 * - Add Module dialogue placeholder
 * - View More consolidated syllabus dialogue placeholder
 */

let activeModalElement = null;

export function openModal({ title, bodyHtml, footerButtonsHtml = '' }) {
  closeModal(); // Ensure any existing modal is closed

  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop active';
  modalBackdrop.id = 'app-modal-backdrop';
  modalBackdrop.setAttribute('role', 'dialog');
  modalBackdrop.setAttribute('aria-modal', 'true');
  modalBackdrop.setAttribute('aria-labelledby', 'modal-dialog-title');

  modalBackdrop.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-dialog-title">${title}</h3>
        <button type="button" class="modal-close-btn" id="modal-close-button" aria-label="Close dialog">&times;</button>
      </div>
      <div class="modal-body">
        ${bodyHtml}
      </div>
      <div class="modal-footer">
        ${footerButtonsHtml || '<button type="button" class="btn btn-secondary btn-sm" id="modal-default-close-btn">Close</button>'}
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);
  activeModalElement = modalBackdrop;

  // Prevent background scroll
  document.body.style.overflow = 'hidden';

  // Event handlers
  const closeBtn = modalBackdrop.querySelector('#modal-close-button');
  const defaultCloseBtn = modalBackdrop.querySelector('#modal-default-close-btn');

  const handleClose = () => closeModal();

  if (closeBtn) closeBtn.addEventListener('click', handleClose);
  if (defaultCloseBtn) defaultCloseBtn.addEventListener('click', handleClose);

  // Close on backdrop click outside card
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      handleClose();
    }
  });

  // Close on Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
      document.removeEventListener('keydown', handleKeyDown);
    }
  };
  document.addEventListener('keydown', handleKeyDown);
}

export function closeModal() {
  if (activeModalElement) {
    activeModalElement.classList.remove('active');
    setTimeout(() => {
      if (activeModalElement && activeModalElement.parentNode) {
        activeModalElement.parentNode.removeChild(activeModalElement);
      }
      activeModalElement = null;
      document.body.style.overflow = '';
    }, 150);
  }
}
