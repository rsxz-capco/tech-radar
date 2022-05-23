Feature: React content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: React content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Frontend" via the hamburger menu
    And the user navigates to category "React"
    And the user should see "React is the world’s most popular JavaScript library that uses components to change content of a single-page Mobile and Web application without refreshing."
    And the user should see "Managing states is one of the biggest challenges in large web applications. Using React alone may not be sufficient to handle such complexity. We need a way to share data across components by creating a central store that holds all states of your application."
    And the user should see "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error."
    And the user should see "A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via GitHub Actions."
    And the user clicks accordion "Redux"
    And the user can see accordion "Redux" description "Redux provides a central store for states that each component can access. Main building parts: store, actions, reducers and optional middleware."
    And the user clicks accordion "ContextAPI"
    And the user can see accordion "ContextAPI" description "Context provides a way to pass data through the component tree without having to pass props down manually at every level and helps to avoid the prop-drilling problem. It has 3 main building parts: context, provider and consumer."
    And the user clicks accordion "MaterialUI"
    And the user can see accordion "MaterialUI" description "Google’s Material Design is a popular React UI library with responsive animations and it has been adopted by the wider design community."
    And the user clicks accordion "SemanticUI"
    And the user can see accordion "SemanticUI" description "SemanticUI contains pre-built semantic components that helps create responsive layouts."
    And the user clicks accordion "Ant Design of React"
    And the user can see accordion "Ant Design of React" description "Ant Design of React contains a set of high-quality components and demos for building rich, interactive user interfaces."
    And the user clicks accordion "CSS and SASS"
    And the user can see accordion "CSS and SASS" description "This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called SASS."
    And the user clicks accordion "BEM - Block Element Modifier"
    And the user can see accordion "BEM - Block Element Modifier" description "It's a CSS naming convention for writing cleaner and more readable CSS classes. BEM aims to write independent CSS blocks increasing reusability."
    And the user clicks accordion "CSS Modules"
    And the user can see accordion "CSS Modules" description "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side."
    And the user clicks accordion "Styled Components"
    And the user can see accordion "Styled Components" description "styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS."
    And the user clicks accordion "Jest"
    And the user can see accordion "Jest" description "Jest is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution."
    And the user clicks accordion "Enzyme"
    And the user can see accordion "Enzyme" description "Enzyme is an open-source JavaScript testing utility by Airbnb and needs a testing library to provide a foundation for the tests it generates. Using Jest and Enzyme together results in cleaner testing code that’s also easier to debug when a test breaks. Jest as a test runner and assertion library, then use Enzyme to build the tests for their UI."
    And the user clicks accordion "React Testing Library"
    And the user can see accordion "React Testing Library" description "The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices."
    And the user clicks accordion "Cypress"
    And the user can see accordion "Cypress" description "Cypress is a JavaScript based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is a feature-rich JavaScript test framework, making asynchronous testing simple. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework."