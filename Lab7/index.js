
function triangle(value1, param1, value2, param2) {
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;
  if (value1 <= 0 || value2 <= 0) {
    return "Zero or negative input";
  }
  let a, b, c, alpha, beta;

  switch (true) {
    case (param1 === "leg" && param2 === "leg"):
      //console.log("1");
      a = value1;
      b = value2;
      c = Math.sqrt(a * a + b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "hypotenuse"):
      //console.log("2");
      if(value1 >= value2){
        return "Leg must be less than hypotenuse";
      }
      a = value1;
      c = value2;
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "hypotenuse" && param2 === "leg"):
      //console.log("3");
      if(value2 >= value1){
        return "Leg must be less than hypotenuse";
      }
      c = value1;
      b = value2;
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "adjacent angle"):
      //console.log("4");
      if(value2 >= 90){
        return "Adjacent angle must be less than 90 deg";
      }
      a = value1;
      alpha = value2 * DEG_TO_RAD;
      c = a / Math.cos(alpha);
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "adjacent angle" && param2 === "leg"):
      //console.log("5");
      if(value1 >= 90){
        return "Adjacent angle must be less than 90 deg";
      }
      alpha = value1 * DEG_TO_RAD;
      b = value2;
      c = b / Math.cos(alpha);
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "leg" && param2 === "opposite angle"):
      //console.log("6");
      if(value2 >= 90){
        return "Opposite angle must be less than 90 deg";
      }
      a = value1;
      beta = value2 * DEG_TO_RAD;
      c = a / Math.sin(beta);
      b = Math.sqrt(c * c - a * a);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "opposite angle" && param2 === "leg"):
      //console.log("7");
      if(value2 >= 90){
        return "Opposite angle must be less than 90 deg";
      }
      b = value2;
      beta = value1 * DEG_TO_RAD;
      c = b / Math.sin(beta);
      a = Math.sqrt(c * c - b * b);
      alpha = Math.asin(a / c);
      beta = Math.asin(b / c);
      break;
    case (param1 === "angle" && param2 === "hypotenuse"):
      //console.log("8");
      if(value1 >= 90){
        return "Angle must be less than 90 deg";
      }
      c = value2;
      alpha = value1 * DEG_TO_RAD;
      a = c * Math.sin(alpha);
      b = c * Math.cos(alpha);
      beta = Math.PI / 2 - alpha;
      break;
    case (param1 === "hypotenuse" && param2 === "angle"):
      //console.log("9");
      if(value2 >= 90){
        return "Angle must be less than 90 deg";
      }
      c = value1;
      alpha = value2 * DEG_TO_RAD;
      a = c * Math.sin(alpha);
      b = c * Math.cos(alpha);
      beta = Math.PI / 2 - alpha;
      break;
    default:
      return "Invalid parameter";
  }
  if(a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0){
    return "Error";
  }
  if(a <= Number.EPSILON || b <= Number.EPSILON || c <= Number.EPSILON || alpha <= Number.EPSILON || beta <= Number.EPSILON){
    return "Error";
  }
  console.log ("a = " + a);
  console.log("b = " + b);
  console.log("c = " + c);
  console.log("alpha = " + (alpha * RAD_TO_DEG));
  console.log("beta = " + (beta * RAD_TO_DEG));
}
