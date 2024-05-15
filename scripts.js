document.getElementById('job-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;
    const industry = document.getElementById('industry').value;
    const experienceLevel = document.getElementById('experience-level').value;
    const salaryRange = document.getElementById('salary-range').value;

    // Placeholder for job search logic
    const results = [
        {
            title: 'Product Manager',
            company: 'Tech Innovators',
            location: 'Remote',
            industry: 'Web3',
            experienceLevel: 'Mid',
            salary: '$90,000 - $120,000',
        },
        {
            title: 'Senior Product Manager',
            company: 'Smart City Solutions',
            location: 'Remote',
            industry: 'Smart City',
            experienceLevel: 'Senior',
            salary: '$110,000 - $140,000',
        },
    ];

    const jobResultsContainer = document.getElementById('job-results');
    jobResultsContainer.innerHTML = '';

    results.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-listing';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Industry:</strong> ${job.industry}</p>
            <p><strong>Experience Level:</strong> ${job.experienceLevel}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;
        jobResultsContainer.appendChild(jobElement);
    });
});
