// Modal Logic - Accessible
const modal = document.getElementById('confirm-modal');
const deployForm = document.querySelector('form[aria-label="Deploy model form"]');
const deployBtn = deployForm.querySelector('button[type="submit"]');

// Open modal on form submit
deployForm.addEventListener('submit', (e) => {
  e.preventDefault(); // page reload aagathu
  if (deployForm.checkValidity()) {
    modal.showModal(); // Native accessible modal
  } else {
    deployForm.reportValidity();
  }
});

// Close handling - focus management
modal.addEventListener('close', () => {
  if (modal.returnValue === 'confirm') {
    alert('✅ Model Deployed Successfully!');
    deployForm.reset();
  }
  deployBtn.focus(); // Focus back to button - A11y rule
});

// Escape key auto handled by <dialog>
// Focus trap auto handled by <dialog> - No extra JS needed!