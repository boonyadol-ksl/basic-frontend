const calculateGrade = (score) => {
  if (score >= 80) return "A";
  else if (score >= 75) return "B+";
  else if (score >= 70) return "B";
  else if (score >= 65) return "C+";
  else if (score >= 60) return "C";
  else if (score >= 55) return "D+";
  else if (score >= 50) return "D";
  else return "F";
};


console.log(calculateGrade(76)); // A
console.log(calculateGrade(55)); // B+
