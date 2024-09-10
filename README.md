# Harris-Benedict TMR & Diet Suggestion Calculator

This project provides a solution to calculate your Total Metabolic Rate (TMR) based on the Harris-Benedict formula, which takes into account your weight, height, age, gender, and activity level. Additionally, it offers a **diet suggestion** based on your TMR, helping you manage your macronutrient intake (proteins, fats, and carbohydrates) with a caloric deficit.

## Features
- **Basal Metabolic Rate (BMR)** calculation using the Harris-Benedict equation.
- **Total Metabolic Rate (TMR)** computation based on activity level.
- **Diet Suggestion** based on TMR, caloric deficit, and weight to suggest the ideal amounts of proteins, fats, and carbohydrates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gsgaldino/diet-calculator.git
   ```
2. Navigate to the project folder:
   ```bash
   cd diet-calculator
   ```
3. Install dependencies:
   ```bash
   npm i
   ```

## Usage
To calculate your TMR and get a diet suggestion, you can use the HarrisBenedict class. Below is an example of how to use it:

#### Example
```js
import { HarrisBenedict } from './path-to/HarrisBenedict.js';

const calculator = new HarrisBenedict();

const result = calculator.calculate({
  weight: 70,      // in kg
  age: 25,         // in years
  gender: 'm',     // 'm' for male, 'f' for female
  height: 175,     // in cm
  activityFactor: 'moderate',  // 'mild', 'moderate', or 'high'
});

console.log(result);
```

#### Output
```json
{
  "basalMetabolicRate": 1691.25,
  "roundedBasalMetabolicRate": 1700,
  "totalMetabolicRate": 2550,
  "diet": {
    "proteins": 140,
    "fat": 70,
    "carbohydrates": 273.75
  }
}
```

## Contributing
Feel free to fork this project and contribute by submitting pull requests. Any improvements or suggestions are welcome.
