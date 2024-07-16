

function replaceFrame(imageId, iframeId) {
    const image = document.getElementById(imageId);
    const iframe = document.getElementById(iframeId);
    image.style.opacity = '0';
    image.style.visibility = 'hidden';
    iframe.style.opacity = '1';
    iframe.style.visibility = 'visible';
}

function restoreImage(imageId, iframeId) {
    const image = document.getElementById(imageId);
    const iframe = document.getElementById(iframeId);
    iframe.style.opacity = '0';
    iframe.style.visibility = 'hidden';
    image.style.opacity = '1';
    image.style.visibility = 'visible';
}


function redirectToFyle() {
    // Redirect to FyleHQ website
    window.location.href = "https://www.fylehq.com/";
  }

  function changeProject(projectId) {
    var image = document.getElementById('projectImage');
    if (projectId === 'weather') {
        image.src = 'weather2.jpg'; 
        
    } else if (projectId === 'gallery') {
        image.src = 'gallery.png'; 
    } else if (projectId === 'car') {
        image.src = 'car.png';
    }
}

function addHoverEffect(element2) {
    const element=document.getElementById(element2)
    element.style.transform = 'scale(1.1)';
    element.style.backgroundColor = 'crimson';
    element.style.color = 'white';
  }

  // Function to remove hover effect
  function removeHoverEffect(element2) {
    const element=document.getElementById(element2)
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = '';
    element.style.color = 'black';
  }

  

  