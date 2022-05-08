document.querySelectorAll('.course').forEach((course) => {
  course.addEventListener('mouseover', function () {
    course.classList.remove('hidden');
  });
});
