document.querySelectorAll('.course').forEach((course) => {
  course.addEventListener('mouseover', function () {
    course.children[2].classList.remove('hidden');
  });
});

document.querySelectorAll('.course').forEach((course) => {
  course.addEventListener('mouseout', function () {
    course.children[2].classList.add('hidden');
  });
});
