const addNewPartyBtn = document.querySelector('#add-new-btn');
const modal = document.querySelector('#add-new-party-modal');

const showModal = () => {
  if(!modal.classList.contains('is-visible')){
     modal.classList.add('is-visible');
  }
}
const hideModal = () => {
  if(modal.classList.contains('is-visible')){
    modal.classList.remove('is-visible');
  }
}

addNewPartyBtn.addEventListener('click', () => {
  if(modal.classList.contains('is-visible')){
    hideModal()
  } else {
    showModal()
  }
})
modal.addEventListener('click', (e) => {
  if(modal.classList.contains('is-visible') && e.target.id === 'add-new-party-modal'){
    hideModal()
  }
})