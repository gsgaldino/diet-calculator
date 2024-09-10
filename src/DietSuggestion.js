export class DietSuggestion {
  constructor() {
    this.constants = {
      proteinsPerKg: 2,
      fatPerKg: 1,
      caloriesPerGrams: {
        protein: 4,
        fat: 9,
        carbohydrate: 4,
      },
    };
  }

  calculate({ totalMetabolicRate, caloricDeficit, weight }) {
    const availableCalories = totalMetabolicRate - caloricDeficit;
    const proteins = weight * this.constants.proteinsPerKg;
    const fat = weight * this.constants.fatPerKg;

    const proteinsCalories = proteins * this.constants.caloriesPerGrams.protein;
    const fatCalories = fat * this.constants.caloriesPerGrams.fat;
    const proteinsAndFatCalories = proteinsCalories + fatCalories;
    const carboAvailableCalories = availableCalories - proteinsAndFatCalories;
    const carbohydrates =
      carboAvailableCalories / this.constants.caloriesPerGrams.carbohydrate;
    return { proteins, fat, carbohydrates };
  }
}
