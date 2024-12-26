//  // Dark Mode Toggle
//     document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
//       document.body.classList.toggle('dark-mode');
//     });

//     // Sample Charts
//     const skillsCtx = document.getElementById('skillsChart').getContext('2d');
//     const techAnalysisCtx = document.getElementById('techAnalysisChart').getContext('2d');

//     // Skills Chart
//     new Chart(skillsCtx, {
//       type: 'bar',
//       data: {
//         labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//         datasets: [{
//           label: 'Skill Level',
//           data: [85, 90, 80, 70, 60],
//           backgroundColor: ['#007bff', '#fd7e14', '#28a745', '#ffc107', '#6c757d']
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           tooltip: {
//             enabled: true
//           }
//         }
//       }
//     });

//     // Tech Analysis Chart
//     new Chart(techAnalysisCtx, {
//       type: 'pie',
//       data: {
//         labels: ['Frontend', 'Backend', 'Data Science', 'Mobile Dev'],
//         datasets: [{
//           data: [40, 30, 20, 10],
//           backgroundColor: ['#007bff', '#28a745', '#fd7e14', '#6c63ff']
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           tooltip: {
//             enabled: true
//           }
//         }
//       }
//     });
// Dark Mode Toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Sample Charts
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
const techAnalysisCtx = document.getElementById('techAnalysisChart').getContext('2d');

// Skills Chart
new Chart(skillsCtx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    datasets: [{
      label: 'Skill Level',
      data: [85, 90, 80, 70, 60],
      backgroundColor: ['#007bff', '#fd7e14', '#28a745', '#ffc107', '#6c757d']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    }
  }
});

// Tech Analysis Chart
new Chart(techAnalysisCtx, {
  type: 'pie',
  data: {
    labels: ['Frontend', 'Backend', 'Data Science', 'Mobile Dev'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ['#007bff', '#28a745', '#fd7e14', '#6c63ff']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    }
  }
});