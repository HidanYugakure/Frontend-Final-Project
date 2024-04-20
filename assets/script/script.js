
document.addEventListener('DOMContentLoaded', function() {
    openTab('brands');


    var initialTabButton = document.querySelector('.tablink[data-tab="brands"]');
    if (initialTabButton) {
        initialTabButton.classList.add('active');
    }
});


function openTab(tabName) {
  
    var tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

  
    var tabLinks = document.querySelectorAll('.tablink');
    tabLinks.forEach(function(link) {
        link.classList.remove('active');
    });


    document.getElementById(tabName).style.display = 'block';

  
    var clickedTabButton = document.querySelector('.tablink[data-tab="' + tabName + '"]');
    if (clickedTabButton) {
        clickedTabButton.classList.add('active');
    }
}
