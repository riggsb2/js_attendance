
function submit() {
  const results = []
  var date = new Date
  table = document.getElementById("Attendance_table");
  for(var row of table.children){
    //console.log(`${row.id}`)
    for(var box of row.children){
      if (box.name=='checkbox'){
        //console.log(box.children[0].checked);
        results.push([row.id, 
          box.children[0].checked,
          date 
          ])
      }

    }
  }
  // Need to submit to a log table of some kind
  console.log(results)

  console.log('Submission Received')
}