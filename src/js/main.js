// Este arquivo contém o código JavaScript que adiciona interatividade à página. 

document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Obrigado por seu interesse! Em breve, você receberá mais informações.');
    });
  }
});
