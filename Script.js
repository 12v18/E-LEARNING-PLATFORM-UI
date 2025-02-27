document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('#course-list li');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const video = document.getElementById('course-video');

    courses.forEach(course => {
        course.addEventListener('click', () => {
            const progress = parseInt(course.getAttribute('data-progress'));
            updateProgress(progress + 10); // Increment progress by 10% for demonstration
            course.setAttribute('data-progress', progress + 10);
        });
    });

    video.addEventListener('load', () => {
        console.log('Video loaded');
        // Additional real-time interactions can be implemented here
    });

    function updateProgress(value) {
        if (value > 100) value = 100;
        progressBar.style.width = value + '%';
        progressText.innerText = value + '% Complete';
    }
});
