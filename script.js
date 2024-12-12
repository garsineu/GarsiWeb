// This initial part is to register the elements that I want the JavaScript to alter
const body = document.querySelector('body');
const darkmodebutton = document.querySelector('.darkmode');
const mochamodebutton = document.querySelector('.mochamode');
const button = document.querySelector('button');
const trial = document.querySelector('.starttrial');
const link = document.querySelectorAll('.link');
const learnmore = document.querySelectorAll('.learnmore');
const lightmodebutton = document.querySelector('.lightmode');
const logo = document.querySelector('.logo');

// This makes so the page always starts on the preferred color scheme, which is chosen in the popup menu
window.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkmode') === 'true';
    const isMochaMode = localStorage.getItem('mochamode') === 'true';

    if (isDarkMode) {
        applyDarkMode(true);
        localStorage.setItem('mochamode', false);
    } else if (isMochaMode) {
        applyMochaMode(true);
        localStorage.setItem('darkmode', false);
    } else {
        applyDarkMode(false);
        localStorage.setItem('darkmode', false);
        applyMochaMode(false);
        localStorage.setItem('mochamode', false);
    }
});

// Dark mode which disables any other active color scheme
function applyDarkMode(isDark) {
    if (isDark) {
        logo.classList.add('dark');
        link.forEach(link => link.classList.add('dark'));
        body.classList.add('dark');
        button.classList.add('dark');
        trial.classList.add('dark');
        menu.classList.add('dark');
        popup.classList.add('dark');
        logo.classList.remove('mocha');
        link.forEach(link => link.classList.remove('mocha'));
        body.classList.remove('mocha');
        button.classList.remove('mocha');
        trial.classList.remove('mocha');
        menu.classList.remove('mocha');
        popup.classList.remove('mocha');
        learnmore.forEach(link => link.classList.remove('mocha'));
    }
    else {
        logo.classList.remove('dark');
        link.forEach(link => link.classList.remove('dark'));
        body.classList.remove('dark');
        button.classList.remove('dark');
        trial.classList.remove('dark');
        menu.classList.remove('dark');
        popup.classList.remove('dark');
    }
}

// Mocha mode also disables the rest of the color schemes for compatibility sake
function applyMochaMode(isMocha) {
    if (isMocha) {
        logo.classList.add('mocha');
        link.forEach(link => link.classList.add('mocha'));
        body.classList.add('mocha');
        button.classList.add('mocha');
        trial.classList.add('mocha');
        menu.classList.add('mocha');
        popup.classList.add('mocha');
        learnmore.forEach(learnmore => learnmore.classList.add('mocha'));
        logo.classList.remove('dark');
        link.forEach(link => link.classList.remove('dark'));
        body.classList.remove('dark');
        button.classList.remove('dark');
        trial.classList.remove('dark');
        menu.classList.remove('dark');
        popup.classList.remove('dark');
    }
    else {
        logo.classList.remove('mocha');
        link.forEach(link => link.classList.remove('mocha'));
        body.classList.remove('mocha');
        button.classList.remove('mocha');
        trial.classList.remove('mocha');
        menu.classList.remove('mocha');
        popup.classList.remove('mocha');        
        learnmore.forEach(learnmore => learnmore.classList.remove('mocha'));
    }
}

// Light mode disables every other color scheme, setting the page to the default values
function applyLightMode() {
    logo.classList.remove('dark', 'mocha');
    link.forEach(link => link.classList.remove('mocha'));
    body.classList.remove('dark', 'mocha');
    button.classList.remove('dark', 'mocha');
    trial.classList.remove('dark', 'mocha');
    menu.classList.remove('dark', 'mocha');
    popup.classList.remove('dark', 'mocha');
    link.forEach(link => link.classList.remove('dark', 'mocha'));
    learnmore.forEach(learnmore => learnmore.classList.remove('dark', 'mocha'));

    // Update localStorage to disable both modes
    localStorage.setItem('darkmode', false);
    localStorage.setItem('mochamode', false);
}

// Enable Mocha mode on click, triggering the isMocha status which adds the .Mocha class to the selected elements
mochamodebutton.addEventListener('click', () => {
    const isMocha =
    logo.classList.toggle('mocha');
    link.forEach(link => link.classList.toggle('mocha'));
    body.classList.toggle('mocha');
    button.classList.toggle('mocha');
    trial.classList.toggle('mocha');
    menu.classList.toggle('mocha');
    popup.classList.toggle('mocha');
    learnmore.forEach(learnmore => learnmore.classList.toggle('mocha'));

    applyMochaMode(isMocha);

    localStorage.setItem('mochamode', isMocha)
});

// Enable darkmode on click, triggering the isDark status which adds the .dark class to the selected elements
darkmodebutton.addEventListener('click', () => {
    const isDark =
    logo.classList.toggle('dark');
    link.forEach(link => link.classList.toggle('dark'));
    body.classList.toggle('dark');
    button.classList.toggle('dark');
    trial.classList.toggle('dark');
    menu.classList.toggle('dark');
    popup.classList.toggle('dark');

    applyDarkMode(isDark);

    localStorage.setItem('darkmode', isDark)
});

// Enable light mode, which disables the other two color schemes
lightmodebutton.addEventListener('click', () => {
    applyLightMode();
});

// Popup menu for the settings tab (I had to learn how to do this so I still don't know exactly how it works, thanks ChatGPT)
// The functions and elements are inside the storage function, which I guess would work if I did so with the other functions
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const popup = document.getElementById("popup");

    // Toggle the popup menu on button click
    menu.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        popup.classList.toggle("show");
    });

    // Close the popup menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!popup.contains(event.target) && !menu.contains(event.target)) {
            popup.classList.remove("show");
        }
    });
});

// Image popup which opens a floating tab when clicking on an image, almost functions like the pop up menu, with the added query for the image source
document.addEventListener("DOMContentLoaded", () => {
    const clickableImages = document.querySelectorAll(".clickableImage");
    const floatingWindow = document.getElementById("floatingWindow");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeBtn");

    // Show modal with the clicked image
    clickableImages.forEach((image) => {
      image.addEventListener("click", () => {

        // This gets the source from the data attribute
        const imgSrc = image.getAttribute("data-src"); 

        // This sets the modal image source
        modalImage.src = imgSrc; 
        floatingWindow.classList.remove("hidden");
      });
    });
  
    // Close modal when clicking the button
    closeBtn.addEventListener("click", () => {
      floatingWindow.classList.add("hidden");
    });
  
    // Close modal when clicking outside the content
    floatingWindow.addEventListener("click", (event) => {
      if (event.target === floatingWindow) {
        floatingWindow.classList.add("hidden");
      }
    });
  });