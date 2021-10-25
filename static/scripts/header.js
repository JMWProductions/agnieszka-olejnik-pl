document.addEventListener('scroll', () => {
  if (window.innerWidth > 690) {
    if (document.documentElement.scrollTop >= 140) {
      document.getElementById("header").classList.remove("header-enlarge");
      document.getElementById("header").classList.add("header-shrink");
    }
    else {
      document.getElementById("header").classList.remove("header-shrink");
      document.getElementById("header").classList.add("header-enlarge");
    }
  }
});

const manageMobileMenuVisibility = () => {
  if (document.getElementById("whole-site-container").classList.contains("whole-site-moved")) {
    document.getElementById("whole-site-container").classList.remove("whole-site-moved");
  }
  else {
    document.getElementById("whole-site-container").classList.add("whole-site-moved");
  }
}

const manageMobileDropdownVisibility = () => {
  if (document.getElementById("mobile-dropdown-arrow").classList.contains("mobile-dropdown-arrow-rotated")) {
    document.getElementById("mobile-dropdown-arrow").classList.remove("mobile-dropdown-arrow-rotated");
    document.getElementById("mobile-dropdown").classList.remove("mobile-dropdown-visible");
  }
  else {
    document.getElementById("mobile-dropdown-arrow").classList.add("mobile-dropdown-arrow-rotated");
    document.getElementById("mobile-dropdown").classList.add("mobile-dropdown-visible");
  }
}
