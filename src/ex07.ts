// Exercise 7: Function Overloads
// Define an interface for a function that can accept either a string or a number as a parameter.
// Write a function using overloads that handles both types and logs a different message for each.
enum MessageLog {
  Message = "Message",
  Code = "Code"
}

interface LoggerMss {
  type: MessageLog.Message,
  name: string
}

interface LoggerCod {
  type: MessageLog.Code,
  code: number
}

type NumStr = LoggerMss | LoggerCod

const logMessage = (input: NumStr) => {
  if (typeof input === "string") {
    console.log(`Message: ${input}`);
  } else {
    console.log(`Code: ${input}`);
  }
};

logMessage("Hello");
// Expected Output: "Message: Hello"

logMessage(404);
// Expected Output: "Code: 404"