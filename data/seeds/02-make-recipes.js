const recipes = [
    {recipe_name: 'Spaghetti'},
    {recipe_name: 'Tacos'},
    {recipe_name: 'Banana Bread'}
]

const ingredients = [
    {ingredient_name: 'Ground Beef', unit: 'lbs'},
    {ingredient_name: 'Pasta', unit: 'oz'},
    {ingredient_name: 'Bananas', unit: 'c'},
    {ingredient_name: 'Sugar', unit: 'c'},
    {ingredient_name: 'Seasoning', unit: 'pk'},
    {ingredient_name: 'Tomato Sauce', unit: 'oz'},
    {ingredient_name: 'Tortillas', unit: 'pk'}
]

const steps = [
    {step_number: 1, step_instructions: 'Brown ground beef', recipe_id: 1},
    {step_number: 2, step_instructions: 'Add tomato sauce and sugar', recipe_id: 1},
    {step_number: 3, step_instructions: 'Mix in pasta and seasoning', recipe_id: 1},
    {step_number: 1, step_instructions: 'Brown ground beef', recipe_id: 2},
    {step_number: 2, step_instructions: 'Add in seasoning', recipe_id: 2},
    {step_number: 3, step_instructions: 'Serve on tortillas', recipe_id: 2},
    {step_number: 1, step_instructions: 'Mash bananas', recipe_id: 3},
    {step_number: 2, step_instructions: 'Mix in sugar', recipe_id: 3},
    {step_number: 3, step_instructions: 'Cook in oven at 400', recipe_id: 3},
]

const step_ingredients =[
    {quantity: 2, step_id: 1, ingredient_id: 1},
    {quantity: 8.02, step_id: 2, ingredient_id: 6},
    {quantity: 1, step_id: 2, ingredient_id: 4},
    {quantity: 3, step_id: 3, ingredient_id: 2},
    {quantity: 3, step_id: 3, ingredient_id: 5},
    {quantity: 2.5, step_id: 4, ingredient_id: 1},
    {quantity: 2, step_id: 5, ingredient_id: 5},
    {quantity: 1, step_id: 6, ingredient_id: 7},
    {quantity: 4, step_id: 7, ingredient_id: 3},
    {quantity: 2.5, step_id: 8, ingredient_id: 4},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}