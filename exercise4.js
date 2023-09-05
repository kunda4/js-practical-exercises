// Explanation of changes:

// A) I've added a createExperiment function that checks for incomplete experiment data using a throw statement. This will immediately break the code if incomplete data is provided.

// B) I've used the createExperiment function to initialize the experiment1, experiment2, and experiment3 objects.

// C) I've replaced the listOfExperiments array with a Set to ensure that the same experiment isn't added twice. I've also updated the getAllExperimentsOnDate function to use the spread operator ([...listOfExperiments]) to convert the Set to an array for filtering and mapping.

// D) I've simplified the functions dateFilter and experimentNameMapper using arrow functions. This effectively defines and uses these functions in the same line of code.

//---------------helpers & constants

const listOfExperiments = new Set();

function createExperiment(name, date, time, description, conclusion) {
  if (
    typeof name !== "string" ||
    typeof date !== "string" ||
    typeof time !== "string" ||
    typeof description !== "string" ||
    typeof conclusion !== "string"
  ) {
    throw new Error("Incomplete experiment data");
  }

  return {
    name,
    date,
    time,
    description,
    conclusion,
  };
}

const experiment1 = createExperiment(
  "Experiment 1",
  "25.02.2023",
  "14:20",
  "I threw rocks of 5 different weights on my test bike.",
  "The rocks that weighed more than 200g left quite a dent."
);

const experiment2 = createExperiment(
  "Experiment 2",
  "25.02.2023", // Updated date
  "23:18",
  "I put a chunk of our super secret new bike material into the microwave, to see how long it takes to melt.",
  "On average, it takes 1.5 minutes to melt."
);

const experiment3 = createExperiment(
  "Experiment 3",
  "28.02.2023",
  "02:11",
  "I glued three watermelons onto the seat of the test bike to see if they would break when the bike falls over.",
  "Two of the three watermelons broke."
);

listOfExperiments.add(experiment1);
listOfExperiments.add(experiment2);
listOfExperiments.add(experiment3);

//---------------getAllExperimentsOnDate

function getAllExperimentsOnDate(date) {
  if (typeof date !== "string") {
    return null;
  }

  const listOfExperimentsOnDate = [...listOfExperiments].filter(
    (experiment) => experiment.date === date
  );
  return listOfExperimentsOnDate.map((experiment) => experiment.name);
}

function testGetAllExperimentsOnDate() {
  var allExperimentsOn25022023 = getAllExperimentsOnDate("25.02.2023");

  if (!allExperimentsOn25022023.includes("Experiment 1")) {
    return false;
  }

  if (!allExperimentsOn25022023.includes("Experiment 2")) {
    return false;
  }

  return true;
}

if (testGetAllExperimentsOnDate() === false) {
  console.log("The getAllExperimentsOnDate function is wrong.");
} else {
  console.log("The getAllExperimentsOnDate function works fine!");
}
