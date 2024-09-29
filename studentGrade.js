let marks = prompt("Enter your marks.");
marks = parseFloat(),
//ensure grade entered in prompt is a float
function studentMarks(marks) {
      if (marks >= 0 && marks < 39) 
        return ('Grade E');
        else if(marks >= 40 && marks < 49) 
            return ('Grade D');
        
        else if(marks >= 50 && marks < 59) 
            return ('Grade C');
        
        else if(marks >= 60 && marks < 79) 
            return ('Grade B');
        
        else if(marks >= 80 && marks <= 100) 
            return ('Grade A');
        else {
        return ("Marks only range between 0 - 100");}
    //To ensure that marks only range between 0 - 100
};
// function studentMarks that serves the role of converting marks to grade
studentMarks(marks);
//calls out function studentFunction in order to excecute function

