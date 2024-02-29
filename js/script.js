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
  "$window",
  "$timeout",
  function ($scope, $window, $timeout) {
    $scope.goToUrl_new = function (path) {
      $window.open(path, "_blank");
    };

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

    $scope.socialMedias = [
      {
        media: "linkedin",
        icon: "linkedin.svg",
        url: "www.linkedin.com/in/dumidupramith",
      },
      {
        media: "X",
        icon: "x_logo.svg",
        url: "https://twitter.com/DumiduMaxx",
      },
      {
        media: "facebook",
        icon: "facebook.svg",
        url: "https://web.facebook.com/dumidu.induka.5",
      },
    ];

    $scope.removeFadeIn = false; // initial value
    $timeout(function () {
      $scope.removeFadeIn = true;
    }, 1000);
  },
]);

portfolioApp.controller("aboutController", [
  "$scope",
  "$timeout",
  "$window",
  function ($scope, $timeout, $window) {
    $scope.skills = [];
    $scope.tools = [];
    var scroll = 0;

    $scope.skillsFn = function () {
      $timeout(function () {
        scroll = 1;
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
      if (scroll === 1) {
        $timeout(function () {
          $window.scrollTo(0, document.body.scrollHeight);
        }, 100);
      }
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
      $timeout(function () {
        $window.scrollTo(0, document.body.scrollHeight);
      }, 100);
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
        description:
          "My personal portfolio website design using Figma and its development done using Angularjs. This project i used angular animations too.",
        technology: "Angularjs",
        image: "portfolio.png",
        github_link: "https://github.com/DumiduPramith/portfolio",
        live_link: "",
      },
      {
        title: "Car Renting System",
        description:
          "I designed and developed an innovative online car renting platform using Angular for frontend development and Figma for the create design.",
        technology: "Angular, Django",
        image: "green_rent.png",
        github_link: "https://github.com/DumiduPramith/green-rent",
        live_link:
          "https://www.figma.com/file/qskZy40GPdG7NrrFE9jVhf/Car_Rental?type=design&node-id=34%3A566&mode=dev&t=zXF8dnLA2B0aK3lN-1",
      },
      {
        title: "Ecommerce Website design",
        description: "I designed e-commerce website design using Figma",
        technology: "Figma",
        image: "ecommerce.png",
        github_link: "",
        live_link:
          "https://www.figma.com/file/rD6b4WPmH5z4WdysF54k70/ecommerce?type=design&node-id=0%3A1&mode=dev&t=AkmO3OP0JPtp54kM-1",
      },
      {
        title: "Ecommerce Website",
        description:
          "I developed an e-commerce website using Django and Angular for frontend development. mysql used as the database.",
        technology: "Angular, Django",
        image: "ecommerce_2.png",
        github_link: "https://github.com/DumiduPramith/electro-ecommerce",
        live_link: "/images/portfolio/ecommerce_2.png",
      },
      {
        title: "Career Development poster",
        description:
          "I designed a career development poster for Team IRIS using photoshop.",
        technology: "Photoshop",
        image: "poster.jpg",
        github_link: "",
        live_link: "/images/portfolio/poster.jpg",
      },
    ];
  },
]);

portfolioApp.controller("contactController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {
    $scope.oneTimeRan = false;
    $timeout(function () {
      $scope.oneTimeRan = true;
    }, 1000);
  },
]);
