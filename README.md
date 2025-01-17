# API Test Framework

API Test Framework is a robust and flexible project built with TypeScript, Jest, and Supertest. It is designed to streamline API testing by focusing on contract validations and offering an extensible structure to suit your testing needs.

## Features

- Easy-to-Use: Simplifies API testing with preconfigured setups.
- Extensible: Allows you to customize validations to match your specific requirements.
- TypeScript Support: Ensures type safety and enhanced developer experience.
- Built-in Reporting: Includes a visually appealing HTML report.

## Installation
Install the framework via npm:

```
npm install api-test-framework
```

## Getting Started

### 1. Explore Example Tests:

- The project includes two test examples to get you started.

-  One example demonstrates token-based authentication.

### 2. Run Your Tests:

-  Use the following command to execute the tests:
   
```
npm test
```

## Reporting

To customize the report output, update the ```jest-html-reporter``` settings in the project configuration.

## Included Packages

The following dependencies are included in the framework:

1.```@types/jest```

2.```@types/node```

3.```@types/supertest```

4.```jest```

5.```jest-html-reporter```

6.```supertest```

7.```ts-jest```

8.```ts-node```

These packages provide a comprehensive testing environment, covering everything from type definitions to advanced reporting.

## Customization

Feel free to extend and adapt the framework to suit your testing needs:

1. **Adding Custom Test Cases:** Add your own test files in the designated test directory.

2. **Configuring Authentication:** Modify the existing examples or create new configurations for different authentication mechanisms.

3. **Updating Jest Configuration:** Adjust the Jest settings to align with your project requirements in the jest.config.ts file.

## Contribution

Contributions are welcome! If you encounter any issues or have ideas for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.