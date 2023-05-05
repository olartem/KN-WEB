
function triangle(value1, param1, value2, param2) {
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;
  if (value1 <= 0 || value2 <= 0) {
    return "Zero or negative input";
  }
  let a, b, c, alpha, beta;

  switch (param1) {
    case "leg":
      a = value1;
      break;
    case "adjacent angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      alpha = value1 * DEG_TO_RAD;
      break;
    case "opposite angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      beta = value1 * DEG_TO_RAD;
      break;
    case "hypotenuse":
      c = value1;
      break;
    case "angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      if (param2 === "hypotenuse") {
        alpha = value1 * DEG_TO_RAD;
      } else {
        return "Invalid parameter combination";
      }
      break;
    default:
      return "Invalid parameter";
  }

  switch (param2) {
    case "leg":
      b = value2;
      break;
    case "adjacent angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      alpha = value2 * DEG_TO_RAD;
      break;
    case "opposite angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      beta = value2 * DEG_TO_RAD;
      break;
    case "hypotenuse":
      c = value2;
      break;
    case "angle":
      if (value1 >= 90) {
        return "Angle must be less than 90 deg";
      }
      if (param1 === "hypotenuse") {
        alpha = value2 * DEG_TO_RAD;
      } else {
        return "Invalid parameter combination";
      }
      break;
    default:
      return "Invalid parameter";
  }

  switch (true) {
    case (param1 === "leg" && param2 === "leg"):
      console.log("1");
      c = Math.sqrt(a * a + b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "hypotenuse"):
      console.log("2");
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "hypotenuse" && param2 === "leg"):
      console.log("3");
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "adjacent angle"):
      console.log("4");
      c = a / Math.cos(alpha);
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "adjacent angle" && param2 === "leg"):
      console.log("5");
      c = b / Math.cos(alpha);
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "opposite angle"):
      console.log("6");
      c = a / Math.sin(beta);
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "opposite angle" && param2 === "leg"):
      console.log("7");
      c = b / Math.sin(beta);
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "angle" && param2 === "hypotenuse"):
      console.log("8");
      a = c * Math.sin(alpha);
      b = c * Math.cos(alpha);
      beta = Math.PI / 2 - alpha;
      break;
    case (param1 === "hypotenuse" && param2 === "angle"):
      console.log("9");
      a = c * Math.sin(alpha);
      b = c * Math.cos(alpha);
      beta = Math.PI / 2 - alpha;
      break;
    default:
      return "Invalid parameter";
  }

  return { a, b, c, alpha: alpha * RAD_TO_DEG, beta: beta * RAD_TO_DEG };
}
