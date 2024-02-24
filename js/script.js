var portfolioApp = angular.module("portfolioApp", ["ngRoute", "ngAnimate"]);

portfolioApp.run(function ($animate) {
  $animate.enabled(true);
});

portfolioApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "pages/home.html",
        controller: "homeController",
      })
      .when("/about", {
        templateUrl: "pages/about.html",
        controller: "aboutController",
      })
      .when("/portfolio", {
        templateUrl: "pages/portfolio.html",
        controller: "portfolioController",
      })
      .when("/contact", {
        templateUrl: "pages/contact.html",
        controller: "contactController",
      })
      .otherwise({ redirectTo: "/" });

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false,
    // });
    $locationProvider.hashPrefix("");
  },
]);

portfolioApp.controller("indexController", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.goToUrl = function (path) {
      $location.path(path);
    };

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.links = [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Portfolio",
        url: "/portfolio",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ];
  },
]);

portfolioApp.controller("homeController", [
  "$scope",
  function ($scope) {
    var typed = new Typed(".auto-type", {
      strings: [
        "Web-Developer",
        "Full-stack Engineer",
        "Informatics Student",
        "Tech Enthusiast",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  },
]);

portfolioApp.controller("aboutController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {
    $scope.skills = [];
    $scope.tools = [];

    $scope.skillsFn = function () {
      $timeout(function () {
        $scope.skills = [
          {
            skill: "HTML",
            level: "Advanced",
            icon: "html.png",
          },
          {
            skill: "CSS",
            level: "Advanced",
            icon: "css.png",
          },
          {
            skill: "JavaScript",
            level: "Advanced",
            icon: "js.png",
          },
          {
            skill: "Python",
            level: "Advanced",
            icon: "python.png",
          },
          {
            skill: "Angular",
            level: "Advanced",
            icon: "angular.png",
          },
          {
            skill: "Ng Material",
            level: "Advanced",
            icon: "material.png",
          },
          {
            skill: "django",
            level: "Intermediate",
            icon: "django.png",
          },
          {
            skill: "Bootstrap",
            level: "Intermediate",
            icon: "bootstrap.png",
          },
          {
            skill: "ionic",
            level: "Beginner",
            icon: "ionic.png",
          },
          {
            skill: "Node.js",
            level: "Beginner",
            icon: "node.png",
          },
          {
            skill: "scrapy",
            level: "Beginner",
            icon: "scrapy.png",
          },
          {
            skill: "PHP",
            level: "Beginner",
            icon: "php.png",
          },
        ];
      });
      $scope.tools = [];
    };

    $scope.toolsFn = function () {
      $timeout(function () {
        $scope.tools = [
          { tool: "Git", description: "Version Control", icon: "git.png" },
          { tool: "Github", description: "Code Hosting", icon: "github.png" },
          { tool: "MySql", description: "Database", icon: "mysql.png" },
          { tool: "Postman", description: "API Testing", icon: "postman.png" },
          {
            tool: "Wireshark",
            description: "Network Analysis",
            icon: "wireshark.png",
          },
        ];
      });
      $scope.skills = [];
    };

    $scope.skillsFn();
  },
]);

portfolioApp.controller("portfolioController", [
  "$scope",
  function ($scope) {
    $scope.projects = [
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
      {
        title: "Personal Website",
        description: "Personal Portfolio",
        technology: "vue",
        image: "portfolio.png",
        github_link: "",
        live_link: "",
      },
    ];
  },
]);

portfolioApp.controller("contactController", [
  "$scope",
  function ($scope) {
    console.log("hello contact");
  },
]);
