// app.js
angular.module('portfolioApp', [])
  .controller('MainController', function ($scope) {
    $scope.projects = [
      { title: 'Portfolio Website', description: 'Built with HTML, CSS, and AngularJS.' },
      { title: 'E-commerce Template', description: 'Responsive site for small businesses.' }
    ];

    $scope.skills = [
      'HTML5', 'CSS3', 'JavaScript', 'AngularJS', 'Git', 'REST APIs'
    ];
  });

